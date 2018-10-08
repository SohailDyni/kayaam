from django.contrib.auth import get_user_model
from graphene import Node, Field, GlobalID, String
from graphene_django.types import DjangoObjectType, ObjectType
# from users.jwt_schema import TokensInterface

class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()
        only_fields = (
            'id',
            'last_login',
            'is_superuser',
            'username',
            'first_name',
            'last_name',
            'email',
            'is_staff',
            'is_active',
            'date_joined',
        )
        interfaces = (Node, )


class Viewer(ObjectType):
    id = GlobalID()
    user = Field(UserType)
    # token = String()
