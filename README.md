
# Gestión de Reservas de Hoteles

Este proyecto es una aplicación de servicios para la gestión de reservas en hoteles, que permite realizar las 4 operaciones CRUD (Crear, Leer, Actualizar y Eliminar) y otras 6 operaciones adicionales relacionadas con filtros. La aplicación está construida utilizando Node.js y Express.

## Características del Proyecto

- Utiliza Node.js y Express para el desarrollo del servidor.
- Contiene un archivo .env para las variables de entorno, donde se establece el puerto.
- Incluye un archivo .gitignore que oculta las carpetas y archivos que no deben ser incluidos en el repositorio.
- Usa una arquitectura de carpetas clara.

## Estructura de carpetas

```bash
  FS_M4_PROY/
├── controllers/
│   └── controller.js
├── models/
│   └── model.js
├── routes/
│   └── routes.js
├── node_modules/
│   └── ...
├── .env
├── .gitignore
├── index.js
├── package-lock.js
└── package.json
```


## Endpoints

#### Crear reserva

| Método | Endpoint     | Ejemplo de uso              |
| :-------- | :------- | :------------------------- |
| `POST` | `/api/bookings` | Se utiliza para **generar** la reserva. Los campos a completar son: hotel, roomyType, guestsNumber, startDate, endDate y status.|

*Consideraciones:*
- hotel: En el caso de que el Hotel sea más de una palabra, usar guión bajo entre cada palabra, todo en mayúsculas. 
- roomType: Habitaciones disponibles: SIMPLE y DOBLE.
- guestsNumber: Cantidad de huéspedes.
- startDate y endDate: Formato dd-mm-yyyy.
- status: PENDIENTE_DE_PAGO y PAGADO.

#### Obtener la lista de reservas

| Método | Endpoint     | Ejemplo de uso              |
| :-------- | :------- | :------------------------- |
| `GET` | `/api/bookings` | Se utiliza para **obtener todas las reservas**. |

#### Obtener información de una reserva específica

| Método | Endpoint     | Ejemplo de uso              |
| :-------- | :------- | :------------------------- |
| `GET` | `/api/bookings/:id` | Se utiliza para **obtener** una reserva específica en base al ID de la reserva. |

#### Actualizar información de una reserva	

| Método | Endpoint     | Ejemplo de uso              |
| :-------- | :------- | :------------------------- |
| `PUT` | `/api/bookings/:id` | Se utiliza para **actualizar** una reserva específica en base al ID de la reserva. |

#### Eliminar una reserva específica	

| Método | Endpoint     | Ejemplo de uso              |
| :-------- | :------- | :------------------------- |
| `DELETE` | `/api/bookings/:id` | Se utiliza para **eliminar** una reserva específica en base al ID de la reserva.  |

#### Filtrar reservas por hotel	

| Método | Endpoint     | Ejemplo de uso              |
| :-------- | :------- | :------------------------- |
| `GET` | `/api/bookings?hotel=HOTEL` | Se utiliza para **obtener** todas las reservas asociadas a un hotel en particular. Recordar que los hoteles se guardan con guión bajo entre palabras y todo en mayúsculas. |

#### Filtrar reservas por rango de fechas	

| Método | Endpoint     | Ejemplo de uso              |
| :-------- | :------- | :------------------------- |
| `GET` | `/api/bookings?start_date=FECHA_INICIO&end_date=FECHA_FIN` | Se utiliza para **obtener** todas las reservas asociadas a una fecha en particular. Recordar que las fechas se guardan con el formato dd-mm-yyyy.|

#### Filtrar reservas por tipo de habitación	

| Método | Endpoint     | Ejemplo de uso              |
| :-------- | :------- | :------------------------- |
| `GET` | `/api/bookings?roomType=` | Se utiliza para **obtener** todas las reservas asociadas a un tipo de habitación en particular. Recordar que los tipos de habitación disponibles son SIMPLE y DOBLE. |

#### Filtrar reservas por estado	

| Método | Endpoint     | Ejemplo de uso              |
| :-------- | :------- | :------------------------- |
| `GET` | `/api/bookings?status=` | Se utiliza para **obtener** todas las reservas asociadas al estado de la reserva en particular. Recordar que los tipos de estados son PENDIENTE_DE_PAGO y PAGADO.|

#### Filtrar reservas por número de huéspedes	

| Método | Endpoint     | Ejemplo de uso              |
| :-------- | :------- | :------------------------- |
| `GET` | `/api/bookings?guestsNumber=` | Se utiliza para **obtener** todas las reservas asociadas a la cantidad de huéspedes tipo en particular.|


## Uso

Para interactuar con los endpoints, se puede utilizar herramientas como Postman o THUNDER CLIENT para enviar solicitudes HTTP a tu servidor Node.js en http://localhost:3001. (Puerto asignado en el .env)


Instalar las dependencias

```bash
  npm install
```

Correr el servidor

```bash
  npm run start
```
