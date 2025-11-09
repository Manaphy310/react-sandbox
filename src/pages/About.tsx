export default function About() {
  return (
    <div className="container">
      <h1 className="page-title">About</h1>
      <p className="page-description">このページについて</p>

      <div className="card">
        <h2>このアプリケーションについて</h2>
        <p>
          React Sandboxは、Reactを学習するために作成された
          サンプルアプリケーションです。以下の主要な機能を含んでいます:
        </p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', lineHeight: '2' }}>
          <li>React Routerを使用したSPAルーティング</li>
          <li>関数コンポーネントとReact Hooks</li>
          <li>動的ルーティング</li>
          <li>モックデータを使用したCRUD操作</li>
          <li>レスポンシブデザイン</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: '1.5rem' }}>
        <h2>Reactとは？</h2>
        <p>
          Reactは、Facebookが開発したUIライブラリです。
          以下のような特徴があります:
        </p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', lineHeight: '2' }}>
          <li><strong>コンポーネントベース:</strong> 再利用可能なUIコンポーネント</li>
          <li><strong>仮想DOM:</strong> 効率的なレンダリングでパフォーマンス向上</li>
          <li><strong>宣言的なUI:</strong> 直感的で理解しやすいコード</li>
          <li><strong>豊富なエコシステム:</strong> 多数のライブラリとツール</li>
          <li><strong>学習コミュニティ:</strong> 活発なコミュニティと豊富な学習リソース</li>
          <li><strong>TypeScriptサポート:</strong> 型安全な開発が可能</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: '1.5rem' }}>
        <h2>技術スタック</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <div>
            <h3 style={{ color: '#0070f3', marginBottom: '0.5rem' }}>フロントエンド</h3>
            <ul style={{ marginLeft: '1rem', lineHeight: '1.8' }}>
              <li>React 18</li>
              <li>React Router 6</li>
              <li>TypeScript</li>
              <li>Vite</li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#0070f3', marginBottom: '0.5rem' }}>スタイリング</h3>
            <ul style={{ marginLeft: '1rem', lineHeight: '1.8' }}>
              <li>CSS (グローバル)</li>
              <li>CSS Modules対応</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
