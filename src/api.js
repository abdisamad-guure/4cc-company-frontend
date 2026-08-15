const API_URL = import.meta.env.VITE_API_URL || '/api'

export const auth = {
  token: () => localStorage.getItem('4cc_token'),
  set: token => localStorage.setItem('4cc_token', token),
  clear: () => localStorage.removeItem('4cc_token'),
}

export async function api(path, options = {}) {
  const headers = { 'Content-Type': 'application/json', ...options.headers }
  if (auth.token()) headers.Authorization = `Bearer ${auth.token()}`
  const response = await fetch(`${API_URL}${path}`, { ...options, headers })
  const data = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(data.error || 'Something went wrong')
  return data
}
