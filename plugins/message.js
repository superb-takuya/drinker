import Vue from 'vue'
// info message
Vue.prototype.$infoMessage = {
}

// error messages
Vue.prototype.$errorMessage = {
    LoginFailedError: 'ログインに失敗しました',
    RegistFailedError: '登録に失敗しました',
    EmailAlreadyUsedError: '入力されたEmailはすでに使用されています',
    EmailRequiredError: 'メールアドレス が入力されていません',
    PasswordRequiredError: 'パスワード が入力されていません',
    SignOutFailedError: 'サインアウトに失敗しました',
    GetUserFailed: 'ユーザー情報の取得に失敗しました',
    UpdateUserFailed: 'ユーザー情報の更新に失敗しました',
}