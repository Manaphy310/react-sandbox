export interface User {
  id: number
  name: string
  email: string
  role: string
}

let users: User[] = [
  { id: 1, name: '山田太郎', email: 'taro@example.com', role: '開発者' },
  { id: 2, name: '鈴木花子', email: 'hanako@example.com', role: 'デザイナー' },
  { id: 3, name: '田中次郎', email: 'jiro@example.com', role: 'プロダクトマネージャー' },
  { id: 4, name: '佐藤三郎', email: 'saburo@example.com', role: '開発者' },
]

export const getAllUsers = (): User[] => {
  return [...users]
}

export const getUserById = (id: number): User | undefined => {
  return users.find(u => u.id === id)
}

export const updateUser = (id: number, updates: Partial<Omit<User, 'id'>>): User | null => {
  const index = users.findIndex(u => u.id === id)
  if (index === -1) return null

  users[index] = { ...users[index], ...updates }
  return users[index]
}

export const deleteUser = (id: number): boolean => {
  const index = users.findIndex(u => u.id === id)
  if (index === -1) return false

  users.splice(index, 1)
  return true
}

export const createUser = (userData: Omit<User, 'id'>): User => {
  const newUser = {
    id: Math.max(...users.map(u => u.id)) + 1,
    ...userData
  }
  users.push(newUser)
  return newUser
}
