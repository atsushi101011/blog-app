<template>
  <div>
    <Flash />
    <h1>Blogs</h1>
    <v-row>
      <v-col cols="4">
        <AddBlog />
      </v-col>
      <v-col cols="8">
        <table>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
          <tr v-for="blog in blogs" :key="blog.id">
            <td>{{ blog.title }}</td>
            <td>{{ blog.body }}</td>
            <td><router-link class="button_link" :to="{ name: 'show-blog', params: { id: blog.id }}">[ show ]</router-link></td>
            <td><router-link class="button_link" :to="{ name: 'edit-blog', params: { id: blog.id }}">[ edit ]</router-link></td>
            <td><span class="button_link" @click="deleteBlog(blog)">[ delete ]</span></td>
          </tr>
        </table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddBlog from './AddBlog'
import Flash from '@/components/Flash.vue' // 追加

export default {
  components: {
    AddBlog,
    Flash // 追加
  },
  computed: {
    ...mapState(['blogs'])
  },
  data() {
    return {
      blog: {}
    }
  },
  methods: {
    deleteBlog(blog) { // 追加
      this.$store.dispatch('deleteBlog', blog)
      this.$store.commit('setMessage', {
        status: true,
        message: 'Blog was successfully destroyed.'
      })
      setTimeout(() => {
        this.$store.commit('setMessage', {})
      }, 2000)
    }
  }
}
</script> 

<style scoped>
.button_link {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
</style>