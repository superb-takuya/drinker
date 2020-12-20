<template>
  <div class="credit-market">
    <div class="container pt-1">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="24" :sm="18" :md="10">
          <div class="mt-5 text-center h4 font-bold">クレジットの購入</div>
          <el-card class="my-2" :body-style="{ padding: '0px' }">
            <div class="credits">
              <div class="credit" v-for="i in 6" :key="i">
                <div class="image">
                  <el-image src="/images/genre/talk.png" fit="contain" class="icon"></el-image>
                </div>
                <div class="price">
                  <div class="value">100</div>
                  <div class="text">credit</div>
                </div>
                <div class="buy">
                  <el-button el-button plain>100円</el-button>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="24" :sm="18" :md="10">
          <div class="mt-5 text-center h4 font-bold">利用履歴</div>
          <el-card class="my-2 p-3" :body-style="{ padding: '0px' }">
            <table class="table table-striped credit-used">
              <thead>
                <tr>
                  <th class="detail">内容</th>
                  <th class="credit">クレジット</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in tableData" :key="i.id">
                  <td>
                    <div class="detail">
                      {{i.detail}}
                    </div>
                    <div class="date">
                      {{i.date}}
                    </div>
                  </td>
                  <td class="credit">{{i.credit}}</td>
                </tr>
              </tbody>
            </table>
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
      tableData: [{
        id:'1',
        detail: 'クレジットの購入',
        date:'2020-10-24',
        credit: '+300',
      },
      {
        id:`2`,
        detail: 'A子さんとの飲み',
        date:'2020-10-24',
        credit: '-400',
      }]
    }
  }
}
</script>
