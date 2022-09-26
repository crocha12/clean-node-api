import { loginParamsSchema } from './schemas/login-params-schema'
import { loginPath } from './paths/login-path'
import { accountSchema } from './schemas/account-schema'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'API do curso de Node.js, Typescript, TDD, Clean Architecture e SOLID',
    version: '1.0.0'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    account: accountSchema,
    login: loginParamsSchema
  }
}
