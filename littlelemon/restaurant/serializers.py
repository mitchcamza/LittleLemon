from rest_framework.serializers import ModelSerializer
from .models import Menu, Booking

class MenuSerializer(ModelSerializer):
    class Meta:
        model = Menu
        fields = ['id', 'title', 'price', 'inventory']


class BookingSerializer(ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'