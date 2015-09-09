### env

The `env` instruction creates a new environment variable inside the working container. 

```
env <name>="<value>"
```

This environment variable will be persisted to the output image by the `build` command. 

Only one environment variable can be added per `env` instruction. To add multiple environment variables to the working container, use multiple `env` instructions. Well known system paths like `C:\Windows\System32` will be replaced by a variable that will be converted at runtime to the appropriate path for the execution environment.

When multiple environment variables with the same name are defined in set of images used to run a container, the value from last image is used. For two environment variables, PATH and PATHEXT, special behavior is defined. All values are concatenated together using the semicolon as the joining character. The value from the last image appears first and the host value is at the end.

```
env foo="bar"
env path="c:\path to executables\"
```

In the container these variables will have the following values:

```
foo="bar"
path="c:\path to executables;C:\WINDOWS\system32;C:\WINDOWS"
```

Variables can be reset within the same TurboScript by repeating the `env` command for the same variable name. The last value will be stored in the image. To remove the variable from the image, use the following command:

```
env foo=
```

Please note that if variable `foo` is also defined in one of `layer` images and final image is created with `--no-base` flag then it will be still loaded into containers created with it.

Environment variables can be overridden in a container by explicitly setting the variable to a new value or when an application or installer sets a new value.
