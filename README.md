# WHATSAPP CLONE APP

### Main URL: /api/v1/

### Methods

- []: # Method: GET
- []: # Method: POST
- []: # Method: PUT
- []: # Method: DELETE

### Database

- []: # Database: PostgreSQL
- []: # Table: users
- []: # Table: message
- []: # Table: conversations
- []: # Table: participants

### Routes

router.route('/signin').post(authServices.addUser);
router.route('/login').post(authServices.loginUser);

### authRouter

- []: # Route: /api/v1/auth//login
  post: # Method: POST
- []: # Route: /api/v1/auth/signin
  post: # Method: POST

### usersRouter

- []: # Route: /api/v1/users/
  get: # Method: GET
- []: # Route: /api/v1/users/me
  get: # Method: GET
- []: # Route: /api/v1/users:uuid
  get: # Method: GET
  put: # Method: PUT
  delete: # Method: DELETE

### participantsRouter

- []: # Route: /api/v1/participants/:uuid/participants
  get: # Method: GET
- []: # Route: /api/v1/participants/:uuid
  get: # Method: GET

### conversationsRouter

- []: # Route: /api/v1/conversations/
  get: # Method: GET
  post: # Method: POST
- []: # Route: /api/v1/conversations/:uuid
  get: # Method: GET
  put: # Method: PUT
  delete: # Method: DELETE
- []: # Route: /api/v1/conversations/:uuid/messages
  get: # Method: GET

- []: # Route: /api/v1/conversations/:uuid/participants
  get: # Method: GET
  post: # Method: POST
