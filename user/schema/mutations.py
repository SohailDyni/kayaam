from django.contrib.auth import get_user_model
from graphene import AbstractType, relay, Field, String, ObjectType, List

# from users.jwt_util import get_jwt_token
from user.schema.definitions import Viewer, UserType
# from graphql_jwt.exceptions import JSONWebTokenError
# from django.utils.translation import ugettext as _



class Error(ObjectType):
    """Form Errors
        https://medium.com/@tarkus/validation-and-user-errors-in-graphql-mutations-39ca79cd00bf#.ts99uxfnr
    """
    key = String()
    message = String(required=True)



class SignupUserMutation(relay.ClientIDMutation):
    class Input:
        email = String(required=True)
        password = String(required=True)

    user = Field(UserType)
    errors = List(String)

    @classmethod
    def mutate_and_get_payload(cls, root, info, **input):
        email = input.get('email')
        password = input.get('password')
        user = get_user_model().objects.filter(email=email)
        errors = []
        if not user:
            user = get_user_model().objects.create_user(email=email, password=password, username=email)
            # jwt_token = get_jwt_token(user)
            # viewer = Viewer(
            #     user=user,
            #     tokens=token
            # )
            return SignupUserMutation(user=user, errors=None)
        if user:
            # JSONWebTokenError(_('A user with this email already exists.'))
            error = 'A user with this email already exists.'
            errors.append(error)
            return SignupUserMutation(user=None, errors=errors)


class UserMutations(AbstractType):
    # login = LoginMutation.Field()
    signup = SignupUserMutation.Field()
