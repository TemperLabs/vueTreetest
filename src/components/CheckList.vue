<template>
  <div class="checklist">
    <div>{{treeData}}</div>
  </div>
</template>

<script>
export default {
  name: 'CheckList',
  props: {
    List: Object
  },
  methods: {
    listenSelect: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
