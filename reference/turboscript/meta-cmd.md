### meta

The `meta` instruction sets the metadata value for the output image. 

```
meta <name>="<value>"
```

Standard metadata properties are listed below:

* Title
* Description
* Publisher
* Website
* Version

Additionally, metadata can be used to control namespace, name, and tag of the output image.

Custom metadata can be specified using other name-value pairs. 

```
# Add a title
meta title="application name"

meta namespace="organization"
meta name="application"
meta tag="0.1"

# Add custom metadata
meta internal-name="new-name"
```
