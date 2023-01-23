from django.db import models
from django.contrib.gis.db import models

# Create your models here.
class university(models.Model):
    id = models.IntegerField(auto_created=True, primary_key=True)
    name = models.CharField(max_length=250, null=False)
    address = models.CharField(max_length=1024)
    coordinates = models.PointField()


class applications(models.Model):
    id = models.IntegerField(primary_key=True,auto_created=True)
    gender = models.CharField(max_length=10, name='gender')
    apply_date = models.DateField()
    entry_date = models.DateField()
    out_date = models.DateField()
    status = models.CharField(max_length=25)
    uni_id = models.ForeignKey(university, on_delete=models.CASCADE)

