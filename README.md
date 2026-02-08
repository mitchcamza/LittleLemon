# 🍋 Little Lemon Restaurant

A production-ready, containerized Django web application demonstrating modern full-stack development practices with RESTful API design, reverse proxy architecture, and comprehensive testing.

## 🚀 Live Demo 
[![Render Status](https://img.shields.io/website?style=for-the-badge&label=Render&logo=render&up_message=deployed&down_message=offline&url=https%3A%2F%2Flittlelemon-tnbw.onrender.com&color=46E3B7&logoColor=white)](https://littlelemon-tnbw.onrender.com)

**Live Demo on Render: [https://littlelemon-tnbw.onrender.com](https://littlelemon-tnbw.onrender.com)**

*`*`The live demo may require a minute to spin up a server.*

---

## 📚 Table of Contents
- [🛠️ Tech Stack](#tech-stack)
- [✨ Key Features](#key-features)
- [🏗️ Architecture](#architecture)
- [💡 What I Learned](#what-i-learned)
- [📋 Prerequisites](#prerequisites)
- [🚀 Getting Started](#getting-started)
- [🎨 Frontend Design](#frontend-design)
- [🔧 Migrations and Users](#migrations-and-users)
- [🧪 Testing](#testing)
- [🛑 Stopping and Removing the Containers](#stopping-and-removing-the-containers)
- [📬 Contact](#contact)

<a id="tech-stack"></a>
## 🛠️ Tech Stack

### Backend
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![Django REST Framework](https://img.shields.io/badge/DRF-ff1709?style=for-the-badge&logo=django&logoColor=white)](https://www.django-rest-framework.org/)
[![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
- **Python** - Modern Python with type hints and async support
- **Django** - High-level Python web framework
- **Django REST Framework** - Powerful toolkit for building Web APIs
- **SQLite** - Lightweight database for development (PostgreSQL-ready)

### DevOps & Infrastructure
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/)
- **Docker & Docker Compose** - Containerization for consistent environments
- **Nginx** - Reverse proxy for production-grade request handling
- **Container Networking** - Isolated network architecture

### Testing & Quality
[![Django Tests](https://img.shields.io/badge/Django_Tests-092E20?style=for-the-badge&logo=django&logoColor=white)](https://docs.djangoproject.com/en/stable/topics/testing/)
[![pytest](https://img.shields.io/badge/pytest-0A9EDC?style=for-the-badge&logo=pytest&logoColor=white)](https://pytest.org/)
- **Django Test Framework** - Comprehensive unit testing
- **pytest** - Modern testing framework

---

<a id="key-features"></a>
## ✨ Key Features

### Backend
- 🔐 **User Authentication & Authorization** - Secure user registration and login system with token-based authentication
- 📝 **RESTful API** - Full CRUD operations for menu management and table bookings following REST principles
- 🗄️ **Database Integration** - ORM-based data persistence with Django models for scalable data management
- ✅ **Test Coverage** - Comprehensive unit tests ensuring code reliability and maintainability

### Frontend
- 🎨 **Modern Responsive Design** - Professional minimalistic interface with mobile-first approach across all devices
- 🧭 **Intuitive Navigation** - Sticky navigation bar with active page indicators and mobile-friendly hamburger menu
- ✨ **Interactive Animations** - Smooth scroll-based animations and hover effects for enhanced user experience
- 📱 **Multi-Page Application** - Complete user journey with Home, Menu, Bookings, and About pages
- 🍽️ **Visual Menu Showcase** - Card-based grid layout displaying menu items with images, prices, and availability
- 📅 **Booking Management System** - Intuitive reservation form with date/time picker and booking management interface

### Infrastructure
- 🐳 **Containerized Deployment** - Docker-based setup ensuring consistent environments across development and production
- 🔄 **Reverse Proxy Architecture** - Nginx for production-grade request handling and load balancing

---

<a id="architecture"></a>
## 🏗️ Architecture

The application follows a modern three-tier architecture with reverse proxy:

```
┌─────────┐      ┌───────┐      ┌────────────┐      ┌──────────┐
│ Client  │─────▶│ Nginx │─────▶│   Django   │─────▶│ Database │
└─────────┘      └───────┘      └────────────┘      └──────────┘
   Modern         (Port 80)       (Port 8001)          (SQLite)
 Responsive       Reverse Proxy   REST API + MVT       ORM-based
  Frontend                        + Templates
```

**Flow:**
1. Client requests hit Nginx reverse proxy on port 80
2. Nginx forwards requests to Django application on port 8001
3. Django processes requests via views, renders templates, or returns API responses
4. Database operations handled through Django ORM
5. Response flows back through the chain to the client

**Frontend Stack:**
- Modern CSS3 with custom properties and animations
- Vanilla JavaScript with Intersection Observer API
- Responsive design with mobile-first approach
- SVG-based imagery for scalability

---

<a id="what-i-learned"></a>
## 💡 What I Learned

Through building this project, I gained hands-on experience with:

**Backend Development:**
- **Building Production-Ready Web Applications** - Implemented a full-stack Django application with proper separation of concerns and MVT architecture
- **RESTful API Design Principles** - Designed and implemented a clean REST API with proper HTTP methods, status codes, and authentication
- **Database Management** - Utilized Django ORM for database operations, migrations, and relationship management
- **Security Best Practices** - Implemented token-based authentication, CSRF protection, and secure API endpoints
- **Writing Maintainable, Tested Code** - Developed comprehensive unit tests and followed Django best practices

**Frontend Development:**
- **Modern CSS Architecture** - Built a scalable CSS system using custom properties, Grid, and Flexbox for responsive layouts
- **Interactive User Interfaces** - Implemented smooth animations and transitions using CSS keyframes and JavaScript
- **Responsive Design Principles** - Created mobile-first designs that adapt seamlessly across devices (mobile, tablet, desktop)
- **User Experience Design** - Applied visual hierarchy, feedback patterns, and accessibility best practices
- **JavaScript Interactivity** - Developed dynamic features with vanilla JavaScript including Intersection Observer API for scroll animations

**DevOps & Infrastructure:**
- **Containerization for Deployment** - Dockerized the application for consistency across environments and simplified deployment
- **Reverse Proxy Architecture** - Configured Nginx as a reverse proxy to handle SSL termination and request routing

---

<a id="prerequisites"></a>
## 📋 Prerequisites

Before running this application, ensure you have the following installed:

- **Docker Engine** 20.x or higher ([Installation Guide](https://docs.docker.com/get-docker/))
- **Docker Compose** 2.x or higher ([Installation Guide](https://docs.docker.com/compose/install/))
- **Python 3.12+** (optional, for local development without Docker)

---

<a id="getting-started"></a>
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

<a id="installation-and-running-the-server-without-docker"></a>
### Installation and Running the Server Without Docker

To install the required packages and run the server without Docker, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/LittleLemon.git
   cd LittleLemon
   ```

2. **Set up the virtual environment**:
   ```bash
   python3 -m venv lemon_env
   source lemon_env/bin/activate
   ```

3. **Install the requirements**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the server**:
   ```bash
   python ./littlelemon/manage.py runserver
   ```

<a id="frontend-design"></a>
## 🎨 Frontend Design

The website features a modern, professional design system built with responsive design principles and interactive animations.

### Design System

**Color Palette:**
- Primary: `#495E57` (Deep Green) - Sophistication and nature
- Secondary: `#F4CE14` (Lemon Yellow) - Energy and warmth
- Accent: `#EE9972` (Coral) - Appetite appeal
- Background: `#EDEFEE` (Off-White) - Clean and modern
- Text: `#333333` (Dark Gray) - Optimal readability

**Typography:**
- Font Stack: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Headings: 3.5rem → 1.5rem (responsive scaling)
- Body Text: 1rem with 1.6 line height for readability
- Mobile-optimized font sizes

**Responsive Breakpoints:**
- Mobile: < 768px (single column, hamburger menu)
- Tablet/Desktop: ≥ 768px (multi-column grids, horizontal nav)

### Pages

#### Home Page (``)
**Hero Section:**
- Full-width gradient background with compelling headline
- Primary call-to-action button
- Animated entrance effects
![Restaurant Page](</images/restaurant.png>)

**Features Showcase:**
- Four-column grid (responsive to single column on mobile)
- Icon-based visual elements
- Scroll-triggered fade-in animations

**Featured Dishes:**
- Card-based layout previewing menu items
- Hover effects with scale transforms
- High-quality SVG imagery
- Price display and descriptions
![Featured Dishes Page](</images/featured.png>)

#### Menu Page (`/menu`)
- Responsive grid layout (1-3 columns based on screen size)
- Professional card design with imagery
- Real-time availability indicators
- Price formatting and inventory display
- Smooth scroll animations on page load
![Menu Page](</images/menu.png>)

#### Bookings Page (`/bookings`)
**Reservation Form:**
- Date/time picker with validation
- Guest count selector (1-10 guests)
- Special requests text area
- Real-time form validation
- Success/error feedback messages
![Bookings Page](</images/bookings.png>)

**My Reservations:**
- Responsive table displaying all bookings
- Cancel functionality with confirmation
- Date/time formatting for readability
- Empty state messaging

#### About Page (`/about`)
- Compelling restaurant story section
- Philosophy and commitment statements
- Core values showcase with visual elements
- Professional layout balancing text and imagery
- Integrated call-to-action
![About Page](</images/about.png>)

#### Admin Page (`/admin`)
Django admin interface for managing menu items and bookings.
![Admin Page](</images/admin-login.png>)
![Admin Page](</images/site-admin.png>)

### Interactive Features

**Navigation:**
- Sticky header that follows scroll
- Active page indicators
- Smooth transitions and hover states
- Mobile hamburger menu with slide animation
- Responsive layout at 768px breakpoint

**Animations:**
- Scroll-based Intersection Observer animations
- Fade-in and translate effects on content
- Staggered delays for card grids
- Hover effects (scale, shadow, color transitions)
- GPU-accelerated transforms for performance

**User Feedback:**
- Form validation with inline messages
- Success/error alerts for actions
- Hover states on all interactive elements
- Loading states for async operations



<a id="migrations-and-users"></a>
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

<a id="testing"></a>
## 🧪 Testing

The application includes comprehensive testing coverage for both backend and frontend functionality.

### Backend Tests

**Running Django Tests:**

**Inside the Docker container:**
```bash
docker compose exec littlelemon python littlelemon/manage.py test
```

**Locally (without Docker):**
```bash
cd littlelemon
python manage.py test
```

**Test Coverage:**
- Model validation and relationships
- API endpoint functionality
- Authentication and authorization
- View rendering and redirects

### Frontend Tests

**Manual Testing Checklist:**
- ✅ Navigation between all pages
- ✅ Mobile menu toggle functionality
- ✅ Form submission and validation
- ✅ Booking creation and cancellation
- ✅ Responsive layouts on multiple devices
- ✅ Animation triggers on scroll
- ✅ Hover states and interactions

**Responsive Testing:**
Test on various viewport sizes:
- Mobile: 375px, 390px (iPhone SE, iPhone 12)
- Tablet: 768px, 1024px (iPad, iPad Pro)
- Desktop: 1440px+

**Browser Compatibility:**
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### API Testing

The API can be tested using tools like Insomnia, Postman, or cURL.

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

![API Testing Example](</images/view-menu-items.png>)

---

<a id="stopping-and-removing-the-containers"></a>
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


---

<a id="contact"></a>
## 📬 Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-mitch--campbell--93b18919b-blue?logo=linkedin)](https://www.linkedin.com/in/mitch-campbell-93b18919b/)
[![GitHub](https://img.shields.io/badge/GitHub-@mitchcamza-181717?logo=github)](https://github.com/mitchcamza)


⭐ If you found this project helpful or interesting, please consider starring the repository!

---

Now, you can access the application at `http://127.0.0.1:8000/`.
