## Continuous Integration

Create automated, clean, and consistent test environments with Turbo while keeping the Continuous Integration (CI) 
server free from conflict causing dependencies.

Existing CI servers may have many varying libraries, runtimes, custom settings, and applications, possibly in different languages and versions, that are required for the various automated builds.  Sometimes these dependencies collide to create inconsistent test environments and headaches when configuring automated builds. 

With Turbo no installed dependencies are required on the CI server. All dependencies are built into containers providing consistent environments and a dependency-free CI server.  This eliminates the possibility of dependency collision and makes automated build configuration very simple.

The basic steps for integrating Turbo into a CI server are to create a TurboScript, integrate it into an automated build on a CI server, and finally run and test the container.

### Create TurboScript

The TurboScript contains all the steps necessary to build the container.

```
# Creates a new container from the specified images
layer nodejs/nodejs git/git

# Clone a project in the container
cmd mkdir c:\root
cmd git clone https://github.com/project/repo c:\root

# Install Node.js depencies 
cmd cd c:\root\server & npm install
```

Save your script as a `.me` file. See the [TurboScript reference](/docs/reference/turboscript) for more information on TurboScript script instructions.

### Integrate into the CI server

The next step is to configure an automated build on the CI server that will execute the TurboScript and create an image.  You'll need to configure the necessary triggers, schedules, notifications, etc., which will vary between CI servers.

Now add the follow commands to your automated CI build script:

```
# Log in if images from a hub repository are specified
turbo login <username> <password>

# Execute the TurboScript and build a new image
turbo build -n=<name> C:\path\to\turbo.me

# Export the image to a location on the host system
turbo export <name> c:\root\image.svm
```

Rather than exporting the image to the host system, you can also `turbo push` the image to the hub where other users could pull it down and test.

See the [Command Line Interface](/docs/reference/command-line) page for more information on `turbo` commands.

### Run the container

```
# First import the image to your local registry
> turbo import -n=<name> C:\root\image.svm

# Run the image
> turbo run <name> <command>
```

If you alternately pushed to the hub then use these commands to pull and run:

```
> turbo pull <account name>/<name>
> turbo run <account name>/<name> <command>
```

#### Example use case: running tests inside a container on the CI server

We would like to run the tests of a project inside a turbo container, all within a CI server job.

Let's assume we have an ready-built image, pushed to the hub, containing the project source code and all the development dependencies: jdk,maven,git.

```
layer jdk,maven,git

cmd mkdir c:\root
cmd git clone https://github.com/JodaOrg/joda-time.git C:\root
```

The CI server job that runs the tests inside a turbo container would look like this:

```
turbo login %SPOON_USER% %SPOON_PWD%

rem pull latest changes and run the tests
turbo run turbo/sample -n=ci-example --attach -w="C:\root\joda-time" /c git pull ^&^& mvm clean test
set TESTS_EXITCODE=%errorlevel%

rem capture the test results from the container, make them available to the CI server
mkdir surefire-reports
turbo cp ci-example:C:\root\joda-time\target\surefire-reports surefire-reports

rem discarding container
turbo rm ci-example

rem exit using the testrun's exit code
exit /b %TESTS_EXITCODE%
```

The CI server stores the Turbo credentials as environment variables `SPOON_USER` and `SPOON_PWD`

When running the image, it first pulls latest code changes and then launches the build and runs the tests.

After the tests complete, there are two things that need to be done, before it finally exits:

- test results need to be made available outside of the container, for tasks like test results parsers, which display rich information about test failures.

- the temporary container needs to be discarded.

Once these things completed, the script exits using the original tests run exit code. This to ensure that if the test run failed, the CI server will detect this by the exit code returned.
