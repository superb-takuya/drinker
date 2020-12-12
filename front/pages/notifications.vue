<template>
  <div class="notice">
    <div class="container pt-1">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="24" :sm="18" :md="10">
          <div class="mt-3 text-center h4 font-bold">お知らせ一覧</div>
          <el-card class="cast-card my-2" :body-style="{ padding: '0px' }">
            <div class="notices">
              <div class="notice" v-for="i in 5" :key="i">
                <div class="image">
                  <el-image src="/images/genre/talk.png" fit="contain" class="icon"></el-image>
                </div>
                <div class="contents">
                  <div class="title">【リリースのお知らせ】</div>
                  <div class="body">・ギフト総合ランキングをリリースしました。<br>よろしくお願いいたします。</div>
                  <div class="date">2020/10/12</div>
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
