<template>
  <div class="cast-detail">
    <div class="container pt-1">
      <el-row :gutter="20" class="mt-1">
        <el-col :xs="24" :sm="9" :md="9">
          <el-card class="cast-card my-2" :body-style="{ padding: '0px' }"  >
            <div class="card-avatar flex">
              <el-avatar :size="40" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
              <div class="my-auto ml-1 font-bold">なまえ</div>
            </div>
            <div class="card-main mt-1">
              <el-carousel>
                <el-carousel-item v-for="item in 4" :key="item">
                  <el-image class="cast-image" src="/images/cast_sample.jpeg" fit="cover"></el-image>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="images mt-1">
              <el-image class="cast-image" src="/images/cast_sample.jpeg" fit="cover"></el-image>
              <el-image class="cast-image" src="/images/cast_sample.jpeg" fit="cover"></el-image>
              <el-image class="cast-image" src="/images/cast_sample.jpeg" fit="cover"></el-image>
              </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="15" :md="15">
          <el-card class="cast-card my-2" :body-style="{ padding: '0px' }">
            <div class="card-main">
              <div class="card-section">
                <div class="title flex">
                  <el-avatar :size="30" :src="circleUrl"></el-avatar>
                  <div class="my-auto ml-1 font-bold font-title">自己紹介</div>
                </div>
                <div class="body bg-light-gray">
                  未登録のセクションです
                </div>
              </div>
              <div class="card-section">
                <div class="title flex">
                  <el-avatar :size="30" :src="circleUrl"></el-avatar>
                  <div class="my-auto ml-1 font-bold font-title">都合のつきやすい日時</div>
                </div>
                <div class="body bg-light-gray">
                  未登録のセクションです
                </div>
              </div>
              <div class="card-section mt-3">
                <div class="title flex">
                  <el-avatar :size="30" :src="circleUrl"></el-avatar>
                  <div class="my-auto ml-1 font-bold font-title">ビデオチャットアプリ</div>
                </div>
                <div class="body bg-light-gray">
                  未登録のセクションです
                </div>
                <div class="body">
                  <el-image v-for="i in 3" :key="i" src="/images/genre/talk.png" fit="contain" class="chat-apps mr-1"></el-image>
                </div>
              </div>
            </div>
          </el-card>
          <el-card class="cast-card my-1" :body-style="{ padding: '0px' }">
            <div class="card-main">
              <div class="card-section">
                <div class="title flex">
                  <el-avatar :size="30" :src="circleUrl"></el-avatar>
                  <div class="my-auto ml-1 font-bold font-title">ユーザーによる評価</div>
                </div>
                <div class="body bg-light-gray">
                  ユーザーによる評価はまだありません
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
