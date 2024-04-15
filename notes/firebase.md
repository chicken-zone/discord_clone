## Firebase手順
- 新規プロジェクト立ち上げ
    - プロジェクト名入力
    - Googleアナリティクス有効か無効か

- 導入後の対応
    - プロジェクト管理画面から</>ウェブ　ボタンをクリック
    - アプリの登録【プロジェクト名入力】
    　Hostingは今回はデプロイ時に設定する為チェックを外す
    - Firebase SDKは後程追加する為、コンソールボタンをクリック
    
- Authenticationの設定(ユーザー認証を行うため設定)
    - 管理画面からAuthenticationページをクリックし始めるをクリックする
    - ログイン方法を設定する画面で選択
    　今回はGoogle
    - トグルを有効にし自身のメールアドレスを入力し保存する

- Cloud Firestoreの設定(DB)
    - Cloud Firestoreのページをクリックしデータベースを作成するをクリック
    - ロケーションは東京を設定し有効ボタンをクリック
    - 今回は本番環境で運用しない為、テストモードで開始
    - データベースの管理画面が出てきたら設定完了
    - ルール設定を確認すると読み込みや書き込みがどれくらいの期間まで有効かを確認できる
    - if文を削除し公開すると有効期間を削除し常に読み込み等ができる状態になる

- 初期設定
    - プロジェクトの設定(歯車マーク)をクリック
    - 下部にスクロールするとSDKの設定方法が記載されている為そこから進める

    - npm install firebase
    - srcフォルダ内にTypescript用のfirebase.tsファイルを作成
    - ブラウザ内の”次に Firebase を初期化し、使用するプロダクトの SDK の利用を開始します。"以降のimport文等をコピーしfirebase.tsに貼りつけ
    - 今回はfirebaseのDBや認証を使うため、その初期設定を行う

    - DBアクセスする為のDBの変数をfirebase.tsに記述
    追加記述文
    ```
    import { getFirestore } from "firebase/firestore/lite"

    const db = getFirestore(app);
    ```

    - 認証の変数をfirebase.tsに記述
    追加記述文
    ```
    import { getAuth } from "firebase/auth";

    const auth = getAuth(app);
    ```

    - Google認証を使用する為プロバイダーを準備
    追加記述文
    ```
    import { GoogleAuthProvider, getAuth } from "firebase/auth";

    const provider = new GoogleAuthProvider();
    ```
    newはインスタンス化
    https://magazine.techacademy.jp/magazine/18937

    - エクスポート
    export defaultだとimport時に名前を変えてimportできるが、
    変えるとよくない為、exportの方が好ましい
    ```
    export { auth,provider,db};
    ```
