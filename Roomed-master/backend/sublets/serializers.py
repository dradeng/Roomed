# todos/serializers.py
from rest_framework import serializers
from . import models


class subletSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'num_Beds',
			'num_Capable_of_Housing',
			'num_Bathrooms',
			'num_Bedrooms',

			'minimum_Stay',
			'address',
			'zipcode',

			'housing_Type1',
			'housing_Type2',

			'furnished',
			'private_Bathroom',
			'essentials',
			'wifi',
			'tv',
			'heat',
			'air_Conditioning',
			'desk',
			'fireplace',
			'iron',
			'pets',
			'private_Entrance',
			'smoke_Detector',
			'carbon_Monoxide_Detector',
			'first_Aid_Kit',
			'safety_Card',
			'fire_Extinguisher',
			
			'bedroom_Lock',
			'living_Room',
			'kitchen',
			'laundry_Washer',
			'laundry_Dryer',
			'parking',
			'hot_tub',
			'elevator',
			'gym',

			#pictures 

			'image1',
			'image2',
			'image3',
			'image4',
			'image5',
			'image6',
			'image7',
			'image8',
			'image9',
			'image10',
			'image11',
			'image12',
        )
        model = models.sublet