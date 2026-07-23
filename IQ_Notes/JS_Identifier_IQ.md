# Identifier in JavaScript

## Breakdown Table

| Aspect              | Valid Identifiers                       | Invalid Identifiers                     |
|---------------------|-----------------------------------------|-----------------------------------------|
| **Start char**      | Letter (a–z, A–Z), `_`, `$`            | Digit, special symbols, whitespace      |
| **Body chars**      | Letters, digits, `_`, `$`               | Spaces, hyphens, `@`, `!`, `%`, `.`     |
| **Case sensitivity**| `Name` ≠ `name` ≠ `NAME`               | —                                       |
| **Reserved words**  | Anything except JS keywords             | `var`, `let`, `const`, `function`, etc. |
| **Unicode**         | `ñ`, `é`, Chinese chars (ES5+)         | Emoji (visual sep, avoid)               |
| **Length**          | No official limit                       | Impractical to read/manage              |

---

## Example Walkthrough

### Source File: `03_Identifier_Rules.js`

```javascript
var a = 10;       // single-letter identifier
var _a = 20;      // underscore-prefixed identifier
var Name = "Dips"; // PascalCase identifier (used here as a variable)
```

**How the engine sees these:**

| Identifier | Starts with | Contains              | Valid? | Why                                      |
|------------|-------------|-----------------------|--------|------------------------------------------|
| `a`        | letter `a`  | one letter            | ✅     | Starts with letter, no reserved conflict |
| `_a`       | `_`         | letter `a`            | ✅     | Underscore is allowed as start           |
| `Name`     | letter `N`  | letters only          | ✅     | Valid — case-sensitivity note applies    |
| `var`      | letter `v`  | letters only          | ❌     | Reserved keyword — can't use as name     |
| `1name`    | digit `1`   | digits followed by... | ❌     | Cannot begin with a digit                |
| `my-name`  | letter `m`  | hyphen in body        | ❌     | Hyphen `-` is not a valid identifier char|

---

## Pipeline Diagram

```
  Source Code
  ┌─────────────────────────────────┐
  │  var myVar = 42;                │
  │  var _temp = "hello";           │
  │  var $id = 100;                 │
  └─────────────────────────────────┘
            │
            ▼
   Lexical Analysis (Scanner)
  ┌─────────────────────────────────┐
  │ Tokenizes identifiers:          │
  │  <Keyword: var>                 │
  │  <Identifier: myVar>            │
  │  <Punctuator: =>                │
  │  <Number: 42>                   │
  │  <Punctuator: ;>                │
  │  ...                            │
  └─────────────────────────────────┘
            │
            ▼
   Parser (AST)
  ┌─────────────────────────────────┐
  │ VariableDeclaration             │
  │  ├─ kind: "var"                 │
  │  └─ declarations[0]             │
  │       ├─ id: Identifier "myVar" │
  │       └─ init: Literal 42       │
  └─────────────────────────────────┘
            │
            ▼
   Execution (Call Stack + Scope)
  ┌─────────────────────────────────┐
  │ Global Scope                    │
  │  ├─ myVar → 42                  │
  │  ├─ _temp → "hello"             │
  │  └─ $id   → 100                 │
  └─────────────────────────────────┘
```

---

## TL;DR

| Rule                          | Do ✅                            | Don't ❌               |
|-------------------------------|----------------------------------|------------------------|
| Start character               | Letter, `_`, `$`                 | Digit, special symbol  |
| Allowed body characters       | Letters, digits, `_`, `$`        | Space, hyphen, `@`     |
| Case-sensitive                | `count`, `Count`, `COUNT` = 3    | Treating them as same  |
| Reserved keywords             | Use descriptive custom names     | Use `var`, `let`, etc. |
| Convention (variables)        | `camelCase`                      | `PascalCase` (reserve for classes) |
| Convention (constants)        | `UPPER_SNAKE_CASE`               | Mixed case             |
| Convention (private/internal) | `_prefix`                        | Without prefix (confusing) |
