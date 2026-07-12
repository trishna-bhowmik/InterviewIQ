# Authentication

JWT Authentication

Access Token

15 minutes

Refresh Token

7 days

Flow

Login

↓

Access Token

↓

Refresh Token Cookie

↓

401

↓

Refresh Endpoint

↓

New Access Token

↓

Retry Request

↓

Continue Session

Security

Password Hashing

HttpOnly Cookies

Protected Routes

Authorization Middleware