<template>
  <div class="chat">
    <div class="container">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="8" :sm="8" :md="6" class="rooms">
          <div class="rooms-header">
            <div class="title">メッセージ一覧</div>
          </div>
          <div class="rooms-body">
            <div class="room-item" v-for="i in 10" :key="i">
              <div class="room-user">
                <div class="header">
                  <img src="/images/cast.jpeg" class="icon">
                </div>
                <div class="body">
                  <div class="name">あんなﾁｬﾝ</div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="16" :sm="16" :md="12" class="chat-room">
          <div class="chat-header">
            <div class="title">
              <div class="name">あんなﾁｬﾝ</div>
              <div class="image">
                <img src="/images/cast.jpeg" class="icon">
              </div>
            </div>
          </div>
          <div class="chat-body">
            <div class="messages">
              <div class="message my-message">
                <div class="contents">
                  メッセージ
                </div>
                <div class="date">
                10/10 10:00
                </div>
              </div>
            </div>
          </div>
          <div class="chat-send">
            <textarea class="message" placeholder="メッセージを入力"></textarea>
            <button class="send-button">
              <i class="el-icon-s-promotion"></i>
            </button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'chat'
}
</script>
