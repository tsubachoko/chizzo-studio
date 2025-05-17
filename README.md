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
