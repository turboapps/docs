# using

The `using` instruction adds an additional, temporary image(s) for that container.

```
using <image>
```

Multiple images can be specified in a single `using` instruction by separating each image with a comma or space. If the same file, registry entry, or environment variable exists in multiple images added via the `using` instruction, then the one from whichever image was specified last will win the conflict and be used in the virtual environment. If the same file, registry entry, or environment variable exists in two images, one added via the `using` instruction and one added via the `using` instruction, then the one in the `using` image will win the conflict. Virtual machine settings are taken from the last image specified in the `using` instruction.

Due to this "layering" approach, it is a good practice to specify images with newer versions of applications or libraries after images with older versions.

If the next instruction after `using` is indented, a scope is defined and the images specified in the `using` instruction are available only in this scope.

```
using python
  cmd python --version

cmd python --version || echo Python not available!
```

**Note**: Images added with `using` keyword are **NOT** included in final image
