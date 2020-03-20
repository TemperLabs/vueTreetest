

const Home = {
template: `
<div>
  <h1> pages </h1>
  <router-link v-for="page in pages" :to="{name: 'page', params: {id: page.id}}" :key="page.id">
    {{ page.title }}
  </router-link>
</div>
`,
data() {
return {
pages: []
}
},
created() {
BackendAPI.getPages().then(pages => (this.pages = pages))
}
}

const PageForm = {
template: `
<form @submit.prevent="savePage">
  <p>
    <label for="title">title</label>
    <input id="title" type="text" v-model="title">
  </p>
  <p>
    <label for="content">content</label>
    <textarea id="content" v-model="body"></textarea>
  </p>
  <p>
    <button type="submit">send</button>
  </p>
</form>
`,
computed: {
title: {
set(title) {
this.$store.commit('SET_PAGE', { title })
},
get() {
return this.$store.state.page.title
}
},
body: {
set(body) {
this.$store.commit('SET_PAGE', { body })
},
get() {
return this.$store.state.page.body
}
}
},
methods: {
savePage() {
this.$store.dispatch('PUT_PAGE')
.then(() => this.$emit('saved'))
}
}
}

const Page = {
template: `
<div class="columns">
  <section class="page column">
    <h1>{{ page.title }}</h1>

    <div>{{ page.body }}</div>

    <button @click="is_editing = true">EDIT</button>
  </section>

  <page-form v-if="is_editing" @saved="is_editing = false" class="column" />
</div>
`,
components: {
PageForm
},
data() {
return { is_editing: false }
},
computed: Vuex.mapState(['page']),
created() {
this.$store.dispatch('GET_PAGE', this.$route.params.id)
}
}

const router = new VueRouter({
routes: [{
name: 'home',
path: '/',
component: Home
}, {
name: 'page',
path: '/page/:id',
component: Page
}]
})

const store = new Vuex.Store({
state: {
page: {}
},

mutations: {
SET_PAGE(state, page) {
// merge data with previous state
state.page = Object.assign({}, state.page, page)
}
},

actions: {
GET_PAGE({ commit }, id) {
BackendAPI.getPage(id)
.then(page => commit('SET_PAGE', page))
},
PUT_PAGE({ state }) {
BackendAPI.putPage(state.page)
}
}
})
