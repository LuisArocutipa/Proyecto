from django.shortcuts import render
from django.http.response import JsonResponse
from .forms import ProductoForm
from .models import Producto

def agregarProducto(request):
    form = ProductoForm(request.POST or None)
    if form.is_valid():
        form.save()
        form = ProductoForm()

    context = {
        'form': form
    }
    return render(request, 'nuevoProducto.html', context)

def verProducto(request, myID):
    obj = Producto.objects.get(id = myID)
    context = {
        'objeto': obj,
    }
    return render(request, 'vistaProducto.html', context)

def vistaInicio(request):
    queryset = Producto.objects.all()
    context = {
        'objectList': queryset,
    }
    return render(request, 'verProductos.html', context)

def listaProductos(request):
    productos = list(Producto.objects.values())
    data = {'productos': productos}
    return JsonResponse(data)
