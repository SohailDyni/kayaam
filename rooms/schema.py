# import graphene
from . import models

from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from graphene import relay, ObjectType, Field, String, Int, ID, Boolean, List, AbstractType, Float

from django.contrib.auth.models import User


room_keys = [
'name',           
'host',           
'num_guests',      
'bed_rooms',       
'beds',            
'bath_rooms',      
'is_bath_private', 
'lat',             
'lan',             
'amenities',       
'description',     
'about_place',     
'guest_access',    
'interaction',     
'other_notes',     
'get_around',      
'for_children',    
'for_infaints',    
'for_pets',        
'smooking',        
'parties',         
'checkin_from',    
'checkin_to',      
'min_stay',        
'max_stay',        
'price',           
'first_offer',     
'weekly_discount', 
'monthly_discount',
'room_type',       
'instant'         
]

class RoomType(DjangoObjectType):
    class Meta: 
        model = models.Room
        filter_fields = {
            'name': ['exact', 'icontains', 'istartswith'],
        }
        interfaces   = (relay.Node, )



class ReviewType(DjangoObjectType):
    class Meta:
        model = models.Review
        interfaces   = (relay.Node, )




class CreateRoom(relay.ClientIDMutation):
    
    class Input: 
        name                = String(required=False)
        num_guests          = Int(required=False)
        bed_rooms           = Int(required=False)
        beds                = Int(required=False)
        bath_rooms          = Int(required=False)
        is_bath_private     = Boolean(required=False)
        lat                 = String(required=False)
        lan                 = String(required=False)
        amenities           = List(String, required=False)
        description         = String(required=False)
        about_place         = String(required=False)
        guest_access        = String(required=False)
        interaction         = String(required=False)
        other_notes         = String(required=False)
        get_around          = String(required=False)
        for_children        = Boolean(required=False)
        for_infaints        = Boolean(required=False)
        for_pets            = Boolean(required=False)
        smooking            = Boolean(required=False)
        parties             = Boolean(required=False)
        checkin_from        = String(required=False)
        checkin_to          = String(required=False)
        min_stay            = Int(required=False)
        max_stay            = Int(required=False)
        price               = Float(required=False)
        first_offer         = Boolean(required=False)
        weekly_discount     = Float(required=False)
        monthly_discount    = Float(required=False)
        room_type           = String(required=False)
        instant             = Boolean(required=False)
    
    room = Field(RoomType)
    errors = String()

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
       
        print(info)
        print('abve')
        room = models.Room()
        for k in room_keys:
            if k in input.keys():
                setattr(room, k, input.get(k))

        room.host = User.objects.get(id=2)
        room.save()
        return CreateRoom(room=room, errors=None) 
    

    # @staticmethod
    # def mutate(root, args, context, info):
    #     room = models.Room()
    #     print(root)
    #     print(args)
    #     print(context)
    #     print(info)

    #     for k in room_keys:
    #         try:
    #             room[k] = context[k]
    #         except KeyError as e:
    #             print(e)

    #     room.save()
    #     return CreateRoom(room=room, errors=None) 




class Query(AbstractType):
    room    = relay.Node.Field(RoomType)
    all_rooms = DjangoFilterConnectionField(RoomType)


    def resolve_all_rooms(self, args):
        return models.Room.objects.all()


class Mutation(AbstractType):
    create_room     = CreateRoom.Field()


