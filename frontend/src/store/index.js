import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogs: []
  },
  mutations: {
    FETCH_BLOGS(state, blogs) {
      state.blogs = blogs
    },
    ADD_BLOG(state, blog) { // 追加 ③第一引数はstate、第二引数は②でコミットされたsavedBlogが渡ってくる
      const blogs = state.blogs.concat(blog)
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
    async addBlog({ commit }, blog) { // 追加 ① 、第二引数blogに先ほどのthis.blogが入る
      const res = await axios().post('/blogs', blog)
      const savedBlog = res.data
      commit('ADD_BLOG', savedBlog) // ②
      return savedBlog
    },
  }
})