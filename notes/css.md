## CSS初期対応
- 下記の記述を削除
- App.css
```

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

```

## Sassについて
- Saasを利用すると入れ子構造になったときに入れ子で書けるようになる
    - Appタグの中にheaderタグがある場合下記の記述でCSSをあてる事が出来る
    ```
    .App {
    text-align: center;
    background-color: red;

    .header{

    }
    }

    ```

## Sass導入
URL　https://qiita.com/Tateishi0819/items/c105693da353a5a0c776
- 今回入れるのはnode sassを使用する

- npm i node-sass
    - インストールコマンド

- Sass導入時に拡張子を.cssから.scssに変更する

- importもscssで記述

## index.scss
- 余計な余白を消す
    ```
    * {
        margin: 0;
    }
    ``` 

## 色の検索
- chrome拡張機能でcolor pickerを追加することでブラウザ上の色を検索する事が出来る

## material ui 導入
  - npm install @mui/material @emotion/react @emotion/styled

## material icon 導入
  - npm install @mui/icons-material

## Googlefont　導入
  https://googlefonts.github.io/japanese/
  - 導入したいフォントのHTMLコードをコピーしpublicにあるindex.html内のtitleタグの上に貼りつける
  - ブラウザ上で先ほど入力したHTMLコードの下にあるCSSコードのfont-family: "○○〇";をコピーしindex.scss内の*内に貼りつける

