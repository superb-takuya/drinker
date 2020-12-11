<template>
  <div class="mypage-edit">
    <div class="container container-sm pt-1 ">
      <el-row justify="center">
        <el-col :xs="24" :sm="24" :md="24">
          <el-card class="cast-card my-2" :body-style="{ padding: '0px' }">
            <el-form>
              <el-row justify="center">
                <el-col :xs="24" :sm="24" :md="24">
                  <div class="mb-1 font-bold font-sm-title">基本情報</div>
                </el-col>
              </el-row>
              <el-row justify="center" class="form-basic-info">
                <el-col :xs="24" :sm="8" :md="6">
                  <el-image class="cast-image" src="/images/cast_sample.jpeg" fit="cover"></el-image>
                  <el-upload class="image-uploader my-1" action="https://jsonplaceholder.typicode.com/posts/">
                    <el-button slot="trigger" type="primary">変更する</el-button>
                  </el-upload>
                </el-col>
                <el-col :xs="24" :sm="16" :md="18">
                  <el-form-item>
                    <el-input placeholder="ユーザー名" v-model="usename"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input type="textarea" :rows="6" placeholder="自己紹介(最大800文字)" v-model="introduct"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input type="textarea" :rows="4" placeholder="都合のつきやすい日時(最大400文字)" v-model="introduct"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row justify="center mt-1">
                <el-col :xs="24" :sm="24" :md="24">
                  <div class="mb-1 font-bold font-sm-title">画像の登録</div>
                </el-col>
              </el-row>
              <el-row class="form-image-upload">
                <el-col :xs="24" :sm="24" :md="24">
                  <el-form-item>
                    <el-upload class="image-uploader" list-type="picture-card" :auto-upload="false">
                      <i slot="default" class="el-icon-plus"></i>
                      <div slot="file" slot-scope="{file}">
                        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                        <span class="el-upload-list__item-actions">
                          <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                            <i class="el-icon-zoom-in"></i>
                          </span>
                          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                            <i class="el-icon-download"></i>
                          </span>
                          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                            <i class="el-icon-delete"></i>
                          </span>
                        </span>
                      </div>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row justify="center mt-1">
                <el-col :xs="24" :sm="24" :md="24">
                  <div class="mb-1 font-bold font-sm-title">キャスト設定</div>
                </el-col>
              </el-row>
              <el-row class="form-cast-info">
                <el-form-item>
                  <div class="flex">
                    <el-col :xs="10" :sm="6" :md="4">
                      <el-input placeholder="1200" class="credit"></el-input>
                    </el-col>
                    <el-col :xs="14" :sm="18" :md="20">
                      <div class="ml-1">クレジット/時間</div>
                    </el-col>
                  </div>
                </el-form-item>
                <el-form-item>
                  <el-radio v-model="radio" label="1">公開</el-radio>
                  <el-radio v-model="radio" label="2">非公開</el-radio>
                </el-form-item>
              </el-row>
              <el-row justify="center mt-1">
                <el-col :xs="24" :sm="24" :md="24">
                  <div class="mb-1 font-bold font-sm-title">希望のボイスチャットアプリ</div>
                </el-col>
              </el-row>
              <el-row class="form-chat-info flex">
                <el-col :xs="8" :sm="8" :md="3">
                  <el-form-item>
                    <div class="chat-app grid">
                      <el-image src="/images/genre/talk.png" fit="cover"></el-image>
                      <el-checkbox v-model="checked">Zoom</el-checkbox>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :xs="8" :sm="8" :md="3">
                  <el-form-item>
                    <div class="chat-app grid">
                      <el-image src="/images/genre/talk.png" fit="cover"></el-image>
                      <el-checkbox v-model="checked">Line</el-checkbox>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :xs="8" :sm="8" :md="3">
                  <el-form-item>
                    <div class="chat-app grid">
                      <el-image src="/images/genre/talk.png" fit="cover"></el-image>
                      <el-checkbox v-model="checked">Discode</el-checkbox>
                    </div>
                  </el-form-item>
                </el-col>
                <el-col :xs="8" :sm="8" :md="3">
                  <el-form-item>
                    <div class="chat-app grid">
                      <el-image src="/images/genre/talk.png" fit="cover"></el-image>
                      <el-checkbox v-model="checked">その他</el-checkbox>
                    </div>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item>
                <el-button>キャンセル</el-button>
                <el-button type="primary">保存する</el-button>
              </el-form-item>
            </el-form>
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
      radio:"",
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    };
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    }
  }
}
</script>
