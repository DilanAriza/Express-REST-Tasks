# Express REST Tasks

_En este proyecto se realizo un CRUD con Express-generator_

## Comenzando🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._



### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_


```
    npm
    nodejs
    MongoDB
    Git
    PostMan
```

### Instalación 🔧

_Ya teniendo npm instalado junto con nodejs continua al siguiente paso:_

_Instalamos las dependencias necesarias para poder ejecutar nuestro proyecto_

```
    npm i --save
```

_Pueba de errores de dependencias corruptas_

```
    npm i -g npm-check-updates
    ncu
```

_Arregla los errores y verifica las versiones de las dependencias actuales_

```
    ncu -u
```

_Arregla errores de corrupcion_

```
    npm audit fix
```

#### Ejecucion del proyecto

_Iniciamos la base de datos de MongoDB_

```
    mongod
```

_Iniciamos el servidor en modo de prueba con el comando:_

```
    npm run dev
```


_Este comando hace referencia a la ejecucion del servidor con la dependencia de desarrollo nodemon_



_Para obtener los datos de el servidor abriremos postman y ejecutaremos la siguiente peicion:_

![En Postman](examples/imgs/GetAllTasks.png)
![En el navegador](examples/imgs/GetAllTasksBrowser.png)

_Para poder crear una nueva tarea ejecuta la siguiente peticicion con el metodo "POST"_
![En Postman](examples/imgs/CreateATask.png)

_Para buscar una tarea en cuestion gracias a su ID hacemos una peticion POST a la siguiente ruta_
![En Postman](examples/imgs/GetATask.png)
![En el navegador](examples/imgs/GetATaskBrowser.png)

_Para Actualizar una tarea enviamos una peticion con el ID como parametro de consulta y on el metodo PUT y los parametros que vamos a actualizar en el cuerpo de la peticion_
![En Postman](examples/imgs/UpdateATask.png)


_Y finalmente para Eliminar una tarea enviamos una peticion con el ID como parametro de consulta y on el metodo DELETE_
![En Postman](examples/imgs/DeleteATask.png)


## Despliegue 📦

_El despliegue varia con los diferentes hostings o servidores dedicados a los cuales se ejecuten, para la ejecucion del servidor en modo de produccion:_

```
    npm start
```

## Construido con 🛠️

_Herramientas para la construccion del proyecto mas no de la produccion del mismo_

* [NodeJS](https://nodejs.org/en/docs/) - El entorno de ejecucion
* [ExpressJS](https://expressjs.com/) - El framework web usado
* [NPM](https://docs.npmjs.com/) - Manejador de dependencias
* [MongoDB](https://docs.mongodb.com/manual/) - Base de datos "No Relacional"

## Wiki del framework📖

Puedes encontrar mucho más de cómo crear este tipo de servidores con express en [ExpressJS.com](https://expressjs.com)


## Autores ✒️

* **Dilan Ariza** - *Desarrollador, Documentacion, Despliegue, Tester* - [Dilan Ariza](https://github.com/DilanAriza)


## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.


---
_Plantilla de README de:_
⌨️ con ❤️ por [Villanuevand](https://github.com/Villanuevand) 😊