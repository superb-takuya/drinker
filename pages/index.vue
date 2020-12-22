<template>
  <div class="top">
    <div class="top-image">
      <el-image src="/images/main.jpg"></el-image>
    </div>
    <div class="container pt-1">
      <el-row>
        <el-col :span="24">
          <h4 class="font-bold">ジャンル</h4>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="genre mt-1">
          <el-image v-for="i in 50" :key="i" src="/images/genre/talk.png" fit="contain" class="genre-image"></el-image>
        </el-col>
      </el-row>
    </div>
    <div class="container mt-3">
      <el-row :gutter="20">
        <el-col :span="24">
          <h4 class="font-bold">注目キャスト</h4>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="mt-1">
        <el-col :xs="12" :sm="8" :md="6" v-for="i in 4" :key="i">
          <el-card shadow="hover" class="cast-card my-1" :body-style="{ padding: '0px' }">
            <div class="card-image">
              <img src="/images/cast.jpeg">
            </div>
            <div class="card-main">
              <div class="name">あんなﾁｬﾝ</div>
              <div class="evaluate">
                <el-rate v-model="4.5" disabled show-score text-color="#ff9900" score-template="4.5(35)"></el-rate>
              </div>
              <div class="credit flex">
                <div class="value">1300</div>
                <div class="text">クレジット/時間</div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="mt-3 text-center">
        <el-pagination background layout="pager" :total="1000"></el-pagination>
      </el-row>
    </div>
  </div>
</template>

<script>
</script>
