<h1 align="center">CryptAnalysis Tool (CAT)</h1>
<p align="center">
    <a href="https://cryptanalysistool.com/">Live version</a> |
    <a href="https://dev.cryptanalysistool.pages.dev/">Dev version</a> <br />
    A stab at building a versatile, useful and scalable tool for analysing and cracking ciphertexts.
</p>

# React with vite

This is a React project bootstrapped with [vite](https://vitejs.dev/). The interface is designed using [mui](https://mui.com/) and testing is handled via [cypress](https://www.cypress.io/).

# Contributing

- [Development Setup](#development-setup)
- [Commits](#commits)
- [Pull Requests](#pull-requests)

## Development Setup

1. Fork from GitHub
2. Clone the forked project
3. checkout develop branch
4. Run `npm i` to install dependencies.
5. Start using `npm run dev`

[//]: # (This is where you can add testing instructions)

[//]: # (## Tests)
[//]: # (To test the component, we are using [Cypress]&#40;https://www.cypress.io&#41;. If you add a new feature make sure to write additional tests for it.)
[//]: # ()
[//]: # ()
[//]: # (Run `npm run cypress:open` to start the cypress testing server.     )
[//]: # (The cypress test environment will open itself automatically.)


[//]: # (This is where you can add storybook instructions)

[//]: # (## Storybook)
[//]: # (We also set up [Storybook]&#40;https://storybook.js.org&#41; for our component.)
[//]: # ()
[//]: # (Run `npm run storybook` to start the storybook server.)

## Commits
Commit messages should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.

## Pull Requests

- Do not submit PRs against the `main` branch. Checkout a topic branch from the relevant branch (e.g. develop) and merge back against that branch
- Work in the `src` folder
- It's okay to have multiple small commits - GitHub will automatically squash it before merging
- Make sure the project can be built using `npm run build`
- If you are fixing a bug:
    - If you are resolving a special issue, add `(fix #xxxx[,#xxxx])` (#xxxx is the issue id) in your Pull Request title.
    - Add appropriate test coverage

