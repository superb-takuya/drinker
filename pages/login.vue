<template>
  <div class="auth">
    <div class="container pt-1">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="24" :sm="16" :md="9">
          <el-card class="my-2 p-3" :body-style="{ padding: '0px' }">
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :xs="24" :sm="24" :md="24">
                <div class="title">Login!</div>
              </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :xs="24" :sm="24" :md="24">
                <el-form class="login-form">
                  <el-form-item class="my-1">
                    <el-input placeholder="メールアドレス" v-model="email" :rules="emailRules" required></el-input>
                  </el-form-item>
                  <el-form-item class="my-1">
                    <el-input placeholder="パスワード" v-model="password" :rules="passRules" required></el-input>
                  </el-form-item>
                  <el-form-item class="text-center mt-2">
                    <el-button type="primary" @click="signIn()">ログイン</el-button>
                  </el-form-item>
                </el-form>
                <hr>
                <div class="auth-link">
                  <NuxtLink to="/register">新規登録はこちら</NuxtLink>
                </div>
                <div class="forget-password">
                  <NuxtLink to="/forget-password">パスワードを忘れた場合</NuxtLink>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import userApi from '@/plugins/firebase/modules/user';

export default {
  data() {
    return {
      valid: true,
      email: "",
      password: "",
    }
  },
  methods: {
    signIn: function () {
      const email = this.email
      const password = this.email
      if (email.length < 1 || password.length < 1){
        this.$message({
          type: 'error',
          message: '必須項目が入力されていません'
        });
      }
      else{
        userApi.signInWithEmailAndPassword(email, password)
        .then(rslt => {
          localStorage.loginedUserId = rslt.user.uid;
          location.href="/";
        }).catch((error) => {
          this.$message({
            type: 'error',
            message: 'ログインに失敗しました'
          });
        });
      }
    }
  },
}
</script>
