from django.shortcuts import render
import json

from django.core.serializers import serialize
from django.db.models import Count
from .models import university,applications

# Create your views here.
def index(request):
    uni = serialize("geojson", university.objects.all(), geometry_field='coordinates', fields=('name','address') )
    applied = serialize('json',applications.objects.annotate(count=Count('uni_id',distinct=True)))

    return render(request, 'index.html', {'uni': uni, 'app':applied})
