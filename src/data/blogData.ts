export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  author: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Reactの始め方',
    excerpt: 'Reactを使ってモダンなWebアプリケーションを構築する方法を学びましょう。',
    date: '2024-01-15',
    author: 'Taro Yamada',
    content: `
Reactは、Facebookが開発したUIライブラリで、モダンなWebアプリケーションを構築するための強力なツールです。

## なぜReactを使うのか?

1. **コンポーネントベースのアーキテクチャ**
   - 再利用可能なUIコンポーネント
   - メンテナンスしやすいコード
   - 疎結合な設計

2. **仮想DOM**
   - 効率的なレンダリング
   - パフォーマンスの向上
   - スムーズなユーザー体験

3. **豊富なエコシステム**
   - 多くのライブラリとツール
   - 大きなコミュニティ
   - 豊富な学習リソース

## セットアップ方法

Reactプロジェクトを始めるのは簡単です：

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
\`\`\`

これだけで開発サーバーが起動します！
    `
  },
  {
    id: 2,
    title: 'React Hooksの基礎',
    excerpt: 'React Hooksの概念と、その利点について解説します。',
    date: '2024-01-20',
    author: 'Hanako Suzuki',
    content: `
React Hooksは、React 16.8で導入された機能で、関数コンポーネントで状態管理やライフサイクルメソッドを使用できるようにします。

## 主要なHooks

### 1. useState
状態管理を行うための基本的なHook：

\`\`\`typescript
const [count, setCount] = useState(0)
\`\`\`

### 2. useEffect
副作用を処理するためのHook：

\`\`\`typescript
useEffect(() => {
  // データフェッチングなどの副作用
  fetchData()
}, [dependencies])
\`\`\`

### 3. useContext
コンテキストを使用してグローバルな状態を管理：

\`\`\`typescript
const theme = useContext(ThemeContext)
\`\`\`

## Hooksの利点

- **コードの再利用性**: カスタムHooksで共通ロジックを抽出
- **シンプルな構文**: クラスコンポーネントより簡潔
- **優れた型推論**: TypeScriptとの相性が良い
    `
  },
  {
    id: 3,
    title: 'React Routerの活用',
    excerpt: 'React Routerを使って、SPAのルーティングを実装する方法を紹介します。',
    date: '2024-01-25',
    author: 'Taro Yamada',
    content: `
React Routerは、Reactアプリケーションでクライアントサイドルーティングを実現するための標準的なライブラリです。

## 基本的な使い方

\`\`\`typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}
\`\`\`

## 動的ルーティング

URLパラメータを使用した動的ルート：

\`\`\`typescript
import { useParams } from 'react-router-dom'

function BlogPost() {
  const { id } = useParams()
  return <div>記事ID: {id}</div>
}
\`\`\`

## ナビゲーション

Link コンポーネントを使用したナビゲーション：

\`\`\`typescript
import { Link } from 'react-router-dom'

<Link to="/about">About</Link>
\`\`\`

React Routerを使うことで、SPAでもネイティブアプリのようなスムーズなページ遷移を実現できます！
    `
  },
  {
    id: 4,
    title: 'Reactアプリケーションの状態管理',
    excerpt: 'Reactで状態管理を行う方法を学びます。',
    date: '2024-02-01',
    author: 'Jiro Tanaka',
    content: `
Reactアプリケーションで効果的な状態管理を行うことは、スケーラブルなアプリケーションを構築する上で重要です。

## ローカル状態 vs グローバル状態

### ローカル状態
単一のコンポーネント内で使用する状態：

\`\`\`typescript
const [value, setValue] = useState('')
\`\`\`

### グローバル状態
複数のコンポーネント間で共有する状態：

- **Context API**: Reactの組み込み機能
- **Redux**: 大規模アプリケーション向け
- **Zustand**: シンプルで軽量な状態管理

## Context APIの使用例

\`\`\`typescript
const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <YourApp />
    </UserContext.Provider>
  )
}
\`\`\`

## 状態管理のベストプラクティス

1. **状態を必要な場所に近く保つ**: 不要なグローバル状態を避ける
2. **状態の更新は不変に**: スプレッド演算子を使用
3. **派生状態を避ける**: 計算できるものは計算する

適切な状態管理により、アプリケーションの保守性とパフォーマンスが向上します！
    `
  }
]
