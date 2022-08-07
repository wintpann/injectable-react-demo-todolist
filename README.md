# Simple todolist example for injectable-react 

`yarn install && yarn start`

## Project structure

```sh
└── src/
    ├── assets/                 # Global assets
    |                           #
    ├── components/             # Application components. Just rendering some JSX
    |                           #
    ├── containers/             # Application containers. Combine components with services and view-models
    |                           #
    ├── services/               # Driven adapters. All third-party things goes through services with specified contracts
    |                           #
    ├── view-models/            # Domain logic + usecases lives here. Can use services. (for just a simple example no need to extract domain logic)
    |                           #
    ├── resolved.js             # Entities resolving goes here.
    |                           #
    └── index.tsx/              # Entry point
```