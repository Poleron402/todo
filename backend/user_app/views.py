from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import User
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_404_NOT_FOUND
# Create your views here.
class AuthenticationClasses(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
class Register(APIView):
    def post(self, request):
        user = User.objects.create_user(**request.data)
        token = Token.objects.create(user = user)
        return Response({
            "email": user.email,
            "user_name": user.username,
            "token": token.key
        }, status=HTTP_201_CREATED)
class Login(APIView):
    def post(self, request):
        username = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(email = username, password = password)
        if user:
            token, created = Token.objects.get_or_create(user = user)
            return Response({"token": token.key, "email": user.get_username(), "username": user.username}, status = HTTP_200_OK)
        return Response("Something went wrong: No such user", HTTP_404_NOT_FOUND)

class Logout(AuthenticationClasses):
    def post(self, request):
        request.user.auth_token.delete()
        return Response(status=HTTP_200_OK)
class Info(AuthenticationClasses):
    def get(self, request):
        user = request.user
        return Response({
            "email": user.email,
            "username": user.username
        }, status=HTTP_200_OK)

         