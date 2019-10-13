from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics
from .models import Product
from .serializes import ProductSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

class ProductsViewSet(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        queryset = Product.objects.all()
        serializer = ProductSerializer(queryset, many=True)
        return Response({"Products": serializer.data})
