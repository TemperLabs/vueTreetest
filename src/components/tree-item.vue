<template>
  <li>
    <div
      :class="{bold: isFolder}"
      class="tree-item"
      @dblclick="makeFolder"
      v-if="isSelected"
      >
      <span class="itemname">{{itemName}}</span>
      <button class="add" @click="toggleOff">DELETE:{{itemName}}</button>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <tree-item
        class="item"
        v-for="child in item.children"
        :key="child.name"
        :item="child"
        @make-folder="$emit('make-folder', $event)"
      ></tree-item>
    </ul>
  </li>
</template>
<script>
import { eventBus } from './../main.js'
export default {
  name: 'TreeItem',
  props: {
    item: Object
  },
  data: function () {
    return {
      isOpen: true
    }
  },
  computed: {
    isFolder: function () {
      return this.item.children && this.item.children.length
    },
    isSelected: function () {
      return this.item.selected
    },
    itemName: function () {
      return this.item.name
    }
  },
  methods: {
    toggle: function () {
      if (this.isSelected) {
        this.isOpen = !this.isOpen
      }
    },
    makeFolder: function () {
      if (!this.isFolder) {
        this.$emit('make-folder', this.item)
        this.isOpen = true
      }
    },
    toggleOff: function () {
      eventBus.$emit('toggleOff', this.item.name)
    }
  }
}

</script>

<style scoped>
  .add {
    display: inline-block;
    height: 60px;
    padding: 8px 6px;
    background: darkseagreen;
  }
  .itemname {
    display: inline-block;
    width: 60px;
    height: 60px;
    background: dodgerblue;
  }
  .tree-item {
    display: flex;
    margin: 0 20px;
    padding: 12px 8px;
  }
</style>
