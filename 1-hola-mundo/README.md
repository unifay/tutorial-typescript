# Primer programa "Hola Mundo"

### Modo Watch
El modo watch se ejecuta por terminal y los programas de typescript se transpila de manera automatica, el comando es el siguiente:
```
tsc -w
```

### Modo Debug con Visual Code
Se puede desarrollar con debug en el visual studio code descomentando o colocando el valor de la propiedad sourceMap en el tsconfig a *true*

### Hola Mundo

- Creamos un archivo de nombre *HolaMundo.ts*

- Agregamos el siguiente contenido:

  ```
  let variableEjemplo: string = 'Hola Mundo';
  console.log(variableEjemplo);
  ```
- Transpilamos con el siguiente comando:
  ```
  tsc HolaMundo.ts
  ```
- El comando anterior genera un archivo JavaScript HolaMundo.js, si tenemos instalado NodeJs instalado se podra ejecutar el archivo de la siguiente forma:

  ```
  node HolaMundo.js
  ```

Veremos el resultado:

```
Hola Mundo
```

