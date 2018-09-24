from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField, DateTimeRangeField
from django import forms

# Create your models here.

ROOM_TYPE_CHOICES = (
    ("PR", "Private Room"),
    ("EH", "Entire House")
)

Amenity_TYPE_CHOICES = (
    ("amenity", "Amenity"),
    ("space", "Space")
)

STATUS = (
    ('draft', 'Draft'),
    ('publish', 'Publish')
)

REVIEW_TYPE_CHOICES = (
    ('host', 'Host'),
    ('guest', 'Guest')
)

AMENTIES_CHOICES = (
    ('TV', 'TV'),
    ('WiFi', 'WiFi'),
    ('Iron', 'Iron'),
    ('Essentials', 'Essentials'),
    ('Air conditioning', 'Air conditioning'),
    ('Kitchen', 'Kitchen'),
)
BOOKING_STATUS_CHOICES = (
    ('created', 'Created'),
    ('paid', 'Paid'),
    ('unpaid', 'Unpaid'),
    ('refunded', 'Refunded'),
)

class ChoiceArrayField(ArrayField):

    def formfield(self, **kwargs):
        defaults = {
            'form_class': forms.MultipleChoiceField,
            'choices': self.base_field.choices,
            'widget': forms.CheckboxSelectMultiple,
        }
        defaults.update(kwargs)
        # Skip our parent's formfield implementation completely as we don't care for it.
        # pylint:disable=bad-super-call
        return super(ArrayField, self).formfield(**defaults)




class Room(models.Model):
    name                = models.CharField(max_length=250, blank=True, null=True)
    host                = models.ForeignKey(User, related_name='rooms', on_delete=models.CASCADE) 
    num_guests          = models.PositiveSmallIntegerField(default=1, blank=True, null=True)
    bed_rooms           = models.PositiveSmallIntegerField(default=1, blank=True, null=True)
    beds                = models.PositiveSmallIntegerField(default=1, blank=True, null=True)
    bath_rooms          = models.PositiveSmallIntegerField(default=0, blank=True, null=True)
    is_bath_private     = models.BooleanField(default=True)
    lat                 = models.CharField(max_length=250, blank=True, null=True)
    lan                 = models.CharField(max_length=250, blank=True, null=True)
    amenities           = ChoiceArrayField(models.CharField(max_length=250, choices=AMENTIES_CHOICES, blank=True), blank=True, null=True)
    description         = models.TextField(blank=True, null=True)
    about_place         = models.TextField(blank=True, null=True)
    guest_access        = models.TextField(blank=True, null=True)
    interaction         = models.TextField(blank=True, null=True)
    other_notes         = models.TextField(blank=True, null=True)
    get_around          = models.TextField(blank=True, null=True)
    for_children        = models.BooleanField(default=True)
    for_infaints        = models.BooleanField(default=True)
    for_pets            = models.BooleanField(default=True)
    smooking            = models.BooleanField(default=True)
    parties             = models.BooleanField(default=True)
    checkin_from        = models.CharField(max_length=5, default='FLEX', blank=True, null=True)
    checkin_to          = models.CharField(max_length=5, default='FLEX', blank=True, null=True)
    min_stay            = models.PositiveSmallIntegerField(default=1)
    max_stay            = models.PositiveSmallIntegerField(default=1)
    price               = models.DecimalField(max_digits=100, decimal_places=2, blank=True, null=True) #t
    first_offer         = models.BooleanField(default=True)
    weekly_discount     = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    monthly_discount    = models.DecimalField( max_digits=5, decimal_places=2, blank=True, null=True)
    room_type           = models.CharField(choices=ROOM_TYPE_CHOICES, max_length=2, default='PR')
    status              = models.CharField(max_length=10, default='draft', choices=STATUS, null=False)
    created_at          = models.DateTimeField(auto_now_add=True)
    updated_at          = models.DateTimeField(auto_now=True)
    instant             = models.BooleanField(default=True)

    def __str__(self):
        return self.name



# class Amenities(models.Model):
#     name                = models.CharField(max_length=25, blank=True, null=False)
#     description         = models.TextField()
#     amenity_type        = models.CharField(max_length=10, default='amenity', choices=Amenity_TYPE_CHOICES)


#     def __str__(self):
#         return self.name



class Review(models.Model):
    room                = models.ForeignKey(Room, on_delete=models.CASCADE, related_name='reviews')
    reviewer            = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews')
    comment             = models.TextField()
    create_at           = models.DateTimeField(auto_now_add=True)
    updated_at          = models.DateTimeField(auto_now=True)
    review_type         = models.CharField(max_length=6, choices=REVIEW_TYPE_CHOICES)
    accuracy            = models.DecimalField(max_digits=10, decimal_places=1, blank=True, null=True, default=0.0)
    location            = models.DecimalField(max_digits=10, decimal_places=1, blank=True, null=True, default=0.0)
    cleanliness         = models.DecimalField(max_digits=10, decimal_places=1, blank=True, null=True, default=0.0)
    communication       = models.DecimalField(max_digits=10, decimal_places=1, blank=True, null=True, default=0.0)
    rating              = models.DecimalField(max_digits=10, decimal_places=1, blank=True, null=True, default=0.0) #t



    def __str__(self):
        return "{} on {}".format(self.reviewer.first_name, self.room.name)



class Image(models.Model):
    room                = models.ForeignKey(Room, on_delete=models.CASCADE, related_name='images')
    image               = models.ImageField(upload_to='rooms/', blank=True, null=True)



class Booking(models.Model):

    room                = models.ForeignKey(Room, on_delete=models.CASCADE, related_name='bookings')
    guest               = models.ForeignKey(User, related_name='bookings', on_delete=models.CASCADE)
    duration            = DateTimeRangeField(db_index=True) 
    price               = models.DecimalField(max_digits=100, decimal_places=2, blank=True, null=True) #t
    total               = models.DecimalField(max_digits=100, decimal_places=2, blank=True, null=True) #t
    status              = models.CharField(max_length=120, default='created', choices=BOOKING_STATUS_CHOICES)
    active              = models.BooleanField(default=True)
    create_at           = models.DateTimeField(auto_now_add=True)
    updated_at          = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{} booking for {}".format(self.guest.first_name, self.room.name)
