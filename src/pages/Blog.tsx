import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogData'

export default function Blog() {
  return (
    <div className="container">
      <h1 className="page-title">ブログ</h1>
      <p className="page-description">Reactに関する記事を紹介しています</p>

      <div className="grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="card">
            <h2>{post.title}</h2>
            <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>
              <span>{post.date}</span> • <span>{post.author}</span>
            </div>
            <p>{post.excerpt}</p>
            <Link
              to={`/blog/${post.id}`}
              className="button"
              style={{ marginTop: '1rem' }}
            >
              続きを読む
            </Link>
          </article>
        ))}
      </div>

      <div className="card" style={{ marginTop: '2rem', backgroundColor: '#f0f8ff' }}>
        <h3>💡 動的ルーティングについて</h3>
        <p style={{ marginTop: '0.5rem' }}>
          このブログページから個別の記事ページへのリンクは、動的ルーティングを使用しています。
          React Routerの<code>:id</code>パラメータで動的なパスを受け取ることができます。
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          例: <code>/blog/:id</code> → <code>/blog/1</code>, <code>/blog/2</code>, etc.
        </p>
      </div>
    </div>
  )
}
