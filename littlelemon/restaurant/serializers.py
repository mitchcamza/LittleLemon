from rest_framework.serializers import ModelSerializer
from .models import Menu

class MenuSerializer(ModelSerializer):
    class Meta:
        model = Menu
        fields = ['id', 'title', 'price', 'inventory']