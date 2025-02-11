## VitePress Turbo Documentation

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
npm install
```

### Running Locally

The following npm scripts are available:

```bash
# Start the development server
npm run docs:dev

# Build the documentation site
npm run docs:build

# Preview the built site locally
npm run docs:preview
```

The development server will be available at `http://localhost:5173` by default.

## Writing Documentation

### Style Guide

When contributing to the Turbo documentation, please follow these style guidelines:

#### Code and Command-line Styling

- Command-line comments should start with `#` followed by a space, with the first word capitalized
- Use `turbo` instead of `spoon` in command-line documentation
- Use fenced code blocks with language specification for multi-line code:
  ```bash
  # Example command
  turbo run firefox
  ```
- Use single backticks for inline code references

#### VitePress Features

- Use VitePress containers for tips, warnings, and notes:
  ```md
  ::: tip
  This is a tip
  :::

  ::: warning
  This is a warning
  :::
  ```
- Use frontmatter for page metadata when needed:
  ```md
  ---
  title: Page Title
  description: Page description
  ---
  ```

### Adding Images

- Place images in the `src/images` directory
- Use relative paths from the markdown file location
- Use standard markdown image syntax:
  ```md
  ![Alt text](../images/example.png)
  ```

### Project Structure

```
docs/
├── src/                    # Documentation source files
│   ├── getting-started/    # Getting started guides
│   ├── deploying/         # Deployment documentation
│   ├── reference/         # Reference documentation
│   ├── server/           # Server documentation
│   ├── studio/           # Studio documentation
│   └── vm/               # VM documentation
├── .vitepress/            # VitePress configuration
│   └── config.js         # Site configuration
└── package.json          # Project dependencies
```

### Contributing

#### How to Contribute

1. Fork this repository
2. Make your changes
3. Commit your changes
4. Submit a pull request

#### Adding New Content

1. Create your markdown file in the appropriate section under `src/`
2. Update the VitePress configuration in `.vitepress/config.js` if needed:
   - Add to navigation if it's a new section
   - Add to sidebar if it's a new page in an existing section

#### Navigation Structure

The documentation structure is defined in `.vitepress/config.js`:
- Top-level navigation in the `nav` array
- Sidebar navigation in the `sidebar` object
- Each section can have its own sidebar configuration

Remember to:
- Use clear, descriptive titles
- Maintain consistent formatting
- Follow the existing structure
- Test your changes locally before submitting
