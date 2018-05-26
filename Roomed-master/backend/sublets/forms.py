from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

HOUSING_TYPES1 = (
	('House', 'House'),
	('Apartment', 'Apartment'),
	('Secondary Room', 'Secondary Room')
)

HOUSING_TYPES2 = (
	('Private Room', 'Private Room'),
	('Shared Room', 'Shared Room'),
	('Entire Property', 'Entire Property')
)

class SignUpForm(UserCreationForm):
    first_name = forms.CharField(max_length=30, required=False, help_text='Optional.')
    last_name = forms.CharField(max_length=30, required=False, help_text='Optional.')
    email = forms.EmailField(max_length=254, help_text='Required. Inform a valid email address.')

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password1', 'password2', )

class SubletForm(forms.Form):

	num_Beds = forms.IntegerField(label="Number of Beds")
	num_Capable_of_Housing = forms.IntegerField(label="Number of people capable of housing")
	num_Bathrooms = forms.IntegerField(label="Number of Bathrooms")
	num_Bedrooms = forms.IntegerField(label="Number of Bedrooms")

	minimum_Stay = forms.CharField(max_length=100, required=True)
	address = forms.CharField(max_length=200, required=True)
	zipcode = forms.CharField(max_length=6, required=True)

	housing_Type1 = forms.ChoiceField(label='Housing Type',choices=HOUSING_TYPES1)
	housing_Type2 = forms.ChoiceField(label='Housing Type', choices=HOUSING_TYPES2)

	furnished = forms.BooleanField(label="Furnished", required=False)
	private_Bathroom = forms.BooleanField(label="Private Bathrooms", required=False)
	essentials = forms.BooleanField(label="Essentials", required=False)
	wifi = forms.BooleanField(label="Wifi", required=False)
	tv = forms.BooleanField(label="TV", required=False)
	heat = forms.BooleanField(label="Heat", required=False)
	air_Conditioning = forms.BooleanField(label="Air Conditioning", required=False)
	desk = forms.BooleanField(label="Desk", required=False)
	fireplace = forms.BooleanField(label="Fireplace", required=False)
	iron = forms.BooleanField(label="Iron", required=False)
	pets = forms.BooleanField(label="Pets", required=False)
	private_Entrance = forms.BooleanField(label="Private Entrance", required=False)
	smoke_Detector = forms.BooleanField(label="Smoke Detector", required=False)
	carbon_Monoxide_Detector = forms.BooleanField(label="Carbon Monoxide Detector", required=False)
	first_Aid_Kit = forms.BooleanField(label="First Aide Kit", required=False)
	safety_Card = forms.BooleanField(label="Safety Card", required=False)
	fire_Extinguisher = forms.BooleanField(label="Fire Extinguisher", required=False)
	
	bedroom_Lock = forms.BooleanField(label="Bedroom Lock", required=False)
	living_Room = forms.BooleanField(label="Living Room", required=False)
	kitchen = forms.BooleanField(label="Kitchen", required=False)
	laundry_Washer = forms.BooleanField(label="Laundry Washer", required=False)
	laundry_Dryer = forms.BooleanField(label="Laundry Dryer", required=False)
	parking = forms.BooleanField(label="Parking", required=False)
	hot_tub = forms.BooleanField(label="Hot Tub", required=False)
	elevator = forms.BooleanField(label="Elevator", required=False)
	gym = forms.BooleanField(label="Gym", required=False)

	#pictures 

	image1 = forms.ImageField(label="image1", required=False)
	image2 = forms.ImageField(label="image1", required=False)
	image3 = forms.ImageField(label="image1", required=False)
	image4 = forms.ImageField(label="image1", required=False)
	image5 = forms.ImageField(label="image1", required=False)
	image6 = forms.ImageField(label="image1", required=False)
	image7 = forms.ImageField(label="image1", required=False)
	image8 = forms.ImageField(label="image1", required=False)
	image9 = forms.ImageField(label="image1", required=False)
	image10 = forms.ImageField(label="image1", required=False)
	image11 = forms.ImageField(label="image1", required=False)
	image12 = forms.ImageField(label="image1", required=False)
	
