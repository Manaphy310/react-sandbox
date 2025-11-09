import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">React Sandbox</h1>
          <ul className="nav-links">
            <li><Link to="/">ホーム</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">ブログ</Link></li>
            <li><Link to="/users">ユーザー</Link></li>
          </ul>
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2024 React Sandbox - 学習用サンプルアプリケーション</p>
      </footer>
    </>
  )
}
