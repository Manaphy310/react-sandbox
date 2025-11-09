import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate, Navigate } from 'react-router-dom'
import { getUserById, updateUser, deleteUser, User } from '../data/userData'

export default function UserDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({ name: '', email: '', role: '' })

  useEffect(() => {
    const fetchUser = () => {
      setLoading(true)
      // 実際のAPIコールをシミュレート
      setTimeout(() => {
        const userId = parseInt(id || '0')
        const foundUser = getUserById(userId)
        if (foundUser) {
          setUser(foundUser)
          setEditForm({
            name: foundUser.name,
            email: foundUser.email,
            role: foundUser.role
          })
        }
        setLoading(false)
      }, 300)
    }

    fetchUser()
  }, [id])

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    const userId = parseInt(id || '0')
    const updatedUser = updateUser(userId, editForm)

    if (updatedUser) {
      setUser(updatedUser)
      setIsEditing(false)
      alert('ユーザー情報を更新しました')
    } else {
      alert('更新に失敗しました')
    }
  }

  const handleDelete = () => {
    if (!confirm('本当に削除しますか？')) return

    const userId = parseInt(id || '0')
    const success = deleteUser(userId)

    if (success) {
      alert('ユーザーを削除しました')
      navigate('/users')
    } else {
      alert('削除に失敗しました')
    }
  }

  if (loading) {
    return (
      <div className="container">
        <div className="loading">読み込み中...</div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/users" replace />
  }

  return (
    <div className="container">
      <h1 className="page-title">ユーザー詳細</h1>

      <div className="card">
        {!isEditing ? (
          <>
            <h2>{user.name}</h2>
            <div style={{ marginTop: '1rem', lineHeight: '2' }}>
              <p><strong>ID:</strong> {user.id}</p>
              <p><strong>メールアドレス:</strong> {user.email}</p>
              <p><strong>役割:</strong> {user.role}</p>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
              <button onClick={() => setIsEditing(true)} className="button">
                編集
              </button>
              <button onClick={handleDelete} className="button button-secondary">
                削除
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleUpdate}>
            <h2>ユーザー情報を編集</h2>
            <div style={{ marginTop: '1rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  名前
                </label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '1rem'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  メールアドレス
                </label>
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '1rem'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  役割
                </label>
                <input
                  type="text"
                  value={editForm.role}
                  onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '1rem'
                  }}
                  required
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="submit" className="button">
                  保存
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="button button-secondary"
                >
                  キャンセル
                </button>
              </div>
            </div>
          </form>
        )}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/users" className="button button-secondary">
          ← ユーザー一覧に戻る
        </Link>
      </div>

      <div className="card" style={{ marginTop: '2rem', backgroundColor: '#f0f8ff' }}>
        <h3>💡 このページで学べること</h3>
        <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', lineHeight: '2' }}>
          <li><strong>動的ルーティング:</strong> URLパラメータ（<code>{id}</code>）を使用</li>
          <li><strong>CRUD操作:</strong> Read（取得）、Update（更新）、Delete（削除）を実装</li>
          <li><strong>フォーム処理:</strong> Reactの状態管理を使用した編集機能</li>
          <li><strong>useNavigate:</strong> プログラマティックなナビゲーション</li>
        </ul>
      </div>
    </div>
  )
}
