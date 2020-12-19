<template>
  <el-header class="site-header">
    <el-container>
      <div class="header-left flex">
        <nuxt-link to="/">
          <el-image class="site-image" src="/images/title.png" fit="contain"></el-image>
        </nuxt-link>
        <div class="header-left-links flex">
          <div v-for="i in headerLinks" :key="i"><nuxt-link :to="i.link">{{i.title}}</nuxt-link></div>
        </div>
      </div>
      <div class="header-right">
        <div class="after-auth" v-if="auth">
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
    <el-drawer :visible.sync="drawer" :with-header="false" id="header-drawer" size="25%">
      <el-row>
        <el-col>
          <el-header class="drawer-header">
          <div class="user flex">
            <div class="icon">
              <el-avatar class="icon" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
            <div>
              <div class="username">なまえ</div>
              <div class="credit">所有クレジット：500</div>
            </div>
          </div>
          </el-header>
          <el-menu>
            <el-menu-item v-for="i in drawerData" :key="i.title" @click="showPage(i.link)">
              <span>{{i.title}}</span>
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
export default {
  data() {
    return {
      auth: true,
      drawer: false,
      drawerData:[
        {
          title: 'プロフィール',
          link: '/cast/1',
        },
        {
          title: 'プロフィール編集',
          link: '/mypage/edit',
        },
        {
          title: 'クレジット購入/履歴',
          link: '/credit/market',
        },
        {
          title: 'ダッシュボード',
          link: '/dashbord',
        },
      ],
      headerLinks:[
        {
          title: 'ホーム',
          link: '/',
        },
        {
          title: 'メッセージ',
          link: '/chat',
        },
        {
          title: 'プロフィール',
          link: '/cast/1',
        },

      ]
    };
  },
  mounted: function(){
    // css
    document.getElementsByClassName('site-header')[0].style.height = "auto";
    let smallMedia = window.matchMedia('(max-width: 480px)');
    if(smallMedia.matches){
      let drawer = document.getElementById('header-drawer');
      drawer.getElementsByClassName('el-drawer')[0].style.width = "65%"
    }
  },
  methods:{
    showPage(pagelink){
      this.drawer = false;
      this.$router.push(pagelink);
    },
    signOut(){
      // signOut
      location.href="/";
    }
  }
};
</script>
