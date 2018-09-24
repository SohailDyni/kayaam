from django.db import models
from django.contrib.auth.models import User

# Create your models here.


GENDER_CHOICES = (
    ("male", "Male"),
    ("female", "Female")
)

class Profile(models.Model):
    """Model definition for Profile."""
    user                = models.OneToOneField(User, on_delete=models.CASCADE)
    gender              = models.CharField(max_length=10, default='male', choices=GENDER_CHOICES)
    dob                 = models.DateField(null=True, auto_now=False, auto_now_add=False, blank=True)
    address             = models.CharField(max_length=250, blank=True, null=True)
    image               = models.ImageField(upload_to='profile/', null=True, blank=True)
    response_rate       = models.DecimalField(max_digits=10, decimal_places=1, blank=True, null=True) #t    
    response_time       = models.DecimalField(max_digits=10, decimal_places=1, blank=True, null=True) #t    
    description         = models.TextField(blank=True, null=True)
    is_super            = models.BooleanField(default=False)
    phone_verified      = models.BooleanField(default=False)
    id_verified         = models.BooleanField(default=False)
    email_verified      = models.BooleanField(default=False)
    fb_account          = models.BooleanField(default=False)
    google_account      = models.BooleanField(default=False)
    emergency_contact   = models.CharField(max_length=250, blank=True, null=True)
    


    class Meta:
        """Meta definition for Profile."""
        verbose_name = 'Profile'
        verbose_name_plural = 'Profiles'

    def __str__(self):
        """Unicode representation of Profile."""
        return self.user.first_name

# class Verifications(models.Model):
#     """Model definition for Verification."""
    


#     class Meta:
#         """Meta definition for Verification."""

#         verbose_name = 'Verification'
#         verbose_name_plural = 'Verifications'

#     def __str__(self):
#         """Unicode representation of Verification."""
#         pass
