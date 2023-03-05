const ACCESSIBLE_PAGES_KEY = 'ACCESSIBLE_PAGES'
const ROLE_KEY = 'ROLE'

export const saveAccessibleRoutes = (accessibleRoutes) => {
  if (typeof localStorage === 'undefined') return
  if (!accessibleRoutes) return
  localStorage.setItem(ACCESSIBLE_PAGES_KEY, JSON.stringify(accessibleRoutes))
}

export const getAccessibleRoutes = async () => {
  if (typeof localStorage === 'undefined') return
  const routes = await JSON.parse(localStorage.getItem(ACCESSIBLE_PAGES_KEY))
  return routes || []
}

export const removeAccessibleRoutes = () => {
  if (typeof localStorage === 'undefined') return
  localStorage.removeItem(ACCESSIBLE_PAGES_KEY)
}

export const saveRole = (role) => {
  if (typeof localStorage === 'undefined') return
  localStorage.setItem(ROLE_KEY, role)
}

export const getRole = () => {
  if (typeof localStorage === 'undefined') return
  return localStorage.getItem(ROLE_KEY)
}

export const removeRole = () => {
  if (typeof localStorage === 'undefined') return
  localStorage.removeItem(ROLE_KEY)
}
