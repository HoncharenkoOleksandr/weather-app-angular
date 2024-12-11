# Wether

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Voxloud Homework Assignment: Weather Dashboard

**Objective:** Build a simple weather dashboard application that displays detailed weather information for multiple cities.

## Requirements:

1. **Application Overview:**

   - Create a simple weather dashboard that allows users to add multiple cities and view their current weather conditions.
   - Each city's card should display:
     - City name
     - Current temperature
     - Weather condition (e.g., sunny, rainy)
     - Option to remove the city from the dashboard.

2. **Technical Requirements:**

   - Use latest **Angular**
   - Fetch weather data from a public API (e.g., OpenWeatherMap API).
   - Implement the following features:
     - An input field to enter a city name and a button to add it to the dashboard.
     - A display of all added cities, each in its own card.
     - Use **RxJS** to handle API requests and manage the response data.
     - Implement a loading indicator while fetching data.
     - Implement error handling to manage cases where the city is not found.
   - Style the dashboard using **CSS** or **Sass**, ensuring a responsive design.
     Using helper style libraries like Tailwind is allowed.
   - Write unit tests for components and services using **Jasmine/Karma**.

3. **Additional Features (Optional):**

   - Save the list of cities in local storage so that they persist across page refreshes.
   - Allow users to view the forecast for the next few days for each city.
   - Add some fancy animations

4. **Submission:**
   - Use this repo as a starting point for your journey
   - Host the code in a public repository (e.g., GitHub) and provide the link.
   - Include a README file with setup instructions and details on any API keys used.
