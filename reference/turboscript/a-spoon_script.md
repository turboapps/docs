## TurboScript

Turbo command processor can act as an automated builder by reading instructions from a `.me` file to create a new image. Turbo Shell can act as an interactive interpreter of TurboScript.

A `.me` script is a text file containing a set of **instructions** that the Turbo command processor or the Turbo Shell follows to create a container. In Turbo command processor, at the end of the script, a new image is created from the container and the container is deleted.

The syntax of a TurboScript generally follows the pattern:

	instruction <arg 1> <arg 2> ...
	instruction <arg 1> <arg 2> ...
	instruction <arg 1> <arg 2> ...
	
The script is read and executed top-to-bottom and is not case-sensitive.

All scripts have an implicit `commit` at the end of the script. After the last instruction in the script, it executes `turbo commit` on the container. If a name was not provided to the `build` command (via the `-n` or `--name` flag) then the new image will be created with its ID as its name. 

### Syntax Rules

1. TurboScript are line-delimited and must only contain 1 instruction per line. Line continuation is not supported.
2. All lines must follow the general structure: `instruction <args>`
3. Inline comments are not supported. Comments must be applied at the beginning of a line and are applied to the entire line. 

### Comments

Comments are denoted by the `#` character. 

	# This is a comment

Comments cannot be made inline with a command. Comments must be specified at the beginning of a line. 

```
# This is a valid comment

layer nodejs/nodejs  # This is not a valid comment
```

### Conditions

Any TurboScript instruction can have an optional `when` clause at the end of the line to specify the conditions which must be met before the instruction will be executed. The general form is `instruction when expression`.

```
cmd "echo This is Windows7" when host has os:Windows7
```

These are the currently supported expressions:

* host has architecture:x86
* host has architecture:x64
* host has os:WindowsXP
* host has os:Windows2003
* host has os:WindowsVista
* host has os:Windows2008
* host has os:Windows7
* host has os:Windows2008r2
* host has os:Windows8
* host has os:Windows2012
* host has os:Windows8.1
* host has os:Windows2012r2
* host has os:Windows10

Note that client OSes are not differentiated from server OSes so "WindowsXP" is equivalent to "Windows2003", etc.

Expressions can be combined with AND, OR, NOT, and parenthesis.

```
layer clean when (not host has os:windows7 and not host has os:windows8.1)
layer spoonbrew/iis7-base when host has os:windows7
layer spoonbrew/iis8-base when host has os:windows8.1
```

### Command Reference
