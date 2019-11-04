## batch

The `batch` instruction is used for joining multiple commands of the same type in TurboScript.

```
batch <command>
	<line 1>
	<line 2>
	<...>
```

If `<command>` is `cmd` or empty then all following indented lines will be put into a single batch file. Otherwise, these lines will be turned into separate commands.

The first non-indented line terminates the batch section and resumes normal command processing.

### Example

You can use the batch instruction to execute a series of commands that share their state.

```
# Create a new directory with a text file inside of it.
batch cmd
  mkdir c:\new_folder
  cd c:\new_folder
  echo text content > text_file.txt
```

```
# Set several environment variables
batch env
  var1="value 1"
  var2="value 2"
  var3="value 3"
```
