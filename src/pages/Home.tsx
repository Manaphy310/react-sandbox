import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container">
      <h1 className="page-title">Reactへようこそ！</h1>
      <p className="page-description">
        このアプリケーションは、Reactの主要な機能を学習するためのサンプルプログラムです。
      </p>

      <div className="grid">
        <div className="card">
          <h2>📄 ページルーティング</h2>
          <p>
            React Routerを使用したクライアントサイドルーティングを体験できます。
            ページ遷移時にページ全体をリロードせず、必要な部分だけを更新します。
          </p>
          <Link to="/about" className="button" style={{ marginTop: '1rem' }}>
            Aboutページへ
          </Link>
        </div>

        <div className="card">
          <h2>🔗 動的ルーティング</h2>
          <p>
            URLパラメータを使った動的なページ生成を学べます。
            ブログ記事やユーザープロフィールなど、動的なコンテンツに最適です。
          </p>
          <Link to="/blog" className="button" style={{ marginTop: '1rem' }}>
            ブログページへ
          </Link>
        </div>

        <div className="card">
          <h2>🌐 データ管理</h2>
          <p>
            モックデータを使用したCRUD操作を学べます。
            実際のアプリケーションでのデータフェッチングパターンを体験できます。
          </p>
          <Link to="/users" className="button" style={{ marginTop: '1rem' }}>
            ユーザー管理を見る
          </Link>
        </div>

        <div className="card">
          <h2>⚡ コンポーネント</h2>
          <p>
            再利用可能なコンポーネントを使用した開発を体験できます。
            状態管理とイベントハンドリングを学べます。
          </p>
          <code style={{ display: 'block', marginTop: '0.5rem' }}>
            関数コンポーネント + Hooks
          </code>
        </div>

        <div className="card">
          <h2>🎨 スタイリング</h2>
          <p>
            グローバルCSSを使用したスタイリング方法を学べます。
            CSS ModulesやTailwind CSSなど、お好みのスタイリング手法も簡単に導入できます。
          </p>
        </div>

        <div className="card">
          <h2>📦 状態管理</h2>
          <p>
            useStateやuseEffectなどのReact Hooksを使った状態管理を学べます。
            より複雑なアプリケーションではContext APIやReduxも活用できます。
          </p>
        </div>
      </div>

      <section style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'white', borderRadius: '8px' }}>
        <h2>学習のポイント</h2>
        <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', lineHeight: '2' }}>
          <li><strong>React Router:</strong> クライアントサイドルーティングでSPAを実現</li>
          <li><strong>コンポーネント設計:</strong> 再利用可能なUIコンポーネントの作成</li>
          <li><strong>動的ルート:</strong> URLパラメータを使った動的なページ生成</li>
          <li><strong>状態管理:</strong> useState、useEffectなどのHooksを活用</li>
          <li><strong>TypeScript:</strong> 型安全な開発でバグを減らす</li>
        </ul>
      </section>
    </div>
  )
}
