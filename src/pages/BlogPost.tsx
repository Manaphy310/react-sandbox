import { Link, useParams, Navigate } from 'react-router-dom'
import { blogPosts } from '../data/blogData'

export default function BlogPost() {
  const { id } = useParams<{ id: string }>()
  const postId = parseInt(id || '0')
  const post = blogPosts.find(p => p.id === postId)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <div className="container">
      <article>
        <header style={{ marginBottom: '2rem' }}>
          <h1 className="page-title">{post.title}</h1>
          <div style={{ fontSize: '1rem', color: '#666', marginBottom: '1rem' }}>
            <span>{post.date}</span> • <span>著者: {post.author}</span>
          </div>
        </header>

        <div className="card" style={{ lineHeight: '1.8' }}>
          <div style={{ whiteSpace: 'pre-wrap' }}>
            {post.content}
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <Link to="/blog" className="button button-secondary">
            ← ブログ一覧に戻る
          </Link>
        </div>
      </article>

      <div className="card" style={{ marginTop: '2rem', backgroundColor: '#f0f8ff' }}>
        <h3>💡 動的ルーティングの仕組み</h3>
        <p style={{ marginTop: '0.5rem' }}>
          このページは <code>/blog/:id</code> ルートで定義されています。
          URLの <code>{id}</code> 部分が <code>useParams</code> フックで取得できます。
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          現在のID: <code>{id}</code>
        </p>
      </div>
    </div>
  )
}
