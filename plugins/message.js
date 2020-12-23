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
}