<template>
  <li class="checkbox-item">
    <div
      :class="{bold: isFolder}"
      @dblclick="makeFolder"
    >
      <input
        type="checkbox"
        id="checkbox"
        :value="item.selected"
        :checked="item.selected"
        @change="toggleCheckbox">
      <label for="checkbox" class="checkbox-label">{{ itemName }}: {{item.selected}}</label>
    </div>
    <ul v-if="isFolder">
      <checkbox-item
        class="item"
        v-for="child in item.children"
        :key="child.name"
        :item="child"
        @make-folder="$emit('make-folder', $event)"
      ></checkbox-item>
    </ul>
  </li>
</template>
<script>
import { eventBus } from './../main.js'
export default {
  name: 'CheckboxItem',
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
    makeFolder: function () {
      if (!this.isFolder) {
        this.$emit('make-folder', this.item)
        this.isOpen = true
      }
    },
    toggleCheckbox: function (event) {
      eventBus.$emit('toggleCheckbox', this.itemName, event.target.checked)
    }
  }
}

</script>

<style scoped>
  .add {
    display: block;
    width: 120px;
    height: 80px;
    background: darkseagreen;
  }
  .checkbox-label {
    padding: 14px 10px;
    background: lightgray;
    font-size: 18px;
  }

  .checkbox-item {
    margin: 40px auto;
  }
</style>
