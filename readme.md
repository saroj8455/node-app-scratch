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

# 11XX : Http Errors

    '1101': 'Unauthorized'
    '1102': 'Not authorized to access'
    '1103': 'Unprocessable Entity'
    '1104': 'Authentication Failed'
    '1105': 'Not Found'

# 12XX : Auth Erorrs

    '1201': 'Your session is expired, please login again' # Token expired
    '1202': 'Your sessions is invalid' # JWT verification error
    '1203': 'Your sessions is invalid' # Error encountered while decoding JWT token
    '1204': 'Your sessions token is invalid' # Invalid token
    '1205': 'You are Unauthorized, Please login' # You are Unauthorized, Please login
    '1206': 'Authentication Error, User Not found' # Authentication Error, User Not found
