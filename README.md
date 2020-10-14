# ecommerce react
- e-commerce construido con react
- se agrego Bootstrap como framework css y font awesome para los iconos
- se usaron tres colecciones de firebase, una de productos, otra de categorias
- se usa un replaysubject de rxjs para compartir la data de las categorias existentes entre navbar y la pagina de productos, para poder mostrar el titulo de la categoria actual sin tener que estar consultando cada ve que se cargue la pagina
- el flujo de compra hace lo que es comun y requerido en un flujo de compra 'oficial' es decir, una vez que se crea la orden
se vacia el carro de compra 

## Website 

https://ecommerereact.web.app

(subido al hosting q ofrece firebase tambien)

## Available scripts 

en el directorio del projecto, puedes correr:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Extra Docs:
[Context Docs](./docs/Context.md)
[Environment Docs](./docs/Environment.md)