import graphene
from . import models

from graphene_django.types import DjangoObjectType

class RoomType(DjangoObjectType):
    class Meta: 
        model = models.Room

class ReviewType(DjangoObjectType):
    class Meta:
        model = models.Review



class Query(graphene.AbstractType):
    all_rooms = graphene.List(RoomType)

    def resolve_all_rooms(self, args):
        return models.Room.objects.all()

