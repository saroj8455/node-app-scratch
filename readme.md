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
