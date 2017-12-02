# Deployable React + Webpack 2 starter kit

- React 15
- Webpack 2
- React-hot-loader 3
- SASS

Running on development mode:
```
npm run dev
```

Running on production mode:
```
npm run build
npm start
```

## Deployment using Heroku cli
Before you deploy, make sure you generated your bundle through `npm run build`.

Running on production mode:
```
npm run build
git heroku push master
```
