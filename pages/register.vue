<template>
  <div class="auth">
    <div class="container pt-1">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="24" :sm="16" :md="9">
          <el-card class="my-2 p-3" :body-style="{ padding: '0px' }">
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :xs="24" :sm="24" :md="24">
                <div class="title">Sign Up!</div>
              </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :xs="24" :sm="24" :md="24">
                <el-form class="login-form">
                  <el-form-item class="my-1">
                    <el-input type="text" placeholder="ニックネーム" v-model="nickName"></el-input>
                  </el-form-item>
                  <el-form-item class="my-1">
                    <el-input type="email" placeholder="メールアドレス" v-model="email"></el-input>
                  </el-form-item>
                  <el-form-item class="my-1">
                    <el-input type="password" placeholder="パスワード" v-model="password"></el-input>
                  </el-form-item>
                  <el-form-item class="text-center mt-2">
                    <el-button type="primary" @click="signUp()">登録する</el-button>
                  </el-form-item>
                </el-form>
                <hr>
                <div class="auth-link">
                  <NuxtLink to="/login">アカウントを既に持っている場合</NuxtLink>
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
import authApi from '@/plugins/firebase/modules/auth';

export default {
  data() {
    return {
      nickName: "",
      email: "",
      password: "",
    }
  },
  methods: {
    signUp: function () {
      const nickName = this.email;
      const email = this.email;
      const password = this.email;
      if (nickName.length < 1 || email.length < 1 || password.length < 1){
        this.$message({
          type: 'error',
          message: '必須項目が入力されていません',
        });
      }
      else{
        authApi.createUserWithEmailAndPassword(email, password).then(rslt => {
          const userUid = rslt.user.uid
          const userData = {
            nickName: this.nickName,
            display: false,
            iconURL:"",
            imageURLs: [],
            introduct: "",
            freeTime: "",
            chatApps: [],
            salary: 0,
            credit: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          userApi.updateUser(userUid, userData).then(rslt=>{
            this.$message({
              type: 'success',
              message: '登録にせいこうしました'
            });
            localStorage.loginedUserId = userUid;
          }).catch(error => {
            this.$message({
              type: 'error',
              message: '登録に失敗しました'
            });
          });
        }).catch((error) => {
          let message = '登録に失敗しました';
          if(error.code == "auth/email-already-in-use"){
            message = "入力されたEmailはすでに使用されています";
          }
          this.$message({
            type: 'error',
            message: message,
          });
        });
      }
    }
  },
}
</script>
