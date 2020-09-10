from rest_framework import serializers
from .models import Cancha, Reserva

class CanchaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cancha
        fields = '__all__'

class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reserva
        fields = '__all__'
    
    def validate(self, data):
        cancha = data['cancha']
        fecha = data['fecha']
        hora = data['hora']
        if Reserva.esta_reservado(cancha=cancha, fecha=fecha, hora=hora):
            raise serializers.ValidationError("El turno está ocupado")
        return data