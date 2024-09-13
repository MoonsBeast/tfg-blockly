# Blockly TFG
Autor: Rodrigo Calero Albarrán (r.calero.albarran@gmail.com)

# Primeros pasos

1. Instalar Node JS, suele venir con NPM, pero asegurarse de que tambien está instalado (npm --version)
2. Clonar el repositorio
3. Ejecutar ``npm install`` en el directorio del proyecto para descargar las dependencias

## Ejecutar en local

**Comando (Desde el directorio raiz):** ``npm run start``

### Visualización

Deberia abrir una ventana automaticamente en el navegador , si no ir a localhost:8080.

## Ejecutar en Docker

**Comando (Desde el directorio raiz):** ``docker-compose -f .\docker\docker-compose.yml up``
# Blockly TFG
Autor: Rodrigo Calero Albarrán (r.calero.albarran@gmail.com)

# Primeros pasos

1. Instalar Node JS, suele venir con NPM, pero asegurarse de que también está instalado (npm --version)
2. Clonar el repositorio
3. Ejecutar ``npm install`` en el directorio del proyecto para descargar las dependencias

## Ejecutar en local

**Comando (Desde el directorio raíz):** ``npm run start``

### Visualización

Debería abrir una ventana automáticamente en el navegador, si no ir a local-host:8080.

## Ejecutar en Docker

**Comando (Desde el directorio raiz):** ``docker-compose -f .\docker\docker-compose.yml up``

Desactivar contenedor: ``docker-compose -f .\docker\docker-compose.yml down``

Si se modifica el código hay que borrar la imagen para que se vean los cambios (Estando desactivado el contenedor): ``docker rmi blockly_image``

Se pueden establecer volúmenes en Docker para que estos cambios sean instantá-neos y no haga falta borrar y rehacer la imagen.

### Visualización

Abrir el navegador en localhost:3000 o IPdeLaMaquina:3000

# Máquina de despliegue

~~Censurado~~

# Partes del proyecto

## /docker

Contiene Dockerfile y docker-compose.yml, para poder desplegar con Docker.

## /src

Contiene todas las carpetas y los ficheros del proyecto.

- __index.css__ es el CSS de la app.
- __index.html__ es el HTML de la app.
- __index.ts__ se encarga de toda la lógica de inicio de la aplicación. Es el **main**.
- __serialization.ts__ se encarga de guardar y cargar el estado de la aplica-ción. No deberia ser necesario modificarlo.
- __toolbox.ts__ contine las declaraciones de los diferentes apartados y los bloques de estos.

## /src/blocks

Contiene los ficheros .ts donde se definen los bloques. En este caso spell.ts tiene todos los bloques de SPELL, text.ts es un fichero autogenerado de ejemplo.

## /src/generators

Contine los ficheros con las funciones encargadas de generar el código de los bloques. En este caso solo está python.ts pero se pueden añadir y encapsular como se crea conveniente.

# Añadir nuevos bloques

Recomiendo usar la [fábrica de bloques](https://google.github.io/blockly-samples/examples/developer-tools/index.html) es mucho más sencillo.

El código generado de la definición del bloque debe ir en el directorio blocks, puede ser un fichero nuevo. He puesto todos los bloques en spell.ts por tenerlos juntos. Si se hace un nuevo fichero hay que importarlo y añadirlo en index.ts.

El código que el bloque genera es el apartado code stub debe ir en la carpeta generator, de la misma forma que la definición. En este caso en python.ts.

Por último, tenemos que añadir el bloque en toolbox.ts, el apartado de spell está casi al final del fichero.

La [documentación](https://developers.google.com/blockly/guides/get-started/what-is-blockly) habla sobre esto en caso de dudas. También debería es-tar mi documento del TFG donde hablo de trabajar con blockly más en profundidad.

Desactivar contenedor: ``docker-compose -f .\docker\docker-compose.yml down``

Si se modifica el codigo hay que borrar la imagen para que se vean los cambios (Estando desactivado el contenedor): ``docker rmi blockly_image``

Se pueden establecer volumenes en Docker para que estos cambios sean instantaneos y no haga falta borrar y rehacer la imagen.

### Visualización

Abrir el navegador en localhost:3000 o IPdeLaMaquina:3000

# Máquina de despliegue

~~Censurado~~

# Partes del proyecto

## /docker

Contiene Dockerfile y docker-compose.yml, para poder desplegar con Docker.

## /src

Contiene todaslas carpetas y los ficheros del proyecto.

- __index.css__ es el CSS de la app.
- __index.html__ es el HTML de la app.
- __index.ts__ se encarga de toda la logica de inicio de la aplicación. Es el **main**.
- __serialization.ts__ se encarga de guardar y cargar el estado de la aplicación. No deberia ser necesario modificarlo.
- __toolbox.ts__ contine las declaraciones de los diferentes apartados y los bloques de estos.

## /src/blocks

Contiene los ficheros .ts donde se definen los bloques. En este caso spell.ts tiene todos los bloques de SPELL, text.ts es un fichero autogenerado de ejemplo.

## /src/generators

Contine los ficheros con las funciones encargadas de de generar el codigo de los bloques. En este caso solo está python.ts pero se pueden añadir y encapsular como se crea conveniente.

# Añadir nuevos bloques

Recomiendo usar la [fábrica de bloques](https://google.github.io/blockly-samples/examples/developer-tools/index.html) es mucho más sencillo.

El codigo generado de la definición del bloque debe ir en el directorio blocks, puede ser un fichero nuevo. He puesto todos los bloques en spell.ts por tenerlos juntos. Si se hace un nuevo fichero hay que importarlo y añadirlo en index.ts.

El código que el bloque genera es el apartado code stub debe ir en la carpeta generator, de la misma forma que la definición. En este caso en python.ts.

Por último tenemos que añadir el bloque en toolbox.ts, el apartado de spell esta casi al final del fichero.

La [documentación](https://developers.google.com/blockly/guides/get-started/what-is-blockly) habla sobre esto en caso de dudas. Tambien debería estar mi documento del TFG donde hablo de trabajar con blockly más en profundidad.