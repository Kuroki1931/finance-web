from rest_framework import routers
from django.urls import path
from django.conf.urls import include
from .views import PDFViewSet, CreateUserView, CompanyViewSet

router = routers.DefaultRouter()
router.register('pdf', PDFViewSet)
router.register('company', CompanyViewSet)

urlpatterns = [
    path('create/', CreateUserView.as_view(), name='create'),
    path('', include(router.urls)),
]