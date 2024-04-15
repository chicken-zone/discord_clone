## firebasedeployについて
- 1.firebaseのhostingページから始めるを押し、
    下記をターミナルで入力
    ```
    npm install -g firebase-tools
    ```
- 2.チェックマークは押さずに次へ
    firebaseへログイン
    ターミナルで入力
    一度ログインしたことがある人はエラーが出る可能性があるが、
    firebase logoutをし再度loginすればエラーは消える
    ```
    firebase login
    ```
- 3.初期化
    firebase initをターミナルで入力
    ```
    firebase init
    ```
    Yを選択後
    下記を矢印で移動しスペースキーで選択
    ```
    (*) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
    ```
    すでにプロジェクトを作成している為
    ```
    Use an existing project
    ```
    プロジェクト選択画面
    ```
    discord-clone-udemy-4754b (discord-clone-udemy)
    ```
    what~ public directory?
    パブリックディレクトリを使いますか
    buildディレクトリに作成する為
    ```
    build
    ```
    configure~ single-page app
    SPAですか？
    ページ遷移が無い為
    ```
    yes
    ```
    set up ~ deploys with github?
    githubで自動ビルドする？
    ```
    no
    ```
    buildディレクトリが作成される

- 4.ターミナルでnpm run buildを入力
    デプロイの前にbuildを準備
- 5.ターミナルでfirebase deployを実行
    ```
    Deploy complete!
    ```
    が出たら完成
    hostingURLからブラウザで立ち上げる
    

## エラー
git init時のuse an existing projectの際に出たエラー
対処法
firebase logoutを行い、再度loginでエラーが修正された
```
C:\Users\81901\projects\udemy\flontend\shincode\react_redux_typescript_firebase\discord_clone

? Are you ready to proceed? Yes
GitHub Action deploys

=== Project Setup

You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project

Error: Failed to list Firebase projects. See firebase-debug.log for more info.
```