<template>
  <div>
    <h2>Messages</h2>
    <message v-for="message in messages" :key="message.id"></message>
  </div>
</template>

<script>
import Message from './Message'

export default {
  name: 'message-list',
  props: ['messages'],
  components: {
    Message
  }
}
</script>
