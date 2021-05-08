from rest_framework import routers
from django.urls import path
from django.conf.urls import include
from .views import PDFViewSet, CreateUserView, CompanyViewSet, QuestionViewSet, AskViewSet, test_payment, save_stripe_info
from django.conf.urls import url

router = routers.DefaultRouter()
router.register('pdf', PDFViewSet)
router.register('company', CompanyViewSet)
router.register('question', QuestionViewSet)
router.register('ask', AskViewSet)

urlpatterns = [
    path('create/', CreateUserView.as_view(), name='create'),
    path('', include(router.urls)),
    url(r'^test-payment/$', test_payment),
    url(r'^save-stripe-info/$', save_stripe_info),
]