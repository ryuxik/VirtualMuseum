from flask import Flask
from flask_restful import Resource, Api, abort, reqparse

app = Flask(__name__)
api = Api(app)

COLLECTIONS = {
    'collection1': {
        'name': 'Water Piglet',
        'id': 'collection1',
        'exhibits': [
            {'id': 1, 'name': 'art one'},
            {'id': 2, 'name': 'art two'},
            {'id': 3, 'name': 'art three'}
        ]
    },
    'collection2':                 {
        'name': 'Undersea Attack',
        'id': 'collection2',
        'exhibits': [
            {'id': 1, 'name': 'art one'},
            {'id': 2, 'name': 'art two'},
            {'id': 3, 'name': 'art three'}
        ]
    },
}


def abort_if_collection_not_found(collection_id):
    if collection_id not in COLLECTIONS:
        abort(404, message="Collection {} was not found".format(collection_id))


parser = reqparse.RequestParser()
parser.add_argument('name')


class Collection(Resource):
    def get(self, collection_id):
        abort_if_collection_not_found(collection_id)
        return COLLECTIONS[collection_id]

    def put(self, collection_id):
        args = parser.parse_args()
        name = {'name': args['name']}
        COLLECTIONS[collection_id] = name
        return name, 201


class CollectionList(Resource):
    def get(self):
        return [
            {
                'id':  collection_id,
                'name': COLLECTIONS[collection_id]['name']
            }
            for collection_id in COLLECTIONS]


api.add_resource(Collection, '/collection/<collection_id>')
api.add_resource(CollectionList, '/collections')

if __name__ == '__main__':
    app.run(debug=True)
