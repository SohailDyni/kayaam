from graphene import AbstractType, Field
from graphql_jwt.decorators import login_required
from .definitions import Viewer, UserType


class UserQueries(AbstractType):
    viewer = Field(UserType)

    @login_required
    def resolve_viewer(self, info, **kwargs):
        return info.context.user
