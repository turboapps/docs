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
- Internal links to other sections of the doc should be relative paths
	* Other doc links: /docs/[topic]/[section]
	* To the hub: /hub
	* To contact page: /contact

### Adding images

- Put the image in the same folder as the md file
- Modify the path in the link based on the example below
- If you need to specify image dimensions, use HTML
- Image file names should be all lower case

```
# GitHub location
https://github.com/turboapps/docs/tree/master/doc/getting_started/tour_ii/image.png

# Markdown would be
![](/docs/getting_started/tour_ii/image.png)
```

### Contributing 

#### How to Contribute

If you are not a member of the **Turbo** org (AKA you don't work at Turbo), fork [this repo](https://github.com/turboapps/docs), make changes, commit, and submit a pull request. **Meta** files specify the section for the markdown file, and they should not be edited unless you are moving content to a different section.

#### Adding a Page

If adding a page to an *existing section*, (a) find the corresponding folder in the /doc folder and add your new **.md** file to it; and (b) check the **meta.md** file in that directory to make sure it matches the section you want to add the page to. 

If adding a page and creating a new section, create a new folder under the appropriate topic. Add your new **.md** file and create a new **meta.md** file that will specify the name of the section to add. Then, add the new section you are creating to the **meta.yaml** file, rearranging the ordering of the other sections as you see fit. 

#### Creating a New Topic

To add a new topic to the top navbar, first create a new folder in the /doc directory corresponding to your topic. Then, edit the **meta.yaml** file, adding your new topic and rearranging the topic `ordering` as you see fit. Follow existing patterns when editing this file. 

Populate your new directory in the /doc folder with subdirectories and new markdown files. Make sure that any subdirectory containing documentation has a **meta.md** file. 

### Structure

This section outlines the structure of the Turbo doc repo and how it is assembled.

#### Meta.yaml

The overall structure of the page is dictated by the **meta.yaml** file, located at /doc/meta.yaml.
Each document in the yaml file specifies a topic that will appear in the top navbar of the docs page. A topic **must** have the following three properties:

1. A `display_name`. This is the actual wording that will appear in the top nav bar
2. An `ordering`. This is the order, left-to-right, that the topic will appear in the nav bar, relative to all other topics. 
3. A list of `sections`. This list is used to populate the topic's dropdown. 

Each topic has an attribute called `sections`. Each section must in turn have the following attributes: 

1. A `display_name`. This will be the text that appears for that section in the containing topic's dropdown. The `display_name` is also used as the basis for forming that section's `id` on **docs.html**. The `id` for a section is the `display_name` with spaces translated to '+' and with all special characters encoded (except '?', which is trimmed out). 
2. An `ordering`. This is the top-to-bottom ordering, relative to other sections in the topic, that this section will appear in the topic dropdown.
3. A list of `pages`. This should always be an empty list in the **meta.yaml** file.
4. A list of `subsections`. These will be a list of subtopics for the specified section. `Subsections` have the same attributes as `sections`. 

#### Meta.md

Each subdirectory of the /doc folder must be populated with a `meta.md` file. This file tells the build script which section to add that folder's pages to (appended to the `pages` list attribute of a `section`). The `meta.md` does **not** apply to subdirectories. A **meta.md** file must have the following structure: 

	---
	topic: <display_name of topic>
	section: <display_name of section>
	---

If a **meta.md** file specifies a `section` that is not listed in topic specified, the script will raise a `NoSuchSectionError`. 

If the folder has doc in it and there is no **meta.md** file, a `NoMetaFileError` will be raised. 
