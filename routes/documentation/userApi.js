exports.addUserSchema = {
  description: 'Create a new user',
  tags: ['users'],
  summary: 'Creates new user with given values',
  body: {
    type: 'object',
    properties: {
      firstname: { type: 'string' },
      lastname: { type: 'string' },
      email: { type: 'string' },
      age: { type: 'number' },
      addresses: { type: 'object' }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        firstname: { type: 'string' },
        lastname: { type: 'string' },
        email: { type: 'string' },
        age: { type: 'number' },
        addresses: { type: 'object' },
        __v: { type: 'number' }
      }
    }
  }
}
