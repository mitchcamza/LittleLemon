from django.test import TestCase
from restaurant.models import Menu

class MenuTest(TestCase):
    def test_get_item(self):
        item = Menu.objects.create(title="IceCream", price=2.50, inventory=50)
        TestCase.assertEqual(item, "IceCream : 2.50")
