### isolate

The `isolate` instruction sets the isolation setting of a named object. 

```
isolate "<objectType>:<name or path>" <isolation>
```

Supported object types:

* kernel - kernel objects (full isolation only)
* file - file system
* registry - registry value
* window - window objects

Supported isolation types:

* full - Enable read and write isolation.
* cow - Copy on write enables write isolation, allows read from host operating system.
* merge - Reads and writes using host operating system if available.
