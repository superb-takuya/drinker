<template>
  <div class="mypage-edit">
    <div class="container container-sm pt-3">
      <el-row justify="center">
        <el-col :xs="24" :sm="24" :md="24">
          <el-card class="cast-card my-2" :body-style="{ padding: '0px' }">
            <el-form :model="mypageEditForm" ref="mypageEditForm" :rules="rules">
              <el-row justify="center">
                <el-col :xs="24" :sm="24" :md="24">
                  <div class="mb-1 font-bold font-title">基本情報</div>
                </el-col>
              </el-row>
              <el-row justify="center" class="form-basic-info">
                <el-col :xs="24" :sm="8" :md="6">
                  <el-image class="cast-image" :src="mypageEditForm.iconURL" fit="cover"></el-image>
                  <el-upload class="image-uploader my-1" action="" :limit="1" :on-change="uploadIcon" :multiple="false" :show-file-list="false">
                    <el-button slot="trigger" type="primary">変更する</el-button>
                  </el-upload>
                </el-col>
                <el-col :xs="24" :sm="16" :md="18">
                  <el-form-item prop="nickName">
                    <el-input placeholder="ユーザー名" v-model="mypageEditForm.nickName"></el-input>
                  </el-form-item>
                  <el-form-item prop="introduct">
                    <el-input type="textarea" :rows="6" placeholder="自己紹介(最大800文字)" v-model="mypageEditForm.introduct"></el-input>
                  </el-form-item>
                  <el-form-item prop="freeTime">
                    <el-input type="textarea" :rows="4" placeholder="都合のつきやすい日時(最大400文字)" v-model="mypageEditForm.freeTime"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row justify="center mt-1">
                <el-col :xs="24" :sm="24" :md="24">
                  <div class="mb-1 font-bold font-title">キャスト設定</div>
                </el-col>
              </el-row>
              <el-row class="form-cast-info">
                <el-form-item prop="display">
                  <el-checkbox v-model="mypageEditForm.display">公開する</el-checkbox>
                </el-form-item>
                <el-form-item prop="salary">
                  <div class="flex salary-setting">
                    <el-col :xs="10" :sm="6" :md="4">
                      <el-input-number v-model="mypageEditForm.salary" :step="100"></el-input-number>
                      </el-col>
                    <el-col :xs="14" :sm="18" :md="20">
                      <div class="ml-1">クレジット/時間</div>
                    </el-col>
                  </div>
                </el-form-item>
              </el-row>
              <el-row justify="center mt-1">
                <el-col :xs="24" :sm="24" :md="24">
                  <div class="mb-1 font-bold font-title">希望のボイスチャットアプリ</div>
                </el-col>
              </el-row>
              <el-row class="form-chat-info flex">
                <el-col :xs="8" :sm="8" :md="3">
                  <el-form-item prop="zoom">
                    <div class="chat-app grid">
                      <el-image src="/images/chat-app/zoom.jpg" fit="cover"></el-image>
                      <el-checkbox v-model="mypageEditForm.chatApps.zoom">Zoom</el-checkbox>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :xs="8" :sm="8" :md="3">
                  <el-form-item prop="line">
                    <div class="chat-app grid">
                      <el-image src="/images/chat-app/line.jpg" fit="cover"></el-image>
                      <el-checkbox v-model="mypageEditForm.chatApps.line">Line</el-checkbox>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :xs="8" :sm="8" :md="3">
                  <el-form-item prop="discode">
                    <div class="chat-app grid">
                      <el-image src="/images/chat-app/discode.jpg" fit="cover"></el-image>
                      <el-checkbox v-model="mypageEditForm.chatApps.discode">Discode</el-checkbox>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :xs="8" :sm="8" :md="3">
                  <el-form-item prop="other">
                    <div class="chat-app grid">
                      <el-image src="/images/chat-app/other.jpg" fit="cover"></el-image>
                      <el-checkbox v-model="mypageEditForm.chatApps.other">その他</el-checkbox>
                    </div>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item>
                <el-button>キャンセル</el-button>
                <el-button type="primary"  @click="updateUser()">保存する</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data() {
    return {
      mypageEditForm:{
        iconURL: "",
        nickName: "",
        introduct: "",
        freeTime: "",
        display: false,
        salary: 0,
        chatApps: {
          zoom: false,
          line: false,
          discode: false,
          other: false,
        },
      },
      rules: {
        nickName: [
          { required: true, message: 'ニックネーム は必須です', trigger: 'blur' },
        ],
      },
    };
  },
  created: function(){
    const userId = this.getUserId();
    if(userId){
      this.$userApi.getUserByID(userId).then(doc => {
        const user = doc.data();
        this.mypageEditForm = {
          iconURL: user.iconURL,
          nickName: user.nickName,
          introduct: user.introduct,
          freeTime: user.freeTime,
          display: user.display,
          salary: user.salary,
          chatApps: user.chatApps,
        };
      }).catch((error) => {
        this.$message({ type: 'error', message: this.$errorMessage.GetUserFailed});
      });
    }
    else{
      alert("error")
    }
  },
  methods: {
    ...mapMutations('user', ['setUser', 'setUserIconURL', 'setUserNickName']),
    ...mapGetters('user', ['getUserId']),
    uploadIcon (f) {
      const file = f.raw;
      const userId = this.getUserId();
      this.$store.dispatch('user/uploadIconToStrage', {userId: userId, file: file}).then(url => {
        this.$store.dispatch('user/updateUserIconURL', {userId: userId, iconURL: url}).then(() => {
          this.mypageEditForm.iconURL = url;
          this.setUserIconURL({iconURL: url});
        }).catch((error)=>{
          this.$message({ type: 'error', message: this.$errorMessage.imageUploadFailed});
        });
      }).catch((error)=>{
        this.$message({ type: 'error', message: this.$errorMessage.imageUploadFailed});
      });
    },
    updateUser(){
      this.$refs["mypageEditForm"].validate((valid) => {
        if (valid) {
          const form =  this.mypageEditForm;
          this.$userApi.updateUser(this.getUserId(), form.nickName, form.display, form.iconURL, form.introduct, form.freeTime, form.salary, form.chatApps.zoom, form.chatApps.line, form.chatApps.discode, form.chatApps.other).then(() => {
            this.setUserNickName({nickName: form.nickName})
            this.$message({ type: 'success', message: this.$infoMessage.ProfileUpdated});
          }).catch((error) => {
            this.$message({ type: 'error', message: this.$errorMessage.UpdateUserFailed});
          });
        } else {
          this.$message({ type: 'error', message: this.$errorMessage.FormValidated});
          return false;
        }
      });
    },
  }
}
</script>
