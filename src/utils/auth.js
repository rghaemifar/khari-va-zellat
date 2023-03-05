import { removeAccessibleRoutes, removeRole } from './roles'

export const AUTH_KEY_MAIN = 'Authorization'

export const getAuthToken = () => {
  if (typeof localStorage === 'undefined') return
  const token = localStorage.getItem(AUTH_KEY_MAIN)
  return `Bearer ${token}`
}

export const saveToken = (token = '') => {
  if (typeof localStorage === 'undefined') return
  localStorage.setItem(AUTH_KEY_MAIN, token)
}

export const isLoggedIn = () => {
  if (typeof localStorage === 'undefined') return
  return !!localStorage.getItem(AUTH_KEY_MAIN)
}

export const removeToken = () => {
  if (typeof localStorage === 'undefined') return
  localStorage.removeItem(AUTH_KEY_MAIN)
}

export const logout = () => {
  removeToken()
  removeAccessibleRoutes()
  removeRole()
  window.location = '/login/'
}
