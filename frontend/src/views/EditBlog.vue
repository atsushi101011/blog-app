<template>
  <div>
    <h2>Editing Blog</h2>
    <form>
      <v-text-field
        v-model="blog.title"
        label="Title"
      ></v-text-field>
      <v-textarea
        v-model="blog.body"
        label="Body"
      ></v-textarea>

      <v-btn class="mr-4" @click="updateBlog">Update</v-btn>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['blogs']),
    blog() {
      return this.blogs.find(b => b.id == this.$route.params.id) || {}
    }
  },
  methods: {
    async updateBlog() {
      const blog = await this.$store.dispatch('editBlog', this.blog) // ①
      this.$router.push({ name: 'show-blog', params: { id: blog.id }})
    }
  }
}
</script>