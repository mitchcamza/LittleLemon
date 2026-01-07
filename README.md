# LittleLemon Restaurant
This project containerizes a Django Web application and uses Nginx to act as a reverse proxy to forward incoming requests to the web application. This showcases my ability to work with Python, Django and Docker and Nginx, as well as understand principles such as MVT architecture, serialization, dependency management and database connectivity.

## LittleLemon is a Django web application for a restaurant named LittleLemon. The application fulfills the following criteria:
- Serves static HTML content using the Django framework
- Connects the backend to a database
- Implements APIs for menu and table booking
- Provides user registration and authentication
- Contains unit tests

## Getting Started

1. Ensure you have [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed.

2. Create the Docker network:
   ```bash
   docker network create littlelemon_net
   ```

3. Build and start the containers:
    ```bash
    docker compose up -d
    ```

4. The Django application will be available at [http://localhost/restaurant](http://localhost:restaurant)
![Restaurant Page](</images/Screenshot 2024-09-13 at 11.32.32-1.png>)

   The admin login page is accessible via [http://localhost/admin](http://localhost/admin)
![Admin Page](</images/Screenshot 2024-09-13 at 11.03.14-1.png>)

## Migrations and Users

1. To run migrations inside the container:
    ```bash
    docker compose exec littlelemon python littlelemon/manage.py migrate
    ```

2. To create a superuser:
    ```bash
    docker compose exec littlelemon python littlelemon/manage.py createsuperuser
    ```

## Testing
The application contains unit tests that can be run using the Django test runner. To run the tests, use the following command: ```python manage.py test```
The API can also be tested using the Insomnia REST client or other tools.

### API endpoints to test
| Description           | Method | Path                        | Token                                    | Form/JSON payload                                                         |
|-----------------------|--------|-----------------------------|------------------------------------------|---------------------------------------------------------------------------|
| Load static home page | GET    | /restaurant/                |                                          |                                                                           |
| View menu items       | GET    | /restaurant/menu/           |                                          |                                                                           |
| View single menu item | GET    | /restaurant/menu/<<int:pk>> |                                          |                                                                           |
| Add a menu item       | POST   | /restaurant/menu/           | 2bb2d58fa95e3457d22c028663fbe1ad1e5ca40e | {"id": 4,"title": "Burger","price": "4.00","inventory": 10 }              |
| Update a menu item    | PUT    | /restaurant/menu/<<int:pk>> | 2bb2d58fa95e3457d22c028663fbe1ad1e5ca40e | { 	"id": 3,	"title": "Spaghetti Bolognese",	"price": "7.00",	"inventory": 20} |
| Delete a menu item    | DELETE | /restaurant/menu/<<int:pk>> | 2bb2d58fa95e3457d22c028663fbe1ad1e5ca40e |                                                                           |
| Obtain authtoken      | POST   | /restaurant/api-token-auth/ |                                          | { 	"username": "mario",	"password": "mariospassword"}                       |
| View table bookings   | GET    | /restaurant/booking/tables  | 2bb2d58fa95e3457d22c028663fbe1ad1e5ca40e |                                                                           |

![alt text](</images/Screenshot 2024-09-13 at 14.17.23.png>)

## Stopping and Removing the Containers
To stop the containers:
```bash
docker compose down
```