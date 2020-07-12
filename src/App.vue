<template>
  <tree-item
    class="item"
    :item="treeData"
    @make-folder="makeFolder"
    @add-item="addItem"
  ></tree-item>
</template>

<script>
import tree-item from '@/components/tree-item.vue'
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
        { name: 'item7' },
        {
          name: 'item8',
          selected: true,
          children: [
            {
              name: 'item9',
              children: [
                {
                  name: 'item10',
                  selected: true,
                  children: [{ name: 'item11' }, { name: 'item12' }]
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
    TreeList
  },
  data: function () {
    return {
      treeState: treeData
    }
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
</style>
