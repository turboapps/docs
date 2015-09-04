### Images

An image is a read-only filesystem and registry. A container is dynamic and can host running processes, but an image is static. Think of it as a snapshot of a container at a certain time.

Images serve as building blocks for new containers by providing a base filesystem and registry. If a project needs MongoDB, then specify that image when starting a new container.

Containers can also be saved as images. Building block images like MongoDB merge with the altered container state and are saved as a new image.

More information on [working with images](/docs/building/working-with-images).