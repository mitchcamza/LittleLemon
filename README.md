# 🍋 LittleLemon Restaurant

A production-ready, containerized Django web application demonstrating modern full-stack development practices with RESTful API design, reverse proxy architecture, and comprehensive testing.

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Python](https://img.shields.io/badge/Python-3.12-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Django](https://img.shields.io/badge/Django-5.1-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![Django REST Framework](https://img.shields.io/badge/DRF-3.15-ff1709?style=for-the-badge&logo=django&logoColor=white)](https://www.django-rest-framework.org/)
[![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/)

## 🛠️ Tech Stack

### Backend
- **Python 3.12** - Modern Python with type hints and async support
- **Django 5.1** - High-level Python web framework
- **Django REST Framework 3.15** - Powerful toolkit for building Web APIs
- **SQLite** - Lightweight database for development (PostgreSQL-ready)

### DevOps & Infrastructure
- **Docker & Docker Compose** - Containerization for consistent environments
- **Nginx** - Reverse proxy for production-grade request handling
- **Container Networking** - Isolated network architecture

### Testing & Quality
- **Django Test Framework** - Comprehensive unit testing
- **pytest** - Modern testing framework

---

## ✨ Key Features

- 🔐 **User Authentication & Authorization** - Secure user registration and login system with token-based authentication
- 📝 **RESTful API** - Full CRUD operations for menu management and table bookings following REST principles
- 🐳 **Containerized Deployment** - Docker-based setup ensuring consistent environments across development and production
- 🔄 **Reverse Proxy Architecture** - Nginx for production-grade request handling and load balancing
- ✅ **Test Coverage** - Comprehensive unit tests ensuring code reliability and maintainability
- 🗄️ **Database Integration** - ORM-based data persistence with Django models for scalable data management

---

## 🏗️ Architecture

The application follows a modern three-tier architecture with reverse proxy:

```
┌─────────┐      ┌───────┐      ┌────────────┐      ┌──────────┐
│ Client  │─────▶│ Nginx │─────▶│   Django   │─────▶│ Database │
└─────────┘      └───────┘      └────────────┘      └──────────┘
                 (Port 80)       (Port 8001)          (SQLite)
                 Reverse Proxy   REST API + MVT
```

**Flow:**
1. Client requests hit Nginx reverse proxy on port 80
2. Nginx forwards requests to Django application on port 8001
3. Django processes requests, interacts with database via ORM
4. Response flows back through the chain to the client

---

## 💡 What I Learned

Through building this project, I gained hands-on experience with:

- **Building Production-Ready Web Applications** - Implemented a full-stack Django application with proper separation of concerns and MVT architecture
- **RESTful API Design Principles** - Designed and implemented a clean REST API with proper HTTP methods, status codes, and authentication
- **Containerization for Deployment** - Dockerized the application for consistency across environments and simplified deployment
- **Reverse Proxy Architecture** - Configured Nginx as a reverse proxy to handle SSL termination and request routing
- **Writing Maintainable, Tested Code** - Developed comprehensive unit tests and followed Django best practices
- **Database Management** - Utilized Django ORM for database operations, migrations, and relationship management
- **Security Best Practices** - Implemented token-based authentication and secure API endpoints

---

## 📋 Prerequisites

Before running this application, ensure you have the following installed:

- **Docker Engine** 20.x or higher ([Installation Guide](https://docs.docker.com/get-docker/))
- **Docker Compose** 2.x or higher ([Installation Guide](https://docs.docker.com/compose/install/))
- **Python 3.12+** (optional, for local development without Docker)

---

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

---

## 🧪 Testing

The application includes comprehensive unit tests to ensure reliability and maintainability.

### Running Tests

**Inside the Docker container:**
```bash
docker compose exec littlelemon python littlelemon/manage.py test
```

**Locally (without Docker):**
```bash
cd littlelemon
python manage.py test
```

### API Testing

The API can also be tested using tools like Insomnia, Postman, or cURL.

### API Endpoints

| Description           | Method | Path                        | Authorization Header              | Form/JSON Payload                                                         |
|-----------------------|--------|-----------------------------|-----------------------------------|---------------------------------------------------------------------------|
| Load static home page | GET    | /restaurant/                | -                                 | -                                                                         |
| View menu items       | GET    | /restaurant/menu/           | -                                 | -                                                                         |
| View single menu item | GET    | /restaurant/menu/<<int:pk>> | -                                 | -                                                                         |
| Add a menu item       | POST   | /restaurant/menu/           | Bearer `<your_token>`             | `{"id": 4,"title": "Burger","price": "4.00","inventory": 10 }`            |
| Update a menu item    | PUT    | /restaurant/menu/<<int:pk>> | Bearer `<your_token>`             | `{"id": 3,"title": "Spaghetti Bolognese","price": "7.00","inventory": 20}` |
| Delete a menu item    | DELETE | /restaurant/menu/<<int:pk>> | Bearer `<your_token>`             | -                                                                         |
| Obtain auth token     | POST   | /restaurant/api-token-auth/ | -                                 | `{"username": "mario","password": "mariospassword"}`                      |
| View table bookings   | GET    | /restaurant/booking/tables  | Bearer `<your_token>`             | -                                                                         |

> **Note:** Replace `<your_token>` with the token obtained from the `/restaurant/api-token-auth/` endpoint.

![API Testing Example](</images/Screenshot 2024-09-13 at 14.17.23.png>)

---

## Stopping and Removing the Containers

To stop the containers:
```bash
docker compose down
```

To remove all containers, networks, and volumes:
```bash
docker compose down -v
```

---

## 🚀 Future Enhancements

This project has room for growth and additional features:

- [ ] **CI/CD Pipeline** - Implement automated testing and deployment with GitHub Actions
- [ ] **Frontend Framework** - Build a modern SPA with React or Vue.js
- [ ] **Email Notifications** - Send confirmation emails for bookings and reservations
- [ ] **Cloud Deployment** - Deploy to AWS/Azure with managed PostgreSQL database
- [ ] **Monitoring & Logging** - Integrate ELK stack (Elasticsearch, Logstash, Kibana) for observability
- [ ] **Caching Layer** - Add Redis for improved performance
- [ ] **API Documentation** - Generate interactive API docs with Swagger/OpenAPI

---

## 📬 Contact

**Mitchell Campbell** - [LinkedIn](https://www.linkedin.com/in/mitch-campbell-93b18919b/) | [GitHub](https://github.com/mitchcamza)

Feel free to reach out if you'd like to discuss this project or potential opportunities!

---
