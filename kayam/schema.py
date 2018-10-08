import graphene
import rooms.schema
import graphql_jwt

from user.schema import UserQueries, UserMutations


class Query(rooms.schema.Query, UserQueries, graphene.ObjectType):
    pass

class Mutation(rooms.schema.Mutation, UserMutations, graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)