from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateAPIView, DestroyAPIView
from rest_framework.decorators import api_view
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

from .models import Menu, Booking
from .serializers import MenuSerializer, BookingSerializer

def index(request):
    return render(request, 'index.html', {})


def menu(request):
    menu_items = Menu.objects.all()
    return render(request, 'menu.html', {'menu_items': menu_items})


def bookings(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        no_of_guests = request.POST.get('no_of_guests')
        booking_date = request.POST.get('bookingDate')
        
        if name and no_of_guests and booking_date:
            booking = Booking.objects.create(
                name=name,
                no_of_guests=no_of_guests,
                bookingDate=booking_date
            )
            messages.success(request, f'Reservation confirmed for {name} on {booking_date}!')
            return redirect('bookings')
        else:
            messages.error(request, 'Please fill in all required fields.')
    
    bookings = Booking.objects.all().order_by('-bookingDate')
    return render(request, 'bookings.html', {'bookings': bookings})


def delete_booking(request, booking_id):
    if request.method == 'POST':
        booking = get_object_or_404(Booking, id=booking_id)
        booking.delete()
        messages.success(request, 'Reservation cancelled successfully.')
    return redirect('bookings')


def about(request):
    return render(request, 'about.html', {})


class MenuItemView(ListCreateAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer 


class SingleMenuItemView(RetrieveUpdateAPIView, DestroyAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer


class BookingViewSet(ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]