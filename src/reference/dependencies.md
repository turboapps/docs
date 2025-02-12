# Dependencies
Newly created images are usually based on a existing image.
For example, a Wordpress image is based on a PHP, MySQL and Apache image.
How are these dependencies handled?

### Default
By default all base images are baked into the new image. The newly created image includes everything it needs.

For information purpose the used images will show up in the Hub under the Dependencies tab of the repository.

### Runtime Dependency Inclusion
If a image is created with the `--no-base` option, the newly created image will not contain the base images. 
Instead the images are downloaded and loaded when the image is used.

Example, a Wordpress image based on a PHP, MySQL and Apache. If this image was build with `--no-base`, and then launched,
the PHP, MySQL and Apache image are downloaded as well. Transitive dependencies are downloaded recursively.

A Image build with `--no-base` cannot be pushed, if the base images are not available on Hub. 
An error will indicate which images have to be pushed first, before the main image can be pushed.
