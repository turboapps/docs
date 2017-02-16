### require

The `require` instruction defines a runtime requirement which should be checked and enforced before the output image is launched. If the requirement cannot be satisfied, the image will not be run.

```
require <requirement>
```

The following requirements are supported:

* privilege:admin
* architecture:x86
* architecture:x64
* minosver:6.1.7601

Example:
```
# Fail if image is not launched on 64-bit machine
require architecture:x64
```
