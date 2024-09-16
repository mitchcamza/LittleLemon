# LittleLemon Restaurant
(Meta Back-End Developer Capstone Project)

## This is a Django web application for a restaurant named LittleLemon. The application fulfills the following criteria:
- Serves static HTML content using the Django framework
- Connects the backend to a MySQL database
- Implements APIs for menu and table booking
- Set up with user registration and authentication
- Contains unit tests
- The API can be tested with the Insomnia REST client

![alt text](<Screenshot 2024-09-13 at 11.32.32-1.png>)
![alt text](<Screenshot 2024-09-13 at 11.03.14-1.png>)
![alt text](<Screenshot 2024-09-13 at 11.03.57-1.png>)
![alt text](<Screenshot 2024-09-13 at 14.17.23.png>)
![alt text](<Screenshot 2024-09-13 at 14.17.37.png>)
![alt text](<Screenshot 2024-09-13 at 14.18.09.png>)
![alt text](<Screenshot 2024-09-13 at 14.18.30.png>)
![alt text](<Screenshot 2024-09-13 at 14.18.39.png>)
![alt text](<Screenshot 2024-09-13 at 14.19.06.png>)
![alt text](<Screenshot 2024-09-13 at 14.19.12.png>)
![alt text](<Screenshot 2024-09-13 at 14.19.16.png>)

## Getting the Code
1. Clone the Repository from GitHub 
    ```bash 
    git clone https://github.com/Meta-Backend-Developer/08-LittleLemon.git
    ```

## Installation and Usage

### Method 1 (Recommended for new users):

1. Make the `setup.sh` script in the root directory executable:
    ```bash 
    chmod +x setup.sh 
    ```
2. Run the Script from the Root Directory:
    ```bash
    ./setup.sh
    ```

### Method 2: Follow the setup instructions below:

1. Activate the Existing Virtual Environment:
    ```bash 
    python -m venv lemon
    source lemon/bin/activate  # (On Windows use `env\Scripts\activate`)
    ```

2. Install Dependencies:
    ```bash
    pip install -r requirements.txt
    ```

3. Database Setup
The MySQL database is already configured in the settings.py file. If you need to modify the connection details, you can find the relevant settings in the DATABASES section of settings.py.

4. Apply Database Migrations:
    ```bash
    python3 manage.py migrate
    ```

5. Run the Development Server:
    ```bash
    python3 manage.py runserver
    ```

## Establishing a MySQL connection
Note: the 'django.db.backends.mysql' engine does not work on ARM based machines. 
Please install mysql-connector-python using pip or pipenv.
Alternatively, if you are using the mysqlclient connector, you can uncomment the 'django.db.backends.mysql' line in **settings.py** and comment out the line below it, in order to establish a database connection.

### Database Credentials
| Username | Password       | User Type     |
|----------|----------------|---------------|
| meta     | password       | superuser     |
| mario    | mariospassword | standard user |

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
