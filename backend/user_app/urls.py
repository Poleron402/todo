from django.urls import path
from user_app.views import Register, Login, Logout, Info

urlpatterns = [
    path('api/v1/register/', Register.as_view()),
    path('api/v1/login/', Login.as_view()),
    path('api/v1/logout/', Logout.as_view()),
    path('api/v1/info/', Info.as_view())
]
