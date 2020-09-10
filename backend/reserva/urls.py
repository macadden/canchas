from rest_framework import routers
from .views import CanchaViewSet, ReservaViewSet, RecuperarTurnosOcupados
from django.urls import include
from django.conf.urls import url

router = routers.SimpleRouter()
router.register(r'canchas', CanchaViewSet)
router.register(r'reservas', ReservaViewSet)

urlpatterns = [
    url(r'^reservas_ocupadas/(?P<id>\d+)/$', RecuperarTurnosOcupados.as_view()),
    url(r'', include((router.urls, 'reserva')))
]