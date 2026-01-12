from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

from .views import index, menu, bookings, delete_booking, about, MenuItemView, SingleMenuItemView, BookingViewSet

urlpatterns = [
    path('', index, name='index'),
    path('menu/', menu, name='menu'),
    path('bookings/', bookings, name='bookings'),
    path('bookings/delete/<int:booking_id>/', delete_booking, name='delete_booking'),
    path('about/', about, name='about'),
    path('menu/<int:pk>', SingleMenuItemView.as_view()),
    path('api-token-auth/', obtain_auth_token),
]
