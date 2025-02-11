## VitePress Turbo Documentation Setup Guide

### Prerequisites

Ensure you have the following installed:

- Node.js v22.14.0 or later
- npm v10.9.2 or later

You can check your versions by running:

```bash
node --version
npm --version
```

### Installation

Install VitePress and its dependencies:

```bash
npm install --save-dev vitepress
```

### Running Locally

To start the local development server:

```bash
npm run docs:dev
```

This will start the VitePress development server. By default, you can view your site at `http://localhost:5173`.

## Writing the Docs

### Style Guide

When contributing to the docs on Turbo, please follow these style guidelines:

#### Code and Command-line Styling

- Command-line comments should start with `#` followed by a space, with the first word capitalized.
- Use `turbo` instead of `spoon` in command-line documentation.
- Use fenced code blocks with three backticks for multi-line code.
- Use single backticks for inline code styles (use sparingly).

#### Other Styling

- Bold inline paths using double asterisks.
- Use relative paths for internal links.

### Adding Images

- Place images in the same folder as the Markdown file.
- Use relative paths for image links.
- Use HTML for specifying image dimensions.
- Use lowercase for image file names.

### Contributing

#### How to Contribute

If you're not a member of the Turbo organization:
1. Fork this repository.
2. Make your changes.
3. Commit your changes.
4. Submit a pull request.

#### Adding a Page

- For existing sections: Create a directory at `/[topic]/[section]/[document]` and add your `.md` file.
- For new sections: Create a new folder under the appropriate topic and add your `.md` file.
- Update the `docs.yaml` file accordingly.

#### Creating a New Topic

1. Create a new folder in the `/doc` directory for your topic.
2. Edit the `docs.yaml` file to add your new topic.

#### docs.yaml Structure

The `docs.yaml` file dictates the overall structure of the documentation:

- Each entry specifies a topic for the top navbar.
- Topics have a `title` and a list of `sections`.
- Sections have a `title` and a list of `documents`.

Ensure to follow the existing patterns when editing the `docs.yaml` file.

Remember to normalize directory and file names by lowercasing, replacing spaces with underscores, and removing illegal Windows file system characters.
