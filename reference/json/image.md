### image

	"image" : {
		"id" : "namespace-name/image-name",
		"namespace" : "namespace-name"",
		"name" : "image-name",
		"tag" : "head",
		"description" : ""
	}

Image object contains following data:

* `id` - id of image (name with namespace)
* `namespace` - namespace of image (can be null)
* `name` - name of image
* `tag` - release of image
* `description` - description of image (available only on `search` in `images` array)

This object is available for following commands:

* `build` - contains newly built image
* `checkout` - contains just checked-out image
* `fork` - contains just created image
* `pull` - contains just pulled image
* `register` - contains just registered image
* `unregister` - contains just unregistered image
* `release` - contains just released image