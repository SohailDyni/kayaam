import graphene
import rooms.schema


class Query(rooms.schema.Query, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query)