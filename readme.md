# Actividad Chuck Norris

## _Intrucciones_
Tras descargar el repositorio, todos los ejercicios se pueden ejecutar directamente en el navegador. Salvo el de Node y el de WebComponentes, que por alguna razón no hemos logrado hacerlo funcionar.

### Ejercicio de WebComponents
El profesor comentaba que debe servirse en un servidor local para que funcione (a mí no me ha funcionado). Para ello recomienda usar http-server.

Instala `http-server` globalmente:
```sh
npm i -g http-server
```
Y ahora lanza el servidor, si no recibe parámetros se abrirá en la ruta actual:
```sh
http-server
```

Te aparecerá una URL local, algo como http://192.168.1.134:8080/. Puedes abrirla directamente y ahí verás los ficheros.

### Ejercicio de Node
Abre el directorio chuckNode en un terminal:
```sh
cd ./chuckNode
```

Instala las dependencias:
```sh
npm i
```

Y ejecuta el script con node:
```sh
node chuckNodeFetch.js;   
```