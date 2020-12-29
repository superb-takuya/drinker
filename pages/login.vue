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
                <el-form class="auth-form" :model="loginForm" :rules="rules" ref="loginForm">
                  <el-form-item class="my-1" prop="email">
                    <el-input type="text" placeholder="メールアドレス" v-model="loginForm.email"></el-input>
                  </el-form-item>
                  <el-form-item class="my-1" prop="password">
                    <el-input type="password" placeholder="パスワード" v-model="loginForm.password"></el-input>
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
import { mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      loginForm:{
        email: "",
        password: "",
      },
      rules: {
        email: [
          { required: true, message: 'メールアドレス が入力されていません', trigger: 'blur' },
        ],
        password:[
          { required: true, message: 'パスワード が入力されていません', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    ...mapActions('auth', ['signInWithEmailAction']),
    ...mapMutations('auth', ['clearAuthinfo']),
    ...mapMutations('user', ['userSetter','clearUser']),
    ...mapActions('user', ['getUserByIdAction']),
    signIn(){
      this.$refs["loginForm"].validate((valid) => {
        if (valid) {
          const form = this.loginForm;
          this.signInWithEmailAction({email: form.email, password: form.password}).then(userId => {
            this.getUserByIdAction({id:userId}).then((user) => {
              this.userSetter({id: userId, iconURL: user.iconURL, credit: user.credit, nickName: user.nickName});
              this.$message({ type: 'success', message: "ログインに成功しました"});
            }).catch((error) => {
              // ユーザーの取得に失敗した場合
              this.clearAuthinfo();
              this.clearUser();
              this.$message({ type: 'error', message: this.$errorMessage.LoginFailedError});
            });
          }).catch((error) => {
            // 認証に失敗した場合
            this.clearAuthinfo();
            this.clearUser();
            this.$message({ type: 'error', message: this.$errorMessage.LoginFailedError});
          });
        } else {
          return false;
        }
      });
    },
  },
}
</script>
