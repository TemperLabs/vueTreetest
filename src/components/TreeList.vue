<template>
    <li>
      <div
        :class="{bold: isFolder}"
        @click="toggle"
        @dblclick="makeFolder">
        {{ treeitem.name }}
        <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
      </div>
      <ul v-show="isOpen" v-if="isFolder">
        <tree-item
          class="item"
          v-for="(child, index) in list.children"
          :key="index"
          :treeitem="child"
          @make-folder="$emit('make-folder', $event)"
          @add-item="$emit('add-item', $event)"
        ></tree-item>
<!--        <li class="add" @click="$emit('add-item', item)">+</li>-->
      </ul>
    </li>
</template>

<script>
export default {
  name: 'TreeList',
  props: {
    list: Object
  },
  methods: {
    listenSelect: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    changeUsername (username) {
      this.user.username = username
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
