## How to setup a new Typescript Express project
1.

```
npm init -y
```
2.
```
npm i -D typescript
npm i concurrently
```
3.

```
 tsc --init

```
4.
```
 Add the following scripts in package.json

{
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx tsc",
    "watch": "npx tsc -w",
    "prestart": "npm run build",
    "start": "nodemon dist/index.js",
    "dev": "npx concurrently \"npm run watch\"  \"npm run start\"  "
}

```

Note: Make relavant changes in tsconfig.json
5.

```
npm run dev
```