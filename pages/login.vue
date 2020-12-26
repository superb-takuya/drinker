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
                {{$store.state.auth}}
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapMutations} from 'vuex'
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
     ...mapMutations('auth', ['setAuthrized','clearAuthinfo']),
    signIn(){
      this.$refs["loginForm"].validate((valid) => {
        if (valid) {
          this.$authApi.signInWithEmail(this.loginForm.email, this.loginForm.password)
          .then(rslt => {
            const userID = rslt.user.uid
            this.$userApi.getUserByID(userID).then(doc => {
            // 認証・ユーザー情報の取得に成功
              this.setAuthrized({status: true,userId: userID, userIconURL: doc.data().iconURL, userCredit: doc.data().credit, userNickName: doc.data().nickName });
              this.$message({ type: 'success', message: "ログインに成功しました"});
            }).catch((error) => {
              // ユーザーの取得に失敗した場合
              this.clearAuthinfo();
              this.$message({ type: 'error', message: this.$errorMessage.LoginFailedError});
            });
          }).catch((error) => {
            // 認証に失敗した場合
            this.clearAuthinfo();
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
