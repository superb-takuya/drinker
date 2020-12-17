<template>
  <div class="chat bg-white">
    <div class="container">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="8" :sm="8" :md="6" class="rooms white-gray-border">
          <div class="chat-header bg-white">
            <div class="title">メッセージ一覧</div>
          </div>
          <div class="rooms-body">
            <div class="room-item" v-for="i in 10" :key="i">
              <div class="room-user">
                <div class="header">
                  <img src="/images/cast.jpeg" class="icon circle">
                </div>
                <div class="body">
                  <div class="name">あんなﾁｬﾝ</div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="16" :sm="16" :md="12" class="chat-room white-gray-border">
          <div class="chat-header bg-white">
            <div class="title">
              <div class="name my-auto">あんなﾁｬﾝ</div>
              <div class="image my-auto">
                <img src="/images/cast.jpeg" class="icon circle">
              </div>
            </div>
          </div>
          <div class="chat-body">
            <div class="messages">
              <div class="message">
                <div class="message-body">
                  <div class="message-user">
                    <img src="/images/cast.jpeg" class="icon circle">
                  </div>
                  <div class="message-content">
                    <div class="message-bubble">メッセージメッセージメッセージメッセージメッセージメッセージメッセージ</div>
                  </div>
                </div>
                <div class="message-fotter">
                  <div class="send-date font-small">10/10 10:00</div>
                </div>
              </div>
              <div class="message my-message" v-for="i in 10" :key="i">
                <div class="message-body">
                  <div class="message-user">
                    <img src="/images/cast.jpeg" class="icon">
                  </div>
                  <div class="message-content">
                    <div class="message-bubble">メッセージメッセージメッセージメッセージメッセージメッセージメッセージ</div>
                  </div>
                </div>
                <div class="message-fotter">
                  <div class="send-date font-small">10/10 10:00</div>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-send bg-white">
            <textarea class="message font-md" placeholder="メッセージを入力"></textarea>
            <button class="send-button bg-white circle">
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
  layout: 'chat',
}
</script>
