<template>
  <div class="dashbord">
    <div class="container pt-1">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="24" :sm="18" :md="12">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="売上管理" name="first">
              <el-card class="my-2 p-3 revenues text-center" :body-style="{ padding: '0px' }">
                <div class="this-month">
                  <div class="head">
                    <div class="title">今月の売上</div>
                    <p class="subtitle">2020/12/01 ~ 2021/01/01</p>
                  </div>
                  <div class="body my-1">
                    <div class="amount">0円</div>
                  </div>
                </div>
                <div class="details">
                  <div class="head">
                    <div class="title">売上明細</div>
                  </div>
                  <table class="table table-striped body">
                    <thead>
                      <tr>
                        <th class="date">日付</th>
                        <th class="amount">売上</th>
                        <th class="detail">内容</th>
                        <th class="user">ユーザー</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="i in tableData" :key="i.id">
                        <td>{{i.date}}</td>
                        <td>{{i.credit}}</td>
                        <td>{{i.detail}}</td>
                        <td>{{i.user}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </el-card>
            </el-tab-pane>
            <el-tab-pane label="銀行口座" name="second">
              <el-card class="my-2 p-3 bank-account text-center" :body-style="{ padding: '0px' }">
                <div class="head">
                  <div class="title">お支払い先口座の登録</div>
                </div>
                <div class="body my-1">
                <el-form>
                  <el-row class="my-1">
                    <el-col :xs="12" :sm="12" :md="12" class="pr-1">
                      <el-form-item>
                        <el-input placeholder="性（全角）" v-model="bankAccount.lastName"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" class="pl-1">
                      <el-form-item>
                        <el-input placeholder="名（全角）" v-model="bankAccount.firstName"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row class="my-1">
                    <el-col :xs="12" :sm="12" :md="12" class="pr-1">
                      <el-form-item>
                        <el-input placeholder="せい（全角）" v-model="bankAccount.lastNameJp"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" class="pl-1">
                      <el-form-item>
                        <el-input placeholder="めい（全角）" v-model="bankAccount.firstNameJp"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-form-item class="my-1">
                    <el-select placeholder="口座の種類" v-model="bankAccount.Type" class="w-100">
                      <el-option label="普通口座" value="1"></el-option>
                      <el-option label="当座口座" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item class="my-1">
                    <el-input placeholder="銀行口座名" v-model="password"></el-input>
                  </el-form-item>
                  <el-form-item class="my-1">
                    <el-input placeholder="支店番号" v-model="password"></el-input>
                  </el-form-item>
                  <el-form-item class="my-1">
                    <el-input placeholder="口座番号" v-model="password"></el-input>
                  </el-form-item>
                  <el-form-item class="my-1">
                    <el-input placeholder="口座名義カナ（全角）" v-model="password"></el-input>
                  </el-form-item>
                  <el-form-item class="text-center mt-2">
                    <el-button type="primary" @click="updateBankAcount">登録する</el-button>
                  </el-form-item>
                </el-form>
                </div>
              </el-card>
            </el-tab-pane>
            <el-tab-pane label="振込申請" name="third">
              <el-card class="my-2 p-3 payout text-center" :body-style="{ padding: '0px' }">
                <div class="ablePayout">
                  <div class="head">
                    <div class="title">申請可能金額</div>
                    <p class="subtitle">
                    売上から利用手数料を差し引いた金額です。<br>
                    別途振込手数料300円 / 申請可能金額5,000円〜</p>
                  </div>
                  <div class="body my-1">
                    <div class="amount">0円</div>
                  </div>
                  <el-button type="primary" @click="payoutRequest">振り込み申請する</el-button>
                </div>
                <div class="paid">
                  <div class="head">
                    <div class="title">売上明細</div>
                  </div>
                  <table class="table table-striped body">
                    <thead>
                      <tr>
                        <th class="date">申請日</th>
                        <th class="amount">金額</th>
                        <th class="status">状況</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="i in tableData" :key="i.id">
                        <td>{{i.date}}</td>
                        <td>{{i.credit}}</td>
                        <td>{{i.status}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </el-card>
            </el-tab-pane>
          </el-tabs>
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
        credit: '300',
        user: 'ゆざゆざゆざ',
        status:'振り込み済',
      },
      {
        id:`2`,
        detail: 'A子さんとの飲み',
        date:'2020-10-24',
        credit: '400',
        user: 'ゆざゆざゆざ',
        status:'振り込み済',
      }],
      activeName: 'first',
      bankAccount:{},
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    updateBankAcount(){
      this.$message({
        type: 'success',
        message: '登録成功しました'
      });
    },
    payoutRequest(){
      this.$message({
        type: 'error',
        message: '申請に失敗しました'
      });
    }
  }
}
</script>
