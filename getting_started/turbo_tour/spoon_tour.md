## Turbo Tour

Turbo containerization dramatically simplifies the way developers and IT managers build, test, and deploy software. Here are a few of the amazing things you can do with Turbo:

### Instant Environment Configuration

Easily create container environments by combining pre-configured base images for popular development tools and frameworks.

	# Create a container with git, SBT, and Java
	> turbo run git,sbt,jdk

	(27661f14)> git clone https://github.com/scala/async.git
	(27661f14)> cd async && sbt clean test
	(27661f14)> exit

### Install Existing MSI Packages

Install software from MSI installation packages or other traditional setups by simply running the regular setup processes within a container. There is no
longer any need for sequencing, snapshots, or other special packaging processes.

	# Launch a clean virtual machine
	> turbo run clean

	# Run the MSI installer process
	(42fa1211)> setup.msi

### Run Multiple Browser Versions

Run multiple browser versions side-by-side on a single device. Dynamically add browser plugins and runtimes such as Java, .NET, and Flash.

	# Run a server application on Java 7 and 8
	> turbo run jre:8.0,server
	> turbo run jre:7.51,server

	# Run multiple versions of Firefox simultaneously
	> turbo run firefox:33
	> turbo run firefox:32

	# Launch another browser instance in a Java 6 environment
	> turbo run jre:6.45,firefox

### Container Skinning

Skinning makes it easy to visually distinguish between container contexts.

	# Identify different Java versions by window skin
	> turbo run jre:8.0,firefox+skin(green)
	> turbo run jre:7.51,firefox+skin(red)
	> turbo run jre:6.45,firefox+skin(0x0000ff)   

### Share Development Environments

Create pre-configured developer images including compilers, build tools, development frameworks, and other build dependencies. Share ready-to-use build environments with project collaborators.

	# Run your favorite build tools and development environments
	> turbo run golang/go,atom

	# Use existing package managers like NuGet and Chocolatey
	> turbo run nuget
	(9ac7bf21)> nuget install MvcScaffolding

	# Push ready-to-use development images out to collaborators
	> turbo push dev-image

### Network Virtualization

Develop and test client/server applications on a single developer box. Containerize multi-server applications and execute in virtualized production network environments. Test with actual domain names and IP configurations.
No more "localhost:8080".

	# Launch a WordPress server in a virtual network environment
	> turbo run -d --network=wp --name=web wordpress

	# Run a Firefox browser instance in the same virtual network
	# environment and connect to the WordPress server
	> turbo run --network=wp firefox http://web:8080
	
	# It is also possible to map a different domain name than
	# the container name by setting up a container-to-container link
	> turbo run --link=web:awesome.com firefox http://awesome.com:8080


### TurboScript Automation

Powerful TurboScript primitives allow automated configuration of containers and integration into continuous integration processes. Higher-order operators such as using allow transient consumption of containers within scripted build environments.

	# Use git and sbt to download and build the project sources
	using git,sbt
	  git clone https://github.com/scala/async.git
	  cd async && sbt clean test

	# git and sbt are no longer present in the image
	commit async
	push async

### Migrate Containers Between Devices

Save application state and continue execution on another device -- even on a different Windows OS.

	# Begin work on a container on device A
	> turbo run python
	(98348bi3) > exit

	Continue execution with 'turbo continue 1b7f5707'

Continue execution in the same state, or a previous state, on a different device.

	# Continue execution from the previous state ID on device B

	> turbo continue 1b7f5707
	(98348bi3) >

### Zero Footprint Testing

Try out applications in temporary containers using the <strong>try</strong> primitive.

	# 'try' works like 'run' except the resulting container is automatically deleted

	> turbo try jdk:7.65,mongo,node:0.10.29

### Import ThinApp Packages

Import existing virtual application packages from ThinApp into containers with a single command.

	# Import the ThinApp package described by package.ini

	> turbo import -n=app thinapp C:\thinapp-project\package.ini 

### Always Have a Clean Machine

Need a clean machine to install or test something? Create one in seconds with a single command.

	# Launch a clean virtual machine
	> turbo run clean

	# Command prompt for a clean virtual machine with id 4aa232b1
	(4aa232b1)> dir C:\

	 Volume in drive C has no label.
	 Volume Serial Number is 7C90-F8ED

	 Directory of C:\

	06/10/2009  01:42 PM                24 autoexec.bat
	06/10/2009  01:42 PM                10 config.sys
	04/11/2011  06:24 PM    <DIR>          Program Files
	11/14/2014  09:34 AM    <DIR>          Users
	11/25/2013  03:40 PM    <DIR>          Windows
	...
