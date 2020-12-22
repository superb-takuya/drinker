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
                {{ $store.state.auth.loginedUserId}}
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
export default {
  data() {
    return {
      loginForm:{
        email: "",
        password: "",
        region: "",
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
    signIn(){
      this.$refs["loginForm"].validate((valid) => {
        if (valid) {
          this.$store.dispatch({
            type:'auth/signIn',
            email: this.loginForm.email,
            password: this.loginForm.password 
          });

          // if (loginFailed){
          // }else{
          // // location.href="/";
          //   this.$message({
          //     type: 'success',
          //     message: 'ログインに成功しました'
          //   });
          // }
        } else {
          return false;
        }
      });
    }
  },
}
</script>
