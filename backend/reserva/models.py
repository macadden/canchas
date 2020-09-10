from django.db import models
from datetime import datetime

class Cancha(models.Model):
    FUTBOL5 = 'f5'
    FUTBOL7 = 'f7'
    FUTBOL11 = 'f11'
    TIPO_CANCHAS = [
        (FUTBOL5, 'Futbol 5'),
        (FUTBOL7, 'Futbol 7'),
        (FUTBOL11, 'Futbol 11')
    ]

    nombre = models.CharField(max_length=50)
    codigo = models.CharField(max_length=8)
    tipo = models.CharField(max_length=3, choices=TIPO_CANCHAS)
    iluminacion = models.BooleanField(default=False)
    vestuario = models.BooleanField(default=False)
    cesped_sintetico = models.BooleanField(default=False)

    def __str__(self):
        return self.nombre

class Reserva(models.Model):
    cancha = models.ForeignKey(Cancha, on_delete=models.CASCADE)
    cliente = models.CharField(max_length = 50)
    empleado = models.CharField(max_length = 50)    
    hora = models.TimeField()
    fecha = models.DateField()
    created_date = models.DateTimeField(auto_now_add=True) #una vez
    modified_date = models.DateTimeField(auto_now=True)

    @classmethod
    def esta_reservado(cls, cancha, fecha, hora):
        reservado = cls.objects.filter(
            cancha=cancha,
            fecha=fecha, 
            hora=hora
        ).exists()
        return reservado