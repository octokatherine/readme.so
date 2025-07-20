# Contributing 

## Introduction

This project is built with:

*   **Next.js v11**
*   **TailwindCSS v2**

If you'd like to contribute, check out the [issues](https://github.com/octokatherine/readme.so/issues) to find bugs or feature requests you can help with.

## Reporting Bugs or Requesting Features
Create a new issue! We’ll use the issue to:

*   Discuss the problem or feature
*   Assign the work if needed

## Development

### 1. Fork this repo
You can fork this repo by clicking the fork button in the top right corner of this page.

### 2. Clone the forked repository
```bash
git clone https://github.com/your-username/readme.so.git
cd readme.so
```

### 3. Create a New Branch
```bash
git checkout -b my-new-branch
```

### 4. Install dependencies
```bash
npm  install
```

### 5. Run the Development Server
```bash
npm  run  dev
```

## How to Contribute ?

1.  **Find an Issue**: Check open issues or create a new one for bugs or feature requests.
    
2.  **Comment on the Issue**: Let others know you're working on it.
    
3.  **Fork the Repo** and clone it locally.
    
4.  **Create a Branch** and make your changes.
    
5.  **Push Your Changes** to your fork.
    
6.  **Open a Pull Request (PR)** from your branch. Reference the issue number in the PR description.
    
7.  **Get Reviewed**: Your PR will be reviewed, and if approved, it will be merged into main.

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit please follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

## Testing

Tests are written using jest. You can run all the tests from the root of the repository.

```bash
npm test
```

Please ensure that the tests are passing when submitting a pull request. If you're adding new features, please include tests.

---
Thank you for contributing! 🎉
