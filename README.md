# Random-It-Scenario-Generator-Api

## Description

An API used to generate a random It-Scenario from with optional query parameters technology, role, environment.<br>
Endpoints:

- GET / - Provides information about the API and specific instructions on which query parameters may be used.
- GET /scenarios - Provides you the relevant query parameters you passed in and a randomly generated It-Scenario.<br>

I have also added bruno docs in the .bruno folder, which can allow easy testing of my API.

## How to run

Use `npm install` to install the dependences.<br>
The API can be ran using the command `npm run dev`.<br>
You can run tests using `npm run test` or `npm run test:watch` for watch mode.<br>
