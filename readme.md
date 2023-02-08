# FiveM Vue Template

This template had inspired by [**BUR4KBEY/fivem-typescript-template**](https://github.com/BUR4KBEY/fivem-typescript-template/) and customized for general usage.

This template uses [**Vue**](https://vuejs.org/) (with [**Vite**](https://vitejs.dev/)), [**TailwindCSS**](https://tailwindcss.com/) with Typescript.

This is the templating [**React**](https://reactjs.org/) version. [**BUR4KBEY/fivem-typescript-template**](https://github.com/BUR4KBEY/fivem-typescript-template/)

## Folder Structure

-   `client`: Client-side scripts
-   `server`: Server-side scripts
-   `web`: Front-end files
-   `scripts`: Helpful scripts for the project
-   `dist`: Builded version of `client` and `server`

## Installation

-   Go to `server-data/resources/[my-resources]`
-   Run `git clone https://github.com/ygtdev/fivem-vue-template/ template`
-   Run these commands:
    ```powershell
    cd template
    npm install
    cd web
    npm install
    npm run build
    cd..
    npm run build
    ```
-   Type these commands to FiveM console:
    ```
    refresh
    ensure [my-resources]
    ```

If the installation succeeds, you can use `template` command in the game. (F8 > `template`)

## Development

-   You can develop the UI using `dev` command (in `web` folder) on browser. After you finish the development process, you can run `build` command to build.

-   You can use `watch` command to build your `server` and `client` folders automatically.