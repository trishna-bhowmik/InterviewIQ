# API Documentation

Authentication

POST /auth/register

POST /auth/login

POST /auth/refresh

POST /auth/logout

GET /auth/me

Resume

POST /resume/upload

GET /resume/my

DELETE /resume/:id

Interview

POST /interviews

GET /interviews

GET /interviews/:id

DELETE /interviews/:id

Profile

GET /profile

Responses

{
success,
data
}

Errors

400

401

404

500