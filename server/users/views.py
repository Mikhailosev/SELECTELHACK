# from django.core.urlresolvers import NoReverseMatch

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework_jwt.settings import settings
from rest_framework_jwt.utils import jwt_payload_handler
from django.contrib.auth.signals import user_logged_in
from .models import User
from rest_framework import status
import jwt
from django.http import HttpResponseForbidden, Http404

@api_view(['POST'])
@permission_classes([AllowAny, ])
def authenticate_user(request):
 
    try:
        email = request.data['email']
        password = request.data['password']
 
        user = User.objects.get(email=email)
        if (not user.check_password(password)):
            return HttpResponseForbidden()

        if user:
            try:
                payload = jwt_payload_handler(user)
                token = jwt.encode(payload, settings.SECRET_KEY)
                user_details = {}
                user_details['name'] = "%s %s" % (
                    user.first_name, user.last_name)
                user_details['token'] = token
                user_logged_in.send(sender=user.__class__,
                                    request=request, user=user)
                return Response(user_details, status=status.HTTP_200_OK)
            except Exception as e:
                raise e
        else:
            res = {
                'error': 'can not authenticate with the given credentials or the account has been deactivated'}
            return Response(res, status=status.HTTP_403_FORBIDDEN)
    except Exception as e:
        raise Http404