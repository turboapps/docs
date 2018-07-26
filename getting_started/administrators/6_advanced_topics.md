### Advanced Topics

Turbo.net has many capabilities that we didn’t discuss in other sections. Here are a few:

#### Synchronizing state across machines

Turbo.net optionally supports state synchronization. This allows application state to be saved and continue automatically *on a different device*.

To enable state synchronization, launch the container with the `--enable-sync` flag:

```
# Begin work in container on device A
> turbo run --enable-sync python
(python#a37b20f9) C:\> exit

Saving state of container python#a37b20f9
Container python#a37b20f9 stopped in state cc525b1b
 `start python#a37b20f9` to restart execution locally
 `continue cc525b1b` to continue execution remotely
```

Notice that when state synchronization is enabled, a *state identifier* is generated when the container is stopped. The state identifier includes information about the state of the container as it existed upon termination and is used to identify a point at which continuation of execution should occur on another device. In this example, the state identifier is `cc525b1b`.

If you have another device available, login and use the command:

```
# Continue execution on device B
> turbo continue cc525b1b
Continuing execution of container python#a37b20f9 in state cc525b1b
(python#a37b20f9) C:\>
```

(You should use the state identifier you received when you closed your version of the container.)

Turbo.net uses efficient *differential synchronization* techniques that only transmit information on changes across devices. The entire container does not need to be copied across devices if the other machine already has some of the container information. This makes it much faster to migrate state across devices.

### Importing third party package formats

Turbo.net supports importing of several application package formats directly into Turbo container images. This is useful if investment has already been made in packaging applications in a third party package format.

In this example, we import a virtual application package from ThinApp into a Turbo containers:

```
# Import the ThinApp package described by package.ini into the appname image
> turbo import -n=appname thinapp C:\thinapp-project\package.ini
```

#### Container Skinning

When many container instances are running it can be difficult to distinguish between applications, particularly if they are subtle variants of a single base application. Skinning makes it easy to visually distinguish between container contexts.

Turbo currently supports a skinning driver that surrounds visible container windows with a specified color:

```
# Identify different Java versions by window skin
> turbo run jre:8.0,firefox+skin(green)
> turbo run jre:7.51,firefox+skin(red)
> turbo run jre:6.45,firefox+skin(0x0000ff)
```