from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class sublet(models.Model):
	minimum_Stay = models.CharField(max_length=100, blank=False, unique=False)
	address = models.CharField(max_length=100, blank=False, unique=False)

	housing_Type1 = models.CharField(max_length=100, blank=False, unique=False)
	housing_Type2 = models.CharField(max_length=100, blank=False, unique=False)
	
	zipcode = models.IntegerField(default=0)
	num_Bathrooms = models.IntegerField(default=0)
	num_Beds = models.IntegerField(default=0)
	num_Bedrooms = models.IntegerField(default=0)
	num_Capable_of_Housing = models.IntegerField(default=0)

	furnished = models.BooleanField(default=False)
	private_Bathroom = models.BooleanField(default=False)
	essentials = models.BooleanField(default=False)
	wifi = models.BooleanField(default=False)
	tv = models.BooleanField(default=False)
	heat = models.BooleanField(default=False)
	air_Conditioning = models.BooleanField(default=False)
	desk = models.BooleanField(default=False)
	fireplace = models.BooleanField(default=False)
	iron = models.BooleanField(default=False)
	pets = models.BooleanField(default=False)
	private_Entrance = models.BooleanField(default=False)
	smoke_Detector = models.BooleanField(default=False)
	carbon_Monoxide_Detector = models.BooleanField(default=False)
	first_Aid_Kit = models.BooleanField(default=False)
	safety_Card = models.BooleanField(default=False)
	fire_Extinguisher = models.BooleanField(default=False)
	bedroom_Lock = models.BooleanField(default=False)
	living_Room = models.BooleanField(default=False)
	kitchen = models.BooleanField(default=False)
	laundry_Washer = models.BooleanField(default=False)
	laundry_Dryer = models.BooleanField(default=False)
	parking = models.BooleanField(default=False)
	hot_tub = models.BooleanField(default=False)
	elevator = models.BooleanField(default=False)
	gym = models.BooleanField(default=False)
	image1 = models.ImageField(upload_to = 'media', default = 'pic_folder/None/no-img.jpg')
	image2 = models.ImageField(upload_to = 'media', default = 'pic_folder/None/no-img.jpg')
	image3 = models.ImageField(upload_to = 'media', default = 'pic_folder/None/no-img.jpg')
	image4 = models.ImageField(upload_to = 'media', default = 'pic_folder/None/no-img.jpg')
	image5 = models.ImageField(upload_to = 'media', default = 'pic_folder/None/no-img.jpg')
	image6 = models.ImageField(upload_to = 'media', default = 'pic_folder/None/no-img.jpg')
	image7 = models.ImageField(upload_to = 'media', default = 'pic_folder/None/no-img.jpg')
	image8 = models.ImageField(upload_to = 'media', default = 'pic_folder/None/no-img.jpg')
	image9 = models.ImageField(upload_to = 'media', default = 'pic_folder/None/no-img.jpg')
	image10 = models.ImageField(upload_to = 'media', default = 'pic_folder/None/no-img.jpg')
	image11 = models.ImageField(upload_to = 'media', default = 'pic_folder/None/no-img.jpg')
	image12 = models.ImageField(upload_to = 'media', default = 'pic_folder/None/no-img.jpg')
	

	@classmethod
	def create(cls, minimum_Stay, address, housing_Type1, housing_Type2, zipcode, num_Bathrooms, num_Beds,
		num_Bedrooms,num_Capable_of_Housing, furnished, private_Bathroom, essentials, wifi, tv, heat, air_Conditioning, desk,
		fireplace, iron, pets, private_Entrance, smoke_Detector, carbon_Monoxide_Detector, first_Aid_Kit, 
		safety_Card, fire_Extinguisher, bedroom_Lock, living_Room, kitchen, laundry_Dryer, laundry_Washer, parking,
		elevator, gym, image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12):

		sublet = cls(minimum_Stay=minimum_Stay, address=address, housing_Type1=housing_Type1, housing_Type2=housing_Type2,
		zipcode=zipcode, num_Bathrooms=num_Bathrooms, num_Beds=num_Beds, num_Bedrooms=num_Bedrooms,
		num_Capable_of_Housing=num_Capable_of_Housing, furnished=furnished, private_Bathroom=private_Bathroom, 
		essentials=essentials, wifi=wifi, tv=tv, heat=heat, air_Conditioning=air_Conditioning, desk=desk, fireplace=fireplace, 
		iron=iron, pets=pets, private_Entrance=private_Entrance, smoke_Detector=smoke_Detector, 
		carbon_Monoxide_Detector=carbon_Monoxide_Detector, first_Aid_Kit=first_Aid_Kit, safety_Card=safety_Card, 
		fire_Extinguisher=fire_Extinguisher, bedroom_Lock=bedroom_Lock, living_Room=living_Room, kitchen=kitchen, 
		laundry_Dryer=laundry_Dryer, laundry_Washer=laundry_Washer, parking=parking,elevator=elevator, gym=gym, image1=image1,
		image2=image2,image3=image3,image4=image4,image5=image5,image6=image6,image7=image7,image8=image8,image9=image9,
		image10=image10,image11=image11,image12=image12)

		return sublet