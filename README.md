# is-not-ci

Returns `true` if the current environment is **NOT** a Continiouse Integration server

## Programmatic Usage
```js
const isCI = require('is-ci')

if (isCI) {
  console.log('The code is running on a CI server')
}
```

## CLI Usage
For CLI usage you need to have the is-ci executable in your PATH. There's a few ways to do that:

- Either install the module globally using npm install is-ci -g
- Or add the module as a dependency to your app in which case it can be used inside your package.json scripts as is
- Or provide the full path to the executable, e.g. ./node_modules/.bin/is-ci

```bash
is-ci && echo "This is a CI server"
```

### P.S.

Don't take it that serious...