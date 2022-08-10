# template

misc template projects

## notes

- this workspace uses pnpm instead of yarn or npm or whatever as those are garbage
- it also uses node 18, just use nvm or smth

## install dependencies
- `npm install -g pnpm@7.9.0` 
- `pnpm install`

## common tasks

- note that these can all be run either from a package directory or from the root of the workspace to run them for all packages in parallel
- most commonly just `pnpm run dev` from the workspace root to run everything

### run dev environment
- `pnpm dev`

### run tests (one time)
- `pnpm test`

### watch tests
- `pnpm watch`

### fix and format code
- `pnpm ff`

### build for prod
- `pnpm build`

### serve prod build after building it
- `pnpm serve`

### run ci
- `pnpm ci`
