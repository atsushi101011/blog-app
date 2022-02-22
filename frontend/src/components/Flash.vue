<template>
  <transition name="fade">
    <div v-if="flash.status" class="success mb-3">{{ flash.message }}</div>
  </transition>
</template>

<script>
export default {
  computed: {
    flash() {
      return this.$store.state.flash_message
    }
  }
}
</script>

<style scoped>
.success {
  color: green;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>