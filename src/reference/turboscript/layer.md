# layer

The `layer` instruction creates a new container and sets the base image(s) for that container. 

```
layer <image>
```

The `layer` instruction can be omitted if a clean base image is desired. Multiple `layer` instructions are additive.

Multiple images can be specified in a single `layer` instruction by separating each image with a comma or space. If the same file, registry entry, or environment variable exists in multiple images added via the `layer` instruction, then the one from whichever image was specified last will win the conflict and be used in the virtual environment. Virtual machine settings are taken from the last image specified in the `layer` instruction.

Due to this "layering" approach, it is a good practice to specify images with newer versions of applications or libraries after images with older versions.

```
layer <image 1> <image 2>

# Start container with git and node.js
layer git/git nodejs/nodejs
```

**Note**: To initialize an empty container, use the `clean` image

```
layer clean
```
