## Turbo Shell

Turbo Shell, `spsh`, is a REPL-like interactive interface that understands TurboScript syntax.

When Turbo Shell starts, it creates a working container and starts an interactive prompt. Optionally, given a path to a TurboScript file as an argument, it can instead start by executing the TurboScript and only giving up execution control when the script issues a `yield` instruction. At the end of a Turbo Shell session, the working container is removed unless `keep on` instruction has been issued.

Turbo Shell scripting capabilities are superset of capabilities offered by `turbo build`. The differences:

* The working container is never implicitly committed to an image
* The `copy` instruction can be used to copy from anywhere on the host OS
* There are a number of additional commands available

### Additional Command Reference