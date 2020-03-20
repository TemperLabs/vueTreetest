import axios from 'axios'

const HTTP = axios.create({
  baseURL: 'http://localhost:3000'
})
export default {
  getUsers () {
    return HTTP.get('/users')
  },
  getUser (id) {
    return HTTP.get('/users/' + id)
  },
  setUser (user, id) {
    return HTTP.put('/users/' + user.id, user)
  }
}
