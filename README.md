# Sistema de gestión de inventario
## Integrantes
- Jonathan David Viveros cordoba
- José Gabriel Tovar Gómez
- Eliana Jackeline Zambrano Cardenas

## Acerca de
Este repositorio contiene el backend junto con los archivos necesarios para contenerizar y desplegar tanto el servidor de nodejs como la base de datos PostgreSQL utilizando docker compose.

En el servidor de NodeJS se encuentran los puntos de API para administrar el inventario de un supermercado (La información de las rutas especificas se encuentra en la sección "Documentación de los endpoints").

En el servidor de PostgreSQL se cuenta con las tablas Categoria, Clientes, DetalleVenta, Productos, Proveedors y Venta.

## Desplegar servidor
Para desplegar este proyecto es necesario contar con docker y docker compose, mas información sobre como instalarlo [aquí](https://docs.docker.com/engine/install/)

Se levantan los contenedores utilizando el siguiente comando:
```bash  
docker compose up -d
```

En caso de que se haga un cambio al servidor es necesario reconstruir el contenedor, por lo cual se añade la siguiente bandera al comando:
```bash
docker compose up --build -d
```

Para detener el servidor y la base de datos se ejecuta el siguiente comando:
```bash
docker compose down
```

## Validar despliegue del servidor

Por defecto el servidor se ejecuta en `http://localhost:3000`, para verificar que el servidor se encuentre funcionando de manera adecuada puede hacer una petición usando curl:
```bash
curl http://localhost:3000
```

Esto debería retornar:
```
API de Inventario del Supermercado
```

## Documentación de los endpoints
La documentación se puede acceder de manera interactiva en `http://localhost:3000/doc` luego de iniciar el servidor.

![Captura de la pagina de documentación](./assets/documentacion.png)

