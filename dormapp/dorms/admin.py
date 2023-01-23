from django.contrib import admin
from .models import university, applications
# Register your models here.

@admin.register(university)
class university_admin(admin.ModelAdmin):
    list_display = ('id', 'name', 'address')

@admin.register(applications)
class applications_admin(admin.ModelAdmin):
    list_display = ('id', 'gender', 'status','apply_date')

