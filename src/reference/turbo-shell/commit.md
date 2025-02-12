# commit

The `commit` command commits the working container to an image.

```
commit [no base] [overwrite]
```

If `no base` is specified, base image(s) are not merged into the new image.

If `overwrite` is specified, any existing images of this name are overwritten.

The name and tag of the image can be controlled by setting `meta namespace`, `name`, and `tag`.
