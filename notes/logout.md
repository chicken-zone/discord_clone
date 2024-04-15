## ログアウト機能
    アイコン画像をクリックしたらそこからログアウトする機能を実装

- sidebar.tsxのsidebarFooter内のimgタグにonclickを追加

    firebaseのsignOut関数を下記のように記述するだけで、アイコンをクリックしたらログアウト出来る
    ```
    <img src="./icon.png" alt=""  onClick={() => auth.signOut()}/>
    ```
    onClickにてauthの状態が変化し、App.tsxのonAuthStateChangedが発火
    onAuthStateChangeはauthの状態が変更する度に発火する関数

    1.onClickにてsignOutが実行されユーザー情報がnullに変更される
    2.onAuthStateChangeが発火しif文のelse(dispatch (logout()) )が発火
    3.userSlice.tsのReducer内のlogoutが発火されstate.userがnullとなる




    ユーザー状態がnullに変更されログイン画面に戻される
