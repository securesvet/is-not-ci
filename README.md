# is-not-ci

Returns `true` if the current environment is **NOT** a Continuous Integration server

## Programmatic Usage
```js
const isNotCI = require('is-not-ci')

if (isNotCI) {
  console.log('The code is not running on a CI server')
}
```

## CLI Usage
For CLI usage you need to have the is-not-ci executable in your PATH. There's a few ways to do that:

- Either install the module globally using npm install is-not-ci -g
- Or add the module as a dependency to your app in which case it can be used inside your package.json scripts as is
- Or provide the full path to the executable, e.g. ./node_modules/.bin/is-not-ci

```bash
is-not-ci && echo "This is not a CI server"
```

### P.S.

Don't take it that serious...