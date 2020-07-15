<template>
  <div class="flex">
  <tree-item
    class="item"
    :item="treeState"
    @make-folder="makeFolder"
  ></tree-item>
  <checkbox-item
    class="checkbox-item"
    :item="treeState"
    @make-folder="makeFolder"
  ></checkbox-item>
    {{this.treeState.children}}
  </div>
</template>

<script>
import { eventBus } from '@/main'
import TreeItem from '@/components/tree-item'
import CheckboxItem from './components/checkbox-item'
const treeData = {
  name: 'root',
  selected: true,
  children: [
    {
      name: 'item1',
      selected: true
    },
    {
      name: 'wat',
      selected: true
    },
    {
      name: 'item2',
      selected: true,
      children: [
        {
          name: 'item3',
          selected: true,
          children: [{ name: 'item4' }, { name: 'item5' }]
        },
        {
          name: 'item6',
          selected: true
        },
        {
          name: 'item7',
          selected: true
        },
        {
          name: 'item8',
          selected: true,
          children: [
            {
              name: 'item9',
              selected: true,
              children: [
                {
                  name: 'item10',
                  selected: true,
                  children: [
                    { name: 'item11', selected: true },
                    { name: 'item12', selected: true }
                  ]
                },
                { name: 'item13', selected: true }
              ]
            },
            { name: 'item14', selected: true }
          ]
        }
      ]
    }
  ]
}

export default {
  name: 'App',
  components: {
    CheckboxItem,
    TreeItem
  },
  data: function () {
    return {
      treeState: treeData,
      searchName: ''
    }
  },
  computed: {
    treeStateComputed: function () {
      return this.treeState
    }
  },
  methods: {
    makeFolder: function (item) {
      const vm = this
      vm.$set(item, 'children', [])
    }
  },
  created () {
    eventBus.$on('toggleOff', (name) => {
      const findItem = function (array) {
        return array.find(item => {
          if (item.name === name) {
            console.log('this name', item.name)
            item.selected = false
            return true
          } else if (item.children && item.children.length) {
            findItem(item.children)
          }
        })
      }
      findItem(this.treeState.children)
    })
    eventBus.$on('toggleCheckbox', (name, checked) => {
      console.log(`${name}-имя`)
      console.log(`${checked}-изактикв`)
      console.log('евентбас!')
      const findItemCheckbox = function (array) {
        return array.find(item => {
          if (item.name === name) {
            console.log('this name', item, 'this.selected', checked)
            item.selected = checked
            return true
          } else if (item.children && item.children.length) {
            findItemCheckbox(item.children)
          }
        })
      }
      findItemCheckbox(this.treeState.children)
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  ul,li,ol {
    text-underline: none;
    list-style: none;
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
  .checkbox-item {
    flex: 1 0 50%;
  }
</style>
