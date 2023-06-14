from django.urls import reverse
from rest_framework import status
from django.test import TestCase
from rest_framework.test import APITestCase
from restaurant.models import Menu
from restaurant.serializers import MenuSerializer

class MenuViewTest(APITestCase):
    def setup(self):
        # add test instances of the Menu model
        Menu.objects.create(title='Pizza', price=10.99)
        Menu.objects.create(title='Burger', price=8.99)

    def test_getall(self):
        # retrieve all the Menu objects added for the test purpose
        url = 'http://localhost:8000/restaurant/menu/'
        response = self.client.get(url)
        menus = Menu.objects.all()
        serializer = MenuSerializer(menus, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)       