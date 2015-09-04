## Turbo Tour

Turbo containerization dramatically simplifies the way developers and IT managers build, test, and deploy software. Here are a few of the amazing things you can do with Turbo:

### Instant Environment Configuration

Easily create container environments by combining pre-configured base images for popular development tools and frameworks.

<div style="width: 605px; margin: 0 8px; background-color: #292929; color: #949799; padding: 15px; border-radius: 4px; margin-bottom: 28px;">
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># Create a container with git, SBT, and Java</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo run git,sbt,jdk</p>
   <br>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">(27661f14)&gt; git clone https://github.com/scala/async.git</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">(27661f14)&gt; cd async &amp;&amp; sbt clean test</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">(27661f14)&gt; exit</p>
</div>

### Install Existing MSI Packages

Install software from MSI installation packages or other traditional setups by simply running the regular setup processes within a container. There is no
longer any need for sequencing, snapshots, or other special packaging processes.
 
<div style="width: 605px; margin: 0 8px; background-color: #292929; color: #949799; padding: 15px; border-radius: 4px; margin-bottom: 28px;">
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># Launch a clean virtual machine</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo run clean</p>
   <br>
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># Run the MSI installer process</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">(42fa1211)&gt; setup.msi</p>
</div>

### Run Multiple Browser Versions

Run multiple browser versions side-by-side on a single device. Dynamically add browser plugins and runtimes such as Java, .NET, and Flash.

<div style="width: 605px; margin: 0 8px; background-color: #292929; color: #949799; padding: 15px; border-radius: 4px; margin-bottom: 28px;">
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># Run a server application on Java 7 and 8</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo run jre:8.0,server</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo run jre:7.51,server</p>
   <br>
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># Run multiple versions of Firefox simultaneously</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo run firefox:33</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo run firefox:32</p>
   <br>
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># Launch another browser instance in a Java 6 environment</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo run jre:6.45,firefox</p>
</div>

### Container Skinning

Skinning makes it easy to visually distinguish between container contexts.

<div style="width: 605px; margin: 0 8px; background-color: #292929; color: #949799; padding: 15px; border-radius: 4px; margin-bottom: 28px;">
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># Identify different Java versions by window skin</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo run jre:8.0,firefox+skin(green)</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo run jre:7.51,firefox+skin(red)</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo run jre:6.45,firefox+skin(0x0000ff)</p>   
</div>

### Share Development Environments

Create pre-configured developer images including compilers, build tools, development frameworks, and other build dependencies. Share ready-to-use build environments with project collaborators.

<div style="width: 605px; margin: 0 8px; background-color: #292929; color: #949799; padding: 15px; border-radius: 4px; margin-bottom: 28px;">
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># Run your favorite build tools and development environments</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo run golang/go,atom</p>
   <br>
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># Use existing package managers like NuGet and Chocolatey</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo run nuget</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">(9ac7bf21)&gt; nuget install MvcScaffolding</p>
   <br>
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># Push ready-to-use development images out to collaborators</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo push dev-image</p>
</div>

### Network Virtualization

Develop and test client/server applications on a single developer box. Containerize multi-server applications and execute in virtualized production network environments. Test with actual domain names and IP configurations.
No more "localhost:8080".

<div style="width: 605px; margin: 0 8px; background-color: #292929; color: #949799; padding: 15px; border-radius: 4px; margin-bottom: 28px;">
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># Launch a WordPress server in a virtual network environment</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo run -d --network=wp --name=web wordpress</p>
   <br>
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># Run a Firefox browser instance in the same virtual network</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># environment and connect to the WordPress server</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo run --network=wp firefox http://web:8080</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># It is also possible to map a different domain name than</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># the container name by setting up a container-to-container link</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo run --link=web:awesome.com firefox http://awesome.com:8080</p>
</div>


### SpoonScript Automation

Powerful SpoonScript primitives allow automated configuration of containers and integration into continuous integration processes. Higher-order operators such as using allow transient consumption of containers within scripted build environments.

<div style="width: 605px; margin: 0 8px; background-color: #292929; color: #949799; padding: 15px; border-radius: 4px; margin-bottom: 28px;">
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># Use git and sbt to download and build the project sources</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">using git,sbt</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&nbsp;&nbsp;git clone https://github.com/scala/async.git</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&nbsp;&nbsp;cd async &amp;&amp; sbt clean test</p>
   <br>
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># git and sbt are no longer present in the image</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">commit async</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">push async</p>
</div>

### Migrate Containers Between Devices

Save application state and continue execution on another device -- even on a different Windows OS.

<div style="width: 605px; margin: 0 8px; background-color: #292929; color: #949799; padding: 15px; border-radius: 4px; margin-bottom: 28px;">
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># Begin work on a container on device A</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo run python</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">(98348bi3) &gt; exit</p>
   <br>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">Continue execution with 'turbo continue 1b7f5707'</p>
</div>

Continue execution in the same state, or a previous state, on a different device.

<div style="width: 605px; margin: 0 8px; background-color: #292929; color: #949799; padding: 15px; border-radius: 4px; margin-bottom: 28px;">
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># Continue execution from the previous state ID on device B</p>
   <br>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo continue 1b7f5707</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">(98348bi3) &gt; </p>
</div>

### Zero Footprint Testing

Try out applications in temporary containers using the <strong>try</strong> primitive.

<div style="width: 605px; margin: 0 8px; background-color: #292929; color: #949799; padding: 15px; border-radius: 4px; margin-bottom: 28px;">
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># 'try' works like 'run' except the resulting container is automatically deleted</p>
   <br>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo try jdk:7.65,mongo,node:0.10.29</p>
</div>

### Import ThinApp Packages

Import existing virtual application packages from ThinApp into containers with a single command.

<div style="width: 605px; margin: 0 8px; background-color: #292929; color: #949799; padding: 15px; border-radius: 4px; margin-bottom: 28px;">
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># Import the ThinApp package described by package.ini</p>
   <br>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo import -n=app thinapp C:\thinapp-project\package.ini </p>
</div>

### Always Have a Clean Machine

Need a clean machine to install or test something? Create one in seconds with a single command.

<div style="width: 605px; margin: 0 8px; background-color: #292929; color: #949799; padding: 15px; border-radius: 4px; margin-bottom: 28px;">
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># Launch a clean virtual machine</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">&gt; turbo run clean</p>
   <br>
   <p style="font-size: 13px; margin-bottom: 0; color: #00FF00; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"># Command prompt for a clean virtual machine with id 4aa232b1</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">(4aa232b1)&gt; dir C:\</p>
   <br>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"> Volume in drive C has no label.</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"> Volume Serial Number is 7C90-F8ED</p>
   <br>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;"> Directory of C:\</p>
   <br>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">06/10/2009  01:42 PM                24 autoexec.bat</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">06/10/2009  01:42 PM                10 config.sys</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">04/11/2011  06:24 PM    &lt;DIR&gt;          Program Files</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">11/14/2014  09:34 AM    &lt;DIR&gt;          Users</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">11/25/2013  03:40 PM    &lt;DIR&gt;          Windows</p>
   <p style="font-size: 13px; margin-bottom: 0; color: #A2DFFC; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;">...</p>
</div>