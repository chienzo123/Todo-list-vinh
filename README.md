
## Title 

TO DO LIST WEB

## Features

- 🖼 User interface [MUI](https://mui.com)
- ⛳️ Icon [AntDesign Icon](https://ant.design/components/icon)
- 🗂 Bundler [Vite](https://vitejs.dev/)
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 18
- ♻️ Type-safe environment variables with `@julr/vite-plugin-validate-env`
- ⌨️ Form with `react-hook-form`
- 🔖 Client state management with `@reduxjs/toolkit`
- 🔖 Server state management with `@tanstack/react-query`
- 📏 Linter with [ESLint](https://eslint.org)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 👷 Run checking on pull request with GitHub Actions
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Settings, recommend extensions for ESLint, Prettier

## Requirements

```txt
Package manager: npm 
Node: 20.x
Npm  >= 10.9.2
```

## How to start project

### Install necessary libraries

### Install packages

```bash
npm --frozen-lockfile
```

### Add environment variables

```bash
cp .env.example .env
```

You must fill in this file manually. Some variables are required to start application.

### Start application

```bash
npm start
```

Your application will run at `http://localhost:5173/`

## How to fix errors

### Linting error

If that error cannot be fixed automatically with eslint package, please check ESLint [rules](https://eslint.org/docs/rules/) to fix this manually.

### Commit message error

If you have output similar with below

```bash
⧗   input: add important thing
✖   subject may not be empty [subject-empty]
✖   Commit message should include the ticket, for example ROOT-001 [ticket]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
```

This error causes by [CommitLint](https://github.com/conventional-changelog/commitlint/). See below rules to fix this.

#### Commit message structure

ROOT-{JIRA_TICKET_NUMBER}: subject

### Example

```bash
git commit -m "Update login screen" # Bad commit message ⚠️
git commit -m "ROOT-001: Update login screen" # Violated commit message ⚠️ (subject must not be sentence-case, start-case, pascal-case, upper-case)
git commit -m "ROOT-001: update login screen" # Good commit message ✅
```