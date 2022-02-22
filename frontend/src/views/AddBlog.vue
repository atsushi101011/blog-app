<template>
  <form>
    <v-text-field
      v-model="blog.title"
      label="Title"
    ></v-text-field>
    <v-textarea
      v-model="blog.body"
      label="Body"
    ></v-textarea>

    <v-btn class="mr-4" @click="onSubmit">Create</v-btn>
  </form>
</template>


<script>
export default {
  data() {
    return {
      blog: {},
    }
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch('addBlog', this.blog)
      this.blog.title = '' //追記
      this.blog.body = '' //追記
    }
  }
}
</script>