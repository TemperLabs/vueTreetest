<template>
  <div class="home">
    <ul class="users__list">
    <li v-for="user in users" :key="user.message">
      <user-list-item
        :id="user.id"
        :age="user.age"
        :role="user.role"
        :firstName="user.firstName"
        :lastName="user.lastName"
        :company="user.company"
      />
    </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import UserListItem from '@/components/UserListItem.vue'

export default {
  name: 'Users',
  components: {
    UserListItem
  },
  mounted () {
    this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers'])
  },
  computed: mapState([
    'users'
  ])
}
</script>

<style scoped>
  .users__list {
    display: flex;
    flex-wrap: wrap;
  }
  .users__list-item {
    margin: 0 15px 20px 15px;
    padding: 5px 10px;
    color: #1f1e1d;
    font-size: 13px;
    font-weight: 600;
    background: darkseagreen;
  }
</style>
