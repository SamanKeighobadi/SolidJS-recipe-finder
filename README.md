# Recipe Finder

A lightweight Recipe Finder application built with [SolidJS](https://www.solidjs.com/), a performant JavaScript library for building user interfaces. This project leverages [TheMealDB API](https://www.themealdb.com/api.php) to fetch and display recipes, demonstrating key SolidJS features such as data fetching, conditional rendering, routing, and reactive state management. The application is styled with [TailwindCSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/) for a modern, responsive design, and uses [pnpm](https://pnpm.io/) as the package manager.

## Features

- **Data Fetching and Display**: Fetches recipe data from TheMealDB API and displays it in a clean, user-friendly format.
- **Conditional Rendering**: Dynamically renders recipe details and components based on user interactions and API responses.
- **SolidJS Router**: Utilizes `@solidjs/router` for client-side navigation, enabling users to view individual recipe details.
- **Search by Name**: Allows users to search for recipes by name using TheMealDB API's search endpoint.
- **Filter by Category and Area**: Provides filtering options based on recipe categories and cuisines (areas) fetched from TheMealDB API.


## Tech Stack

- **Framework**: SolidJS
- **Routing**: @solidjs/router
- **Styling**: TailwindCSS, DaisyUI
- **HTTP Client**: Axios (for API requests)
- **Package Manager**: pnpm
- **Build Tool**: Vite
- **API**: TheMealDB (free public API)

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [pnpm](https://pnpm.io/) (install globally with `npm install -g pnpm`)


## Usage

1. **Browse Recipes**: On the homepage, view a list of recipes fetched from TheMealDB API.
2. **Search Recipes**: Use the search bar to find recipes by name.
3. **Filter Recipes**: Select categories or areas to filter recipes based on cuisine or type.
4. **View Recipe Details**: Click on a recipe to navigate to its detailed view, powered by SolidJS Router.


## API Reference

The application uses [TheMealDB API](https://www.themealdb.com/api.php) for fetching recipe data. Key endpoints include:

- **List Recipes**: `https://www.themealdb.com/api/json/v1/1/search.php?s=`
- **Recipe by ID**: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}`
- **Categories**: `https://www.themealdb.com/api/json/v1/1/categories.php`
- **Areas**: `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
- **Search by Name**: `https://www.themealdb.com/api/json/v1/1/search.php?s={query}`
- **Filter by Category**: `https://www.themealdb.com/api/json/v1/1/filter.php?c={category}`
- **Filter by Area**: `https://www.themealdb.com/api/json/v1/1/filter.php?a={area}`
