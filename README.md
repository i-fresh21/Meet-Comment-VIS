# Meet-Comment-VIS

## ブランチ規則

- feature-#{issue番号}-{作業内容}

## 環境構築

- git clone
- npm i
- npm run build

## シーケンス図

```mermaid
sequenceDiagram
  autonumber
  USER->>+google meet: コメント入力
  google meet->>+google meet: コメント欄に表示
  google meet->>+MCVIS: コメント取得
  MCVIS-->>+google meet: コメントをmeet画面に反映
```
