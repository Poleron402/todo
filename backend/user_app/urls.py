from django.urls import path
from user_app.views import Register, Login, Logout, Info

urlpatterns = [
    path('register/', Register.as_view()),
    path('login/', Login.as_view()),
    path('logout/', Logout.as_view()),
    path('info/', Info.as_view())
]
