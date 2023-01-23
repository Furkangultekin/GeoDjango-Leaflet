from django.shortcuts import render
import json

from django.core.serializers import serialize
from django.db.models import Count
from .models import university,applications

# Create your views here.
def index(request):
    uni = serialize("geojson", university.objects.all(), geometry_field='coordinates', fields=('name','address') )
    applied =applications.objects.all().values('uni_id__coordinates').annotate(count=Count('uni_id'))
    mydict = []
    results = list(applied)
    for res in results:
        rec = {}
        rec["type"] = "Feature"
        rec["long"] = json.loads(str(res["uni_id__coordinates"][0]))            
        rec["lat"] = json.loads(str(res["uni_id__coordinates"][1]))
        rec["count"] = res["count"]
        mydict.append(rec)
    data_geojson = json.dumps(mydict)
    return render(request, 'index.html', {'uni': uni, 'app':data_geojson})
