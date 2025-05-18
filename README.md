# 概要
chizzoの製作物の一覧のサイト

./apps/home/: https://chizzo.studio/
./apps/bibi/: https://bibi.chizzo.studio/


# 開発

## 📂 ディレクトリ構成

概要

```
./
├─ apps/            # 各アプリ
│  ├─ bibi/
│  └─ home/
├─ biome.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ package.json
└─ tsconfig.json
```

## 新規アプリの追加

https://developers.cloudflare.com/workers/frameworks/framework-guides/react-router/
React Router v7を使用

./apps配下にて以下を実行

```
pnpm create cloudflare@latest {アプリ名} --framework=react-router
```

## 共通パーツ

### @common/components
./packages/components/にて実装している、各アプリで使用できるコンポーネント。

使用する際には各アプリで以下を設定する。
（共通のコンポーネント分のtailwindのcssが反映されるように）

```tailwind.config.ts
  content: [
    './**/*.{ts,tsx,js,jsx}',
    './node_modules/@common/components/*.{ts,tsx,js,jsx}', // ここを追加
  ],
```
