import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogs: [],
    flash_message: { // 追加
      status: false,
      message: ''
    }
  },
  mutations: {
    setMessage(state, payload) { // 追加
      state.flash_message = payload
    },
    FETCH_BLOGS(state, blogs) {
      state.blogs = blogs
    },
    ADD_BLOG(state, blog) {
      const blogs = state.blogs.concat(blog)
      state.blogs = blogs
    },
    EDIT_BLOG(state, blog) {
      state.blogs.forEach(b => {
        if (b.id === blog.id) {
          b = blog
        }
      })
    },
    DELETE_BLOG(state, blogId) { // 追加 ②
      const blogs = state.blogs.filter(b => b.id != blogId)
      state.blogs = blogs
    }
  },
  actions: {
    async fetchBlogs({ commit }) {
      await axios().get('/blogs')
        .then(res => {
          commit('FETCH_BLOGS', res.data)
        })
        .catch(e => console.log(e))
    },
    async addBlog({ commit }, blog) {
      const res = await axios().post('/blogs', blog)
      const savedBlog = res.data
      commit('ADD_BLOG', savedBlog)
      return savedBlog
    },
    async editBlog({ commit }, blog) {
      const res = await axios().put(`/blogs/${blog.id}`, blog)
      const editedBlog = res.data
      commit('EDIT_BLOG', editedBlog)
      return editedBlog
    },
    async deleteBlog({ commit }, blog) { // 追加 ①
      await axios().delete(`/blogs/${blog.id}`, blog)
      commit('DELETE_BLOG', blog.id)
    }
  }
})