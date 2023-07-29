from django.urls import path
from . import views

urlpatterns = [
    path('', views.vistaInicio, name='Inicio'),
    path('agregar/', views.agregarProducto, name='agregarProducto'),
    path('ver/<int:myID>/', views.verProducto, name='verProducto'),
    path('listaProductos/', views.listaProductos, name='listaProductos'),
]