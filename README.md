# Chat App
Group chat application 

## Overview

## Setup
- Install NodeJS (v16 is recommended for all apps)
- Install dependencies: `npm install`

## Environment Configuration
- Run `cp .env.example .env`
- Update desired env values

## Getting Started
- Run the development server: `npm run start`
- Open [localhost:3000](http://localhost:3000) with your browser to see the result

## Data Layer

- `firebase` is used for data communication layer

## UI Kit & Styling

### Tailwind

[Tailwind css](https://tailwindcss.com/) is used for styling.

### Material UI

Material UI components like Table, Dialog, etc are used. One important point to note here is that
components should not be imported directly from `@mui/material` instead import the component itself like
`@mui/material/Table`. The same goes for material icons as well.
