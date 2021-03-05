from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)


class Collections(Resource):
    def get(self):
        return {
            'collections':
            [
                {
                    'name': 'Water Piglet',
                    'id': 1,
                    'exhibits': [
                        {'id': 1, 'name': 'art one'},
                        {'id': 2, 'name': 'art two'},
                        {'id': 3, 'name': 'art three'}
                    ]
                },
                {
                    'name': 'Undersea Attack',
                    'id': 2,
                    'exhibits': [
                        {'id': 1, 'name': 'art one'},
                        {'id': 2, 'name': 'art two'},
                        {'id': 3, 'name': 'art three'}
                    ]
                },
            ],
        }


api.add_resource(Collections, '/collections')

if __name__ == '__main__':
    app.run(debug=True)
