# Instalacion TypeScript

La instalacion de **TypeScript** es simple, el requisito previo practicamente es **NodeJS** con el gestor de paquetes **npm** para poder instalar el transpilador de **TypeScript**:

- Paso 1

Descargar e Instalar **NodeJS** [desde aqui nodejs.org](https://nodejs.org/en/)

- Paso 2
  
Ejecutar el siguiente comando para ver si se instalo, nos muestra la version:
```
node -v
```
- Paso 3
  
Instalar **TypeScript**:
```
npm install -f typescript
```
- Paso 4
  
Mostrar version de  **TypeScript**:
```
tsc -v
```
- Paso 5
  
Instalar los tsd de NodeJS:
```
npm install tsd -g
```
- Paso 6
  
Crear archivo de configuracion para **TypeScript**
```
tsc --init
```

Esto genera un archivo tsconfig.json el cual indica que es la raiz del proyecto para **TypeScript**
