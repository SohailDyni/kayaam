from django.contrib import admin
from django.db import models
from .models import Room, Review, Booking
from django.contrib.admin.widgets import AdminDateWidget
from django.contrib.postgres.forms.ranges import DateTimeRangeField, RangeWidget
from django import forms
# Register your models here.
# class ReviewInline(admin.TabularInline):
#     model = Review

# class RoomAdmin(admin.ModelAdmin):
#     inlines = [
#         ReviewInline,
#     ]
class BookingAdminForm(forms.ModelForm):
    duration = DateTimeRangeField(widget=RangeWidget(AdminDateWidget()))

class BookingAdmin(admin.ModelAdmin):
    # pass
    form = BookingAdminForm




admin.site.register(Room)
admin.site.register(Review)
admin.site.register(Booking, BookingAdmin)

# admin.site.register(Room, RoomAdmin)
