SQL Sandbox allows launching any number of preconfigured database servers and tools on a single machine. All containers in a SQL Sandbox are connected together in a virtual network. Identically-configured database server instances run without having to worry about conflicting port numbers or instance names.

Every container has a unique name assigned, and this name can be used to connect to the container from within the virtual network, e.g., in order to connect SSMS or other tool to a SQL Server instance. You can see the container name in the bottom-right corner of the Sandbox page when the container is running or below its icon at the top. It is also visible in the command prompt of the container.

#### Connecting to SQL Server

To connect to a SQL Server instance, SQL Server Authentication must be used. In the Server Name field of the tool you are intending to connect to your SQL Server instance you can simply specify the SQL Server VM's name. It will connect to the server on default TCP port 1433. The images are preconfigured to allow the following login credentials:

* **Login**: sa
* **Password**: password1

#### Getting started with LocalDB

Create LocalDB instance and get its instance pipe name:

```
(sql-xxxx) sqllocaldb c <instance name> 12.0 -s
(sql-xxxx) sqllocaldb i <instance name>
```

You can use printed instance pipe name as a server name to connect to the instance with SQL Server Management Studio.

#### Getting started with MySQL

Launch the MySQL command line:

```
(mys-xxxx) C:\> pushd c:\mysql\bin
(mys-xxxx) C:\mysql\bin> start "MySQL" mysql.exe -u root
```

Creating a new database:

```
MYSQL> SHOW DATABASES;
MYSQL> CREATE DATABASE my_database;
MYSQL> SHOW DATABASES;
```
Creating a new user and giving the user permissions to access the new database:

```
MYSQL> SELECT USER FROM mysql.user;
MYSQL> CREATE USER 'my_user'@'%' IDENTIFIED BY 'my_password';
MYSQL> SELECT USER FROM mysql.user;
MYSQL> GRANT ALL PRIVILEGES ON my_database.* TO 'my_user' IDENTIFIED BY 'my_password';
MYSQL> SHOW GRANTS FOR 'my_user';
```

MySQL server will be accessible at http://localhost:3306


#### Getting started with MariaDB 

Launch the MariaDB command line:

```
(mar-xxxx) C:\> pushd c:\MariaDB\bin
(mar-xxxx) C:\MariaDB\bin> start "MariaDB" mysql.exe -u root
```

#### Getting started with MongoDB

```
(mon-xxxx) C:\> mkdir c:\path\to\db
(mon-xxxx) C:\> pushd "C:\Program Files (x86)\MongoDB 2.6 Standard\bin"
(mon-xxxx) C:\> start "mongodb" mongod.exe --dbpath C:\path\to\db
mongo localhost:port
```

The port number will be displayed in the command prompt.
