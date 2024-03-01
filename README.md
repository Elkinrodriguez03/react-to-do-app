# Todo App with React, TypeScript, and Redux

This repository contains a professional-grade Todo application built using React, TypeScript, Redux, and other modern tools. The app allows users to create tasks, edit them, mark them as completed, and view task details. Additionally, there’s a separate section to view completed todos.

## Features

- Add new tasks with a title and description.
- Edit existing tasks.
- Mark tasks as completed.
- View task details (including description).
- List completed todos separately.

## Getting Started

Follow these steps to set up and run the project locally:

1. Clone the Repository:

```
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

2. Install Dependencies:

```
yarn install
```

3. Start the Development Server:

```
yarn start
```

4. Open in Browser: 

Open your browser and navigate to http://localhost:3000.

## Project Structure

The project follows a clean and organized structure:

``` 
src/
Components/: Reusable React components.
Provider/: Redux reducers.
Utils/: Utility functions.
Components/Home/Home.tsx: Root component of the app.
index.tsx: Renders the root component and mounts it to the DOM.
package.json: Lists dependencies.
README.md: Describes the app and its features (you’re reading it!).
tsconfig.json: TypeScript compiler configuration.
yarn.lock: Lock file for exact dependency versions.
 
 ```

## Technologies Used
- React
- TypeScript
- Redux (for state management)
- Jest (for testing)
- ESLint and Prettier (for code quality)

### License

This project is licensed under the MIT License - see the LICENSE file for details.