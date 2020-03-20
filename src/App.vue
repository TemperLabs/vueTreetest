<template>
  <div id="app">
    <div id="nav">
      <router-link to="/users">Users</router-link> |
      <router-link to="/UserEdit">Users</router-link> |
      <router-link to="/newUser">New User</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
  * {
    box-sizing: border-box;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul,li,ol {
  list-style: none;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
