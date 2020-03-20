<template>
  <div class="create__wrap">
    <h1>Создайте пользователя</h1>
    <div class="create__wrap-inner">
      <input type="checkbox" id="jack" value="Джек">
      <label for="jack">Джек</label>
      <select v-model="create.role">
        <option disabled value="кто">Выберите один из вариантов</option>
        <option>manager</option>
        <option>user</option>
        <option>admin</option>
      </select>
      <span>Выбрано: {{ create.role }}</span>
      <input :value="createUser.age"><span>{{createUser.age}}</span>
      <input :value="createUser.firstName"><span>{{createUser.firstName}}</span>
      <input :value="createUser.lastName"><span>{{createUser.lastName}}</span>
      <input :value="createUser.company"><span>{{createUser.company}}</span>
      <input :value="createUser.createdAt"><span>{{createUser.createdAt}}</span>
      <div>Отмеченные имена:
        <User :age="createUser.age"
              :role="createUser.firstName"
              :firstName="createUser.lastName"
              :lastName="createUser.company"
              :company="createUser.createdAt"
      /></div>
    </div>
  </div>
</template>

<script>
import User from '@/components/UserListItem.vue'

export default {
  name: 'createUser',
  components: {
    User
  },
  data () {
    return {
      createUser: {
        age: 5,
        role: 'someone',
        firstName: 'Имя',
        lastName: 'Фамилия',
        company: 'Компания',
        isActive: 'Активность',
        createdAt: 'Дата создания'
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .create__wrap-inner {
    display: flex;
    flex-wrap: wrap;
  }
  </style>
