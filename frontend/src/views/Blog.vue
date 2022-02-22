<template>
  <div>
    <Flash /> // 追加
    <p>Title: {{ blog.title }}</p>
    <p>Body: {{ blog.body }}</p>
    <router-link :to="{ name: 'edit-blog', params: { id: blog.id }}">edit</router-link> | <router-link to="/blogs">Back</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Flash from '@/components/Flash.vue' // 追加

export default {
  components: { // 追加
    Flash
  },
  computed: {
    ...mapState(['blogs']),
    blog() {
      return this.blogs.find(blogId => blogId.id === this.$route.params.id) || {}
    }
  }
}
</script>