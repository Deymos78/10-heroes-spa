# Configuracion de Aplicacion React con vite usando npm y usando la biblioteca React Router #

# Las Configuracion estaran mas simplificadas #

## Empezaremos iniciando y configurando la aplicacion

**Nos colocamos en la carpeta en la que crearemos la aplicacion y ejecutaremos el comando**

    npm create vite

*Realizamos la configuracion segun nuestras necesidades, en este caso seleccionamos la opciones de react y vite javascript*

**Ahora instalamos las dependencias del proyecto**

    npm install

**Para ejecutar la aplicacion usaremos**

    npm run dev

La obtencion de datos se obtendran de manera local, almacenados en una carpeta dentro de los archivos del proyecto

**Se usara el CDN de Boostrap para darle estilo y el CDN de animate.css para las animaciones dentro de la aplicacion**

**Instalacion de React Router en la version 6**

    npm install react-router-dom@6

**Enlace para ver la configuracion de BrowseRouter en React**

[documentacion de React Router](https://reactrouter.com/en/main/routers/create-browser-router)

Hay que importar el Browse Route en la parte mas alta de la aplicacion, por lo general sera en el main, donde se tendra que colocar 
entre las etiquetas <BrowseRouter></BrowseRouter> el componente principal


**Se usara <Routes></Routes> para anidar los diferentes <Route> de los componentes que tengamos o queramos enlazar a un path**

**Instalamos la dependencia query-string nos permitira para extraer partes del objeto que nos devuelve el customHook useLocation()**

    npm install query-string