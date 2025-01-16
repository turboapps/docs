## SQL Test Lab Environments

Turbo.net is a great way to provide online learning and test lab environments for SQL Server and other complex applications. Turbo VMs provide the user with a ready-to-use database server, sample content, and test IDE environment -- without requiring any setup or modifying the host desktop.

Here we will show you how to create a SQL Server Turbo VM lab that can be easily executed in your lab environment. In our example, we will create a lab environment for this article from SQL Server Central, one of the world's largest SQL Server communities: [http://www.sqlservercentral.com/articles/T-SQL/130558/](http://www.sqlservercentral.com/articles/T-SQL/130558/).

### Prerequisites

If you want to follow along building this example, you will first need to download the [Wildcard Searches.sql](http://www.sqlservercentral.com/Files/Wildcard%20Searches.sql/27022.sql) file. This will require an account at SQL Server Central.

### The Basics

Our SQL environment will consist of three Turbo container images:

- sqlserver/sqlserver-express
- sqlserver/ssms
- A content layer that will provide content specific to the article for which the image is being created. Typically this is a SQL script, but could also include a database or other resources.

### Step 1: Create the Lab Image

#### Specify a Sample SQL Script

Create a folder on your system for the contents of the content layer and change the directory of the command window to that folder.

```
> mkdir %UserProfile%\Desktop\article-content
> cd %UserProfile%\Desktop\article-content
```

Copy the **Wildcard Searches.sql** file into the article-content folder. The SQL Script must be named **script.sql**.

Create a **turbo.me** file which will be used to build the image. If prompted, select to save or create the file.

```
> notepad turbo.me
```

Add the following content to the **turbo.me** file:

```
# This TurboScript creates a content image to use with sqlserver/sqlserver-express

# Copy the content from the TurboScript directory.
copy script.sql c:\sql-content\script.sql
```

We will be using the **tempdb** which is in our SQL Server Express container, so we can skip to **Build the Custom Image**. *If you want to use a custom database as sample content, follow the instructions in the **Adding a Sample Database** to the Custom Image section.*

#### Adding a Sample Database to the Custom Image

**Note:** This section is optional and not required for the example.

To use your own sample database, create a new container on top of the base images using the following command:

```
> turbo new --name=content-for-article-container sqlserver/sqlserver-express:2012,sqlserver/ssms:2012
```

After SSMS launches, configure the sample database. You can connect to the **.\sqlexpress** instance with username **sa** and password **password1**.

Alternatively you can restore the database from a backup file. To do this, use the **mount** option to specify the folder on the host system where the backup database file resides. In this example, the mount point is set to the folder **C:\SampleDB**.

```
> turbo new --name=content-for-article-container --mount=C:\SampleDB sqlserver/sqlserver-express:2012,sqlserver/ssms:2012
```

After SSMS launches, configure the sample database by restoring the **.bak** file.

When configuration is complete, close SSMS and the content will be saved into a container called **content-for-article-container**.

Copy the SQL **DATA** folder from the container to the host (run this command from the same directory as your turbo.me file):

```
> turbo copy content-for-article-container:"C:\Program Files (x86)\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA" host:.
```

Remove the files that are not needed:

```
> del DATA\model.mdf DATA\modellog.ldf DATA\MSDBData.mdf DATA\MSDBLog.ldf DATA\tempdb.mdf DATA\templog.ldf
```

NOTE: This assumeed you made changes to 'master' database. The point of the exercise is to remove all the database files that you don't need as many files are there by default.

Once the data is copied out of the container, it may be discarded:

```
> turbo rm content-for-article-container
```

Now that the sample database is present, append a line to the **turbo.me** file to copy the **DATA** folder into the custom image during the image build process:

```
# This TurboScript creates a content image to use with sqlserver/sqlserver-express

# Copy the content from the TurboScript directory.
copy script.sql c:\sql-content\script.sql
copy DATA c:\sql-content\
```

When the SSMS container starts, the user will have to attach the database to access the data. You can also put your database files directly in the SQL Server DATA directory to be attached automatically.

#### Build the Lab Image

Now that we have the contents ready for the lab image, we can build the image using the **turbo.me** file. Use an appropriate name in place of **sql-sample-content**. For example, if the VM corresponds to an article, a good practice would be for the image name to match the article title. Our example is based on an article titled *SQL Wildcard Searches* so we will name our image **turbouser/sql-wildcard-searches**. The placeholder **turbouser** should be set to your login name (you can find your login name with the command turbo login).

```
> turbo build --name=turbouser/sql-wildcard-searches turbo.me
```

After the build completes, test the new image.

```
> turbo run --route-block=tcp --name=testing-for-article-container sqlserver/sqlserver-express:2012,sqlserver/ssms:2012,turbouser/sql-wildcard-searches
```

#### Publish the Custom Image

Once the image has been tested, push the **sql-wildcard-searches** image to Turbo.net:

```
> turbo push turbouser/sql-wildcard-searches
```

For ease, this example is already available on the Turbo.net hub: **sqlserver/sqlserver-samples**.

```
> turbo run sqlserver/sqlserver-samples
```

Login to the default instance with **sa** and **password1**:

![Studio SSMS login](https://hub.turbo.net/images/docs/sql1.png)

From inside the container SSMS, open **c:\sql-content\script.sql** and execute:

![Studio SSMS](https://hub.turbo.net/images/docs/sql2.png)
