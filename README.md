# React Sandbox

Reactを学習するためのサンプルアプリケーションです。Next.jsのサンプルプロダクトをReactに移行したプロジェクトです。

## 特徴

- **React 18** + **TypeScript**: 型安全な開発
- **Vite**: 高速な開発環境
- **React Router 6**: クライアントサイドルーティング
- **モックデータ**: API無しでCRUD操作を学習
- **レスポンシブデザイン**: モダンなUIデザイン

## プロジェクト構成

```
src/
├── components/      # 再利用可能なコンポーネント
│   └── Counter.tsx
├── data/           # モックデータ
│   ├── blogData.ts
│   └── userData.ts
├── layouts/        # レイアウトコンポーネント
│   └── Layout.tsx
├── pages/          # ページコンポーネント
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Blog.tsx
│   ├── BlogPost.tsx
│   ├── Users.tsx
│   └── UserDetail.tsx
├── App.tsx         # ルーティング設定
├── main.tsx        # エントリーポイント
└── index.css       # グローバルスタイル
```

## セットアップ

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# ビルド
pnpm build

# ビルドしたファイルのプレビュー
pnpm preview
```

## 学習内容

このプロジェクトでは以下のReactの概念を学べます：

1. **コンポーネント設計**: 関数コンポーネントと再利用性
2. **React Hooks**: useState, useEffect, useParams, useNavigate
3. **React Router**:
   - ネストされたルート
   - 動的ルーティング（`:id`パラメータ）
   - プログラマティックナビゲーション
4. **状態管理**: ローカル状態とフォーム処理
5. **CRUD操作**: モックデータを使った Create, Read, Update, Delete
6. **TypeScript**: 型定義とインターフェース

## ページ一覧

- **ホーム** (`/`): アプリケーションの紹介
- **About** (`/about`): プロジェクトの技術スタック
- **ブログ** (`/blog`): ブログ記事一覧
- **ブログ詳細** (`/blog/:id`): 個別の記事ページ
- **ユーザー** (`/users`): ユーザー一覧
- **ユーザー詳細** (`/users/:id`): ユーザーの詳細・編集・削除

## 元のプロジェクト

このプロジェクトは `nextjs-playground` にあるNext.jsサンプルをReactに移行したものです。

### Next.js vs React の主な違い

| 機能 | Next.js | React (このプロジェクト) |
|------|---------|------------------------|
| ルーティング | ファイルベース（App Router） | React Router |
| ナビゲーション | `<Link>` from next/link | `<Link>` from react-router-dom |
| 動的ルート | `[id]` フォルダ | `:id` パラメータ |
| API Routes | `app/api/` ディレクトリ | モックデータ関数 |
| サーバーコンポーネント | デフォルト | すべてクライアントコンポーネント |
| メタデータ | `metadata` エクスポート | `<Helmet>` などを使用可能 |

## ライセンス

学習用サンプルプロジェクト
