import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://0.0.0.0:3000/v1'
  })
}