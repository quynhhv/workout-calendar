# Workout Calendar

### Node version
    node version: >= 20.18.0
    yarn version: >= 1.22.22
  Use nvm to install node version.
### Installing Node.js using nvm

To install Node.js using nvm (Node Version Manager), follow the instructions below:

1. Install nvm by following the guide at: https://github.com/nvm-sh/nvm#installing-and-updating
2. Once nvm is installed, you can install the required Node.js version by running:
    ```sh
    nvm install 20.18.0
    nvm use 20.18.0
    ```
3. Verify the installation by checking the Node.js and yarn versions:
    ```sh
    node -v
    yarn -v
    ```

### Preparing Husky
```
    yarn prepare
```
### Running the development server.

```
    yarn install
    yarn dev
```

### Building for production.

```
    yarn build
```

### Running the production server.

```
    yarn start
```

## Notes:
- The project is using Tailwind CSS for styling.
- The project is using React Beautiful DnD for drag and drop functionality.
- The project is using Next.js for server-side rendering and routing.
- The project is using TypeScript for static type checking.
- The project is using ESLint for code linting.
- The project is using Prettier for code formatting.
- The project is using Husky for git hooks.
- The project is using Lint Staged for linting before committing.

## Issues:
- The project is using React Beautiful DnD for drag and drop functionality, but it is not recommended for Next.js 14 and above.
