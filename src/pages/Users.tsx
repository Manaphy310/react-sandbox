import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllUsers, User } from '../data/userData'

export default function Users() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // モックAPIからデータを取得（実際のアプリではfetchを使用）
    const fetchUsers = () => {
      setLoading(true)
      // 実際のAPIコールをシミュレート
      setTimeout(() => {
        setUsers(getAllUsers())
        setLoading(false)
      }, 300)
    }

    fetchUsers()
  }, [])

  if (loading) {
    return (
      <div className="container">
        <div className="loading">読み込み中...</div>
      </div>
    )
  }

  return (
    <div className="container">
      <h1 className="page-title">ユーザー一覧</h1>
      <p className="page-description">
        モックデータからユーザーデータを取得して表示しています
      </p>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3>💡 このページの仕組み</h3>
        <p style={{ marginTop: '0.5rem' }}>
          このページはモックデータを使用してユーザー情報を表示しています。
          実際のアプリケーションでは、APIエンドポイントからデータを取得します。
        </p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', lineHeight: '2' }}>
          <li><strong>useState:</strong> ユーザーデータと状態を管理</li>
          <li><strong>useEffect:</strong> コンポーネントのマウント時にデータを取得</li>
          <li><strong>モックデータ:</strong> src/data/userData.tsから取得</li>
        </ul>
      </div>

      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <div>
              <strong>{user.name}</strong>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>
                {user.email} • {user.role}
              </div>
            </div>
            <Link to={`/users/${user.id}`} className="button">
              詳細を見る
            </Link>
          </li>
        ))}
      </ul>

      <div className="card" style={{ marginTop: '2rem', backgroundColor: '#f0f8ff' }}>
        <h3>🔌 データ管理について</h3>
        <p style={{ marginTop: '0.5rem' }}>実際のアプリケーションでは以下のような操作を実装できます：</p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', lineHeight: '2' }}>
          <li>ユーザーの一覧取得</li>
          <li>ユーザーの詳細表示</li>
          <li>ユーザー情報の編集</li>
          <li>ユーザーの削除</li>
          <li>新しいユーザーの作成</li>
        </ul>
      </div>
    </div>
  )
}
