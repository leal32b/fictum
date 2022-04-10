# Fictum
Fictum is a fake data generator designed to aid (in a simple and dynamic way) in testing.

## Installation
> npm install fictum

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
const name = fictum.name.firstName()

// Apply filters
const fixedGenderName = fictum.name.firstName({ gender: 'f' })
```

## Components

```typescript
// Name

fictum.name.firstName()                 // 'Steven'
fictum.name.firstName({ gender: 'f' })  // 'Ashley'
fictum.name.lastName()                  // 'Smith'
fictum.name.fullName()                  // 'Charles Williams'
```
