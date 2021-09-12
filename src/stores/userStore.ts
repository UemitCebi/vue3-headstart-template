import { defineStore } from 'pinia'
import AuthService, { LoginCredentials } from '../services/AuthService'

interface User {
  id: Number
  email: string
  name: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: <User>{},
  }),
  getters: {
    getName(state) {
      return state.user.name
    },
    isLoggedIn(state) {
      // Put your logic here
      return (
        Object.keys(state.user).length !== 0 &&
        state.user.constructor === Object
      )
    },
  },
  actions: {
    setUserData(user: User) {
      this.user = user
    },
    async login(credentials: LoginCredentials) {
      await AuthService.login(credentials)
      const user: User = await AuthService.getUserData()
      this.setUserData(user)
      return
    },
  },
})
