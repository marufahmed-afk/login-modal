### React Login Modal

A react login form modal with a minimal design, completely responsive also including Dark/Light mode theme toggle. built using `webpack`, served by
`webpack-dev-server`.

- Context Api was used for making the app themeable
- Redux was used for handing the interaction (the pop of the modal with backdrop)
- Component level state (useState hook) was used for handling the form data state


## Setup

- `npm install`
- Build for dev- `npm run build-dev`
- Build for prod- `npm run build-prod`
- Running Tests- `npm run test`
- Run in localhost:3000 & open in browser(auto watch)- `npm start`

## How it's structured and should be

   ```
   |-- src
      |-- actions
         |-- login.js
         |-- types.js
      |-- components
         |-- layout
            |-- Home.js
            |-- Theme.js
         |--login
            |-- Login.js
            |-- LoginForm.js
         |--theme
            |-- GlobalStyles.js
            |-- Theme.js
      |-- context
          |-- theme
            |-- themeContext.js
            |-- themeReducer.js
            |-- ThemeState.js
         |-- types.js
      |-- reducers
         |-- index.js
         |-- login.js
         
      |-- App.js (refers to the main/starting component of the react application)
      |-- config.js (contains different configurations and routes for different views)
      |-- App.scss (refers to the main sass file for the react application)
      |-- index.js (the entry point where the app renders the main component)
      |-- store.js (refers to where Redux store is initialized)
   ```
