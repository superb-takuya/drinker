<template>
  <el-header class="site-header">
    <el-container>
      <div class="header-left flex">
        <nuxt-link to="/">
          <el-image class="site-image" src="/images/title.png" fit="contain"></el-image>
        </nuxt-link>
        <div class="header-left-links flex">
          <div><nuxt-link to="/" class="decoration-none">ホーム</nuxt-link></div>
          <div><nuxt-link to="/chat" class="decoration-none">メッセージ</nuxt-link></div>
          <div><nuxt-link :to="/cast/+loginedUser.id" class="decoration-none">プロフィール</nuxt-link></div>
        </div>
      </div>
      <div class="header-right">
        <div class="after-auth" v-if="authrized">
          <nuxt-link to="/notifications">
            <i class="icon el-icon-bell"></i>
          </nuxt-link>
          <nuxt-link to="/chat">
            <i class="icon el-icon-chat-dot-round"></i>
          </nuxt-link>
          <i class="icon el-icon-menu drawer-small" @click="drawer = true"></i>
        </div>
        <div class="before-auth" v-else>
          <el-button round plain @click="showPage('/login')">ログイン</el-button>
          <el-button round type="primary" @click="showPage('/register')">新規登録</el-button>
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
              <el-avatar class="icon" :src="loginedUser.iconURL"></el-avatar>
            </div>
            <div>
              <div class="username">{{loginedUser.nickName}}</div>
              <div class="credit">所有クレジット：{{loginedUser.credit}}</div>
            </div>
          </div>
          </el-header>
          <el-menu>
            <el-menu-item @click="showPage('/cast/'+loginedUser.id)">
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
import { mapMutations, mapGetters } from 'vuex'

export default {
  data() {
    return {
      drawer: false,
      drawerSize: '25%',
      authrized: false,
      loginedUser: {
        id: '',
        nickName: '',
        iconURL: '',
        credit: 0,
      },
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
  mounted(){
    const authrized = this.getAuthState()
    if (authrized){
      this.authrized = authrized
      const user = this.getUser()
      this.loginedUser = {
        id :user.id,
        nickName :user.nickName,
        iconURL :user.iconURL,
        credit :user.credit,
      }
    }
  },
  methods: {
    ...mapMutations('auth', ['clearAuthinfo']),
    ...mapMutations('user', ['clearUser']),
    ...mapGetters('auth', ['getAuthState']),
    ...mapGetters('user', ['getUser']),

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
      this.$authApi.signOut().then(()=> {
        this.clearAuthinfo();
        this.clearUser();
        // signOut
        location.href="/";
      }).catch((error) => {
        this.$message({ type: 'error', message: this.$errorMessage.SignOutFailedError});
      });;
    }
  },
};
</script>
