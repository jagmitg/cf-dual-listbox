# Dual List Management Plugin

A Contentful field extension (plugin) that provides a user-friendly interface to select and reorder multiple values using a dual-list UI. This plugin leverages [react-dual-listbox](https://github.com/jakezatecky/react-dual-listbox) for a streamlined selection experience.

<img width="960" alt="dual-list" src="https://github.com/user-attachments/assets/71f6d696-7f9d-4000-8c49-8b1af38942d0" />


## Table of Contents

-   [Overview](#overview)
-   [Features](#features)
-   [Installation & Setup](#installation--setup)
-   [Configuration](#configuration)
-   [Local Development](#local-development)
-   [Testing](#testing)
-   [Contributing](#contributing)
-   [License](#license)

## Overview

The **Dual List Management Plugin** makes it easy for Contentful editors to:

-   Pick multiple options from a predefined list
-   Filter options (optional)
-   Reorder selected options
-   Clear selections with a single click

It’s suitable for scenarios like:

-   Selecting multiple categories, tags, or labels
-   Managing curated lists of items
-   Defining product variations or any other multi-select use case

## Features

-   **Dual List UI**: Uses `react-dual-listbox` for a clear, two-panel interface
-   **Optional Filtering**: Enable or disable search/filter functionality via instance parameters
-   **Reordering**: Move selected items up or down (if configured)
-   **Clear Selections**: One-click action to remove all selected items

## Installation & Setup

1. **Install dependencies** in your local environment:

    ```bash
    npm install
    ```

2. Create an AppDefinition in your Contentful organization:

-   Set the App URL to your local or production URL (e.g., http://localhost:3000).
-   Add an entry field location for the plugin (e.g., for a JSON, Short Text, or other field).

3. Configure instance parameters such as enableFiltering or showOrderButtons in your Contentful App settings.

[![Install to Contentful](https://www.ctfstatic.com/button/install-small.svg)](https://app.contentful.com/deeplink?link=apps&id=1lL6R4999sdomP5JbS9OdT)

## Configuration

| Parameter        | Type    | Description                                                          |
| ---------------- | ------- | -------------------------------------------------------------------- |
| enableFiltering  | boolean | Toggles whether to display a text input to filter the available list |
| showOrderButtons | boolean | Toggles whether to display up/down arrows for reordering selections  |

<img width="871" alt="filtering" src="https://github.com/user-attachments/assets/128e5a9f-fef2-46cd-9aea-7637125ee28b" />


## Local Development

To run the plugin locally:

```
# Install dependencies
yarn install

# Start the development server
yarn start
```

By default, the plugin will run on http://localhost:3000.

If you’ve configured your Contentful AppDefinition to point to that URL, you’ll see the plugin in the Contentful web app when editing an entry with the assigned field type.

Testing
This project uses Vitest and React Testing Library.

# Run the test suite

```
npm run test
```

Check out Field.spec.tsx for an example test verifying the plugin’s basic functionality.

## Contributing

If you’d like to contribute:

1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request once you’re done.

We welcome improvements to the UI, performance enhancements, or additional feature requests.

## License

MIT - Feel free to modify and distribute this plugin as needed. See the LICENSE file for more details.
