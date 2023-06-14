# LittleLemon Restaurant
(Meta Back-End Developer Capstone Project)

## This is a Django web application for a restaurant named LittleLemon. The application fulfills the following criteria:
- Serves static HTML content using the Django framework
- Connects the backend to a MySQL database
- Implements APIs for menu and table booking
- Set up with user registration and authentication
- Contains unit tests
- The API can be tested with the Insomnia REST client

## Installation and Usage
To use this application, follow these steps:
1. Clone the repository from GitHub
2. Install the required dependencies.
3. Set up a MySQL database and configure the application to use it
4. Run the application using the Django development server.
5. Test the application using the Insomnia REST client or other tools.

## Credentials
| Username | Password       | User Type     |
|----------|----------------|---------------|
| meta     | password       | superuser     |
| mario    | mariospassword | standard user |

## Testing
The application contains unit tests that can be run using the Django test runner. To run the tests, use the following command: ```python manage.py test```
The API can also be tested using the Insomnia REST client or other tools.

## API endpoints to test
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
