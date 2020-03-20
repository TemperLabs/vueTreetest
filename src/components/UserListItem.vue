<template>
  <div class="users__list-item">
    <div><span>id:</span> {{ id }}</div>
    <div><span>Возраст:</span> {{ age }}</div>
    <div><span>Роль:</span> {{ role }}</div>
    <div><span>Имя:</span> {{ firstName }}</div>
    <div><span>Фамилия:</span> {{ lastName }}</div>
    <div><span>Компания:</span> {{ company }}</div>
  </div>
</template>

<script>
export default {
  name: 'UserListItem',
  props: {
    id: Number,
    age: Number,
    role: String,
    firstName: String,
    lastName: String,
    company: String
  }
}
</script>

<style lang="less" scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
