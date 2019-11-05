## Style Guide

When contributing to turbo.net/docs, please take the following style guidelines into consideration. This style guide is also found on [GitHub](https://github.com/turboapps/docs).

#### Code and Command-line Styling

- Command-line comment: All comments should have a # followed by a space and the first word should be capitalized.

```
# this is formatted properly :)

#this is not :( 
```

#### Command-line input and output

```
> turbo build -n="my image" /path/to/turbo.me

[Output]	# Command-line output should be listed two spaces below.
```

#### Syntax notes

- Always use `turbo` not `spoon` in the command line documentation.
- All code blocks should be 'fenced' with 3 backticks (a la [GFM](http://github.com/github-flavored-markdown)). Inline code styles (i.e. this is a sample command: `turbo run`) only use 1 backtick.
- Syntax highlighting can be specified after the top 3 backticks (not available for inline code). 
- Use inline code styles sparingly.
- Internal links to other documents should be relative paths
	* Other doc links: /docs/[topic]/[section]/[document]
	* To the hub: /hub
	* To contact page: /contact

### Adding images

- Put the image in the same folder as the md file
- Modify the path in the link based on the example below
- If you need to specify image dimensions, use HTML
- Image file names should be all lower case

```
# GitHub location
https://github.com/turboapps/docs/tree/master/doc/getting_started/tour/image.png

# Markdown would be
![](/docs/getting_started/tour/image.png)
```

### Contributing 

#### How to Contribute

If you are not a member of the **Turbo** org (AKA you don't work at Turbo), fork [this repo](https://github.com/turboapps/docs), make changes, commit, and submit a pull request. The **docs.yaml** file specifies which documents will be included in the final docs, and it should not be edited unless you are adding documents or moving a document to a different section.

#### Adding a Page

If adding a document to an *existing topic*, create the corresponding directory /[topic]/[section]/[document] and add your new **.md** file to it, then add the document to the **docs.yaml** file following existing patterns. 

If adding a page and creating a new section, create a new folder under the appropriate topic. Add your new **.md** file. Then, add the new section and documents you are creating to the **docs.yaml** file, rearranging the ordering of the other sections as you see fit. 

#### Creating a New Topic

To add a new topic to the top navbar, first create a new folder in the /doc directory corresponding to your topic. Then, edit the **docs.yaml** file, adding your new topic and rearranging the topic ordering as you see fit. Follow existing patterns when editing this file. 

Populate your new directory in the /doc folder with subdirectories and new markdown files.

### Structure

This section outlines the structure of the Turbo doc repo and how it is assembled.

#### Docs.yaml

The overall structure of the page is dictated by the **docs.yaml** file, located at /docs.yaml.
Each entry in the yaml file specifies a topic that will appear in the top navbar of the docs page. A topic has the following two properties:

1. A `title`. This is the actual wording that will appear in the top nav bar
2. A list of `sections`. This list is used to populate the topic's left sidebar. 

Topics are rendered left-to-right in the order than the appear in the **docs.yaml** file.

Each topic has an attribute called `sections`. Each section must in turn have the following attributes: 

1. A `title`. This will be the text that appears for that section in the containing topic's left sidebar. The `title` is also used as the basis for forming that section's `filename`. The `filename` for a section is the `title` with spaces translated to '_' and with all special characters (not a-z, A-Z, 0-9, -, or _) trimmed out. 
2. A list of `documents`. This list is used to populate the section's expanded items, and each of these entries links to single web page. Each `document` must be a string attribute that will be used as its `title` in the left sidebar.
