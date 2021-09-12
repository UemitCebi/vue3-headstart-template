import Api from './Api'

export interface LoginCredentials {
  email: string
  password: string
}

const baseUrl = '/api'

export default {
  login(credentials: LoginCredentials) {
    return Api.post(`${baseUrl}/login`, credentials)
  },

  getUserData() {
    return Api.get(`${baseUrl}/user`).then((response) => response.data)
  },
}
