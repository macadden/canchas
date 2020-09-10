from django.shortcuts import render
from .serializers import CanchaSerializer, ReservaSerializer
from .models import  Cancha, Reserva
from rest_framework import viewsets, generics

class CanchaViewSet(viewsets.ModelViewSet):
    queryset = Cancha.objects.all()
    serializer_class = CanchaSerializer

class ReservaViewSet(viewsets.ModelViewSet):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer

class RecuperarTurnosOcupados(generics.ListAPIView):
    serializer_class = ReservaSerializer 
    def get_queryset(self):
        cancha_id = self.kwargs['id']
        reservas = Reserva.objects.filter(cancha=cancha_id)
        return reservas