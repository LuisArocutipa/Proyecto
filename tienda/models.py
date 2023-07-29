from django.db import models
from django.contrib.auth.models import User

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    oferta = models.BooleanField(default=False)
    imagen = models.ImageField(upload_to='imagenes/', blank=True, null=True)
    
    vendido = models.ManyToManyField(User, blank=True)

    def __str__(self):
        return self.nombre
