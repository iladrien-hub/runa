# Runa

A simple text templating language with variable substitution and weighted random selection.


# Installation

```bash
npm install runa-js
```

# Usage

Using the `execute` function, you can execute a Runa script.

```javascript
const { execute } = require('runa-js');

const result = execute(`Hello\nWorld`);
```

Or using `executeFile` to execute a Runa script from a file.

```javascript
const { executeFile } = require('runa-js');

const result = executeFile('script.runa');
```
