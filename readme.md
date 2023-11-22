## A Node Js app from scratch design and development

## Dependency for app

- Now using node v18.18.2
- express: 4.16.3

## Install dependency

`npm i express cors dotenv mongoose bcryptjs jsonwebtoken --save` <br>
`npm i nodemon -D` <br>
`npm install http-status-codes --save` <br>
`npm install --save express-async-handler` <br>

## Generate random token

`node`<br>
`require("crypto").randomBytes(64).toString("hex")` <br>

## Rest response codes

`200 OK` <br>
`201 Created` <br>
`204 NO CONTENT`<br>
`400 Bad Request` <br>
`401 Unauthorized` <br>
`403 FORBIDDEN`<br>
`404 Not Found` <br>
`405 METHOD NOT ALLOWED`<br>
`406 NOT ACCEPTABLE`<br>
`409 CONFLICT`<br>
`415 UNSUPPORTED MEDIA TYPE`<br>
`500 Internal Server Error` <br>

## Create .env file

`ACCESS_SECRET=secret_key` <br>
`NODE_ENV=development || production` <br>
`MONGO=mongoose_connection_string` <br>
`PORT=port_no` <br>

## 11XX : Http Errors

    '1101': 'Unauthorized'
    '1102': 'Not authorized to access'
    '1103': 'Unprocessable Entity'
    '1104': 'Authentication Failed'
    '1105': 'Not Found'

## 12XX : Auth Erorrs

    '1201': 'Your session is expired, please login again' # Token expired
    '1202': 'Your sessions is invalid' # JWT verification error
    '1203': 'Your sessions is invalid' # Error encountered while decoding JWT token
    '1204': 'Your sessions token is invalid' # Invalid token
    '1205': 'You are Unauthorized, Please login' # You are Unauthorized, Please login
    '1206': 'Authentication Error, User Not found' # Authentication Error, User Not found

## Syntax highlighting

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

## Rest-Api response format

```javascript
    HTTP/1.1  201
    Location: /v1/items/12
    Content-Type: application/json

    {
      "message": "The item was created successfully"
    }
```

```javascript
    // 1- GET - HTTP Response Code: 404
    HTTP/1.1  404
    Content-Type: application/json

    {
      "message": "The item does not exist"
    }
    // 3- POST - HTTP Response Code: 400
    HTTP/1.1  400
    Content-Type: application/json

    {
        "message": "Validation errors in your request", /* skip or optional error message */
        "errors": [
            {
                "message": "Oops! The value is invalid",
                "code": 34,
                "field": "email"
            },
            {
                "message": "Oops! The format is not correct",
                "code": 35,
                "field": "phoneNumber"
            }
        ]
    }
    // 5- VERB Unauthorized - HTTP Response Code: 401
    HTTP/1.1  401
    Content-Type: application/json

    {
      "message": "Authentication credentials were missing or incorrect"
    }
    // 6- VERB Forbidden - HTTP Response Code: 403
    HTTP/1.1  403
    Content-Type: application/json

    {
      "message": "The request is understood, but it has been refused or access is not allowed"
    }
    // 9- VERB Internal Server Error - HTTP Response Code: 500
    HTTP/1.1  500
    Content-Type: application/json

    {
      "message": "Something is broken"
    }
```
