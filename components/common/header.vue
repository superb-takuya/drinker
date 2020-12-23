<template>
  <el-header class="site-header">
    <el-container>
      <div class="header-left flex">
        <nuxt-link to="/">
          <el-image class="site-image" src="/images/title.png" fit="contain"></el-image>
        </nuxt-link>
        <div class="header-left-links flex">
          <div><nuxt-link to="/">ホーム</nuxt-link></div>
          <div><nuxt-link to="/chat">メッセージ</nuxt-link></div>
          <div><nuxt-link :to="/cast/+$store.state.user.loginedUserId">プロフィール</nuxt-link></div>
        </div>
      </div>
      <div class="header-right">
        <div class="after-auth" v-if="$store.state.user.authrized">
          <nuxt-link to="/notifications">
            <i class="icon el-icon-bell"></i>
          </nuxt-link>
          <nuxt-link to="/chat">
            <i class="icon el-icon-chat-dot-round"></i>
          </nuxt-link>
          <i class="icon el-icon-menu drawer-small" @click="drawer = true"></i>
        </div>
        <div class="before-auth" v-else>
          <el-button round plain>ログイン</el-button>
          <el-button round type="primary">新規登録</el-button>
        </div>
      </div>
    </el-container>
    <!-- drawer -->
    <el-drawer :visible.sync="drawer" :with-header="false" id="header-drawer" :size="drawerSize">
      <el-row>
        <el-col>
          <el-header class="drawer-header">
          <div class="user flex">
            <div class="icon">
              <el-avatar class="icon" :src="$store.state.user.loginedUserIconURL"></el-avatar>
            </div>
            <div>
              <div class="username">{{$store.state.user.loginedUserNickName}}</div>
              <div class="credit">所有クレジット：{{$store.state.user.loginedUserCredit}}</div>
            </div>
          </div>
          </el-header>
          <el-menu>
            <el-menu-item @click="showPage('/cast/'+$store.state.user.loginedUserId)">
              <span>プロフィール</span>
            </el-menu-item>
            <el-menu-item @click="showPage('/mypage/edit')">
              <span>プロフィール編集</span>
            </el-menu-item>
            <el-menu-item @click="showPage('/credit/market')">
              <span>クレジット購入/履歴</span>
            </el-menu-item>
            <el-menu-item @click="showPage('/dashbord')">
              <span>ダッシュボード</span>
            </el-menu-item>
            <el-menu-item @click="signOut">
              <span>ログアウト</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-drawer>
  </el-header>
</template>


<script>
import firebase from '@/plugins/firebase';

export default {
  data() {
    return {
      drawer: false,
      drawerSize: '25%',
    };
  },
  mounted: function(){
    document.getElementsByClassName('site-header')[0].style.height = "auto";
  },
  created(){
    if (process.client) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  methods: {
    handleResize: function() {
      let isSmall = window.matchMedia('(max-width: 767px)');
      if(isSmall.matches){
        this.drawerSize = '55%'
      }else{
        this.drawerSize = '25%'
      }
    },
    showPage(pagelink){
      this.drawer = false;
      this.$router.push(pagelink);
    },
    signOut(){
      firebase.auth().signOut().then(()=> {
        this.$store.commit({type: "user/setLoginedUser", userId: "", userIconURL: "", userCredit: "", userNickName: "" });
        this.$store.commit({ type: "user/setAuthenticateStatus", status: false});
        // signOut
        location.href="/";
      })
      .catch((error) => {
        console.log(error);
        this.$message({ type: 'error', message: this.$errorMessage.SignOutFailedError});
      });;
    }
  },
};
</script>
