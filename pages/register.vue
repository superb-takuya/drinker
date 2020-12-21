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
                <el-form class="auth-form" :model="registerForm" :rules="rules" ref="registerForm">
                  <el-form-item class="my-1" prop="nickName">
                    <el-input type="text" placeholder="ニックネーム" v-model="registerForm.nickName"></el-input>
                  </el-form-item>
                  <el-form-item class="my-1" prop="email">
                    <el-input type="email" placeholder="メールアドレス" v-model="registerForm.email"></el-input>
                  </el-form-item>
                  <el-form-item class="my-1" prop="password">
                    <el-input type="password" placeholder="パスワード" v-model="registerForm.password"></el-input>
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
import  firebase  from '~/plugins/firebase/index.js';

export default {
  data() {
    return {
      registerForm:{
        nickName: "",
        email: "",
        password: "",
      },
      rules: {
        nickName: [
          { required: true, message: 'ニックネーム は入力必須です', trigger: 'blur' },
        ],
        email: [
          { required: true, message: 'メールアドレス は入力必須です', trigger: 'blur' },
          { type: 'email', message: 'メールアドレス が正しくありません', trigger: 'blur' }
        ],
        password:[
          { required: true, message: 'パスワード は入力必須です', trigger: 'blur' },
          { min: 6, max: 30, message: '６文字以上30文字以内にしてください', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    signUp() {
      this.$refs["registerForm"].validate((valid) => {
        if (valid) {
          const nickName = this.registerForm.nickName
          const email = this.registerForm.email
          const password = this.registerForm.password
          firebase.auth().createUserWithEmailAndPassword(email ,password).then(rslt => {
            const userUid = rslt.user.uid;
            firebase.firestore().collection('users').doc(userUid).set({
              nickName: nickName,
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
            }).then(rslt=>{
              this.$message({
                type: 'success',
                message: '登録に成功しました'
              });
              localStorage.loginedUserId = userUid;
            }).catch(error => {
              console.log(error)
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
        } else {
          return false;
        }
      });
    }
  }
}
</script>
