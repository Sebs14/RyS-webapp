
# RyS Transportes WebApp

El proyecto RyS Transportes es un sistema de tracking de unidades de carga, en el cual se puede: 

* Registrar unidades
* Registrar conductores
* Dar seguimiento a rutas de entrega
* Consultar por medio de Geolocation en tiempo real
* Mantener control de las rutas completadas, pendientes e incompletas

## Contenido del manual técnico.
### Requerimientos técnicos

Requerimientos mínimos para la utilización del aplicativo :
  - Windows 10 64-bit: Pro, Enterprise, or Education (Build 16299 o superior).
  - Procesador de 64 bits.
  - 4 GB RAM.

## Listado de rutas mapeadas a nivel de API:
| Consulta HTTP          | Método       | Response     |
| -----------------| --------- | --------- |
| http://localhost:8080/auth/signin |POST| Token para acceder a demás consultas |
| http://localhost:8080/auth/signup |POST| Registo de nuevo usuario en Base de Datos  |
| http://localhost:8080/units/add |POST| Registo de una nueva unidad  |
|   http://localhost:8080/units   |GET| Obtener listado de todas las unidades a nivel de BD       |
|http://localhost:8080/units|PUT|Actualizar unidad ya existente|
|http://localhost:8080/units/{id}|DELETE|Eliminar units por ID|
|http://localhost:8080/freights |GET|Obtener listado de todas los fletes a nivel de BD|
|http://localhost:8080/freights/{id} |GET|Obtener fletes por ID a nivel de BD|
|http://localhost:8080/freights|POST|Registrar nuevo flete|
|http://localhost:8080/freights|PUT|Actualizar flete ya existente|
|http://localhost:8080/user|GET|Obtener todos los usuarios a nivel de BD|
|http://localhost:8080/clients|GET|Obtener listado de todos los clientes|
|http://localhost:8080/clients/{id}|GET|Obtener cliente por ID|
|http://localhost:8080/clients|POST|Crear nuevo cliente|
|http://localhost:8080/clients|PUT|Actualizar cliente ya existente|
|http://localhost:8080/clients/{id}|DELETE|Eliminar cliente por ID|
|http://localhost:8080/empfreight|GET|Obtener todos los empleados por flete|
|http://localhost:8080/empfreig|GET|Obtener todos los empleados por flete|
|http://localhost:8080/empfreight|POST|Crear empleados por flete|
|http://localhost:8080/empfreight|PUT|Actualizar empleados por flete ya existente|
|http://localhost:8080/empfreight/{id}|DELETE|Eliminar empleados por flete por ID|

## Features

- Historial de Rutas

![alt text](HistorialdeViajes.png "viajes")

- Unidades Registradas

![alt text](/public/Historial.png "viajes")

- Unidad: Detalle de Ruta

![alt text](/public/DetalledeRuta.png "viajes")

- Unidad: Crear Nueva

![alt text](/public/NuevaRuta.png "viajes")

- Conductores Registrados

![alt text](/public/Conductores.png "viajes")

- Conductor: Crear Nuevo

![alt text](/public/NuevoConductor.png "viajes")

Para mayor detalle sobre las funcionalidades, puede consultar [Manual de Usuario](https://drive.google.com/file/d/1XZUcZSqcor6LFCLnzUlqhz7FZNU4EZaf/view?usp=sharing)

## License
El software se encuentra licenciado con [MIT](https://choosealicense.com/licenses/mit/), ya que nuestro principal objetivo es que la colaboración en el proyecto sea continúa y que diferentes empresas puedan adaptarlo a sus necesidad basandose en el código fuente de RyS Transportes, con la única condición que el software que se extienda de este continue siendo Open Source




## Deployment

Para instalar las dependencias del proyecto se debe correr primero el comando

```bash
  npm install
```
Luego, para correr el programa en localhost corremos el comando

```bash
  npm run dev
```


## Authors

- Sebastián Flores Iraheta (FrontEnd) 00196919@uca.edu.sv
- Ricardo Adrián Aparicio Lemus (Backend) 00032219
- Diego Esuardo Abrego Cornejo (Backend) 00044919
- Diego Alessandro Rodríguez Villalta (Backend) 00101519
- Andres Enrique Lopez Rodriguez (Backend) 00196919@uca.edu.sv
- Andrea Alejandra Ayala Deras (FrontEnd) 00109319@uca.edu.sv




