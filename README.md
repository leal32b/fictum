# Fictum
Fictum is a fake data generator designed to aid (in a simple and dynamic way) testing.

![image](https://img.shields.io/github/license/leal32b/fictum?style=flat-square)
![image](https://img.shields.io/npm/v/fictum?style=flat-square)
![image](https://img.shields.io/npm/dw/fictum?style=flat-square)
![image](https://img.shields.io/codecov/c/gh/leal32b/fictum?style=flat-square)
![image](https://img.shields.io/circleci/build/github/leal32b/fictum/main?style=flat-square)
![image](https://img.shields.io/github/issues/leal32b/fictum?style=flat-square)
## Installation
```bash
npm install fictum
```

## Usage

```javascript
// javascript
const fictum = require('fictum')
```

```typescript
// typescript
import fictum from 'fictum'
```

```typescript
// You can set a locale as ISO Language Code
// If not set, the default locale is 'en'
fictum.locale('pt-BR')

// Generate a random first name
const name = fictum.person.firstName()

// Apply filters
const fixedGenderName = fictum.person.firstName({ gender: 'f' })
```

## Components

```typescript
// Person

fictum.person.firstName()                                  // 'Steven'
fictum.person.firstName({ gender: 'f' })                   // 'Ashley'
fictum.person.lastName()                                   // 'Smith'
fictum.person.fullName()                                   // 'Linda Brown'
fictum.person.fullName({ gender: 'm' })                    // 'Charles Williams'
fictum.person.fullName({ format: 'lastName, firstName' })  // 'Jackson, Paul'
```

## License
MIT
