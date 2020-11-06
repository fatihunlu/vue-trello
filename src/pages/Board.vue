<template>
  <div>
    <kanban-board
      :stages="stages.map(x => `status-${x.id}`)"
      :blocks="modifiedBlocks"
      @update-block="updateBlock"
    >
      <div v-for="stage in stages" :slot="`status-${stage.id}`" :key="stage.id">
        <h2>{{ stage.name }}</h2>
      </div>
      <div v-for="block in modifiedBlocks" :slot="block.id" :key="block.id">
        <div>
          <strong> {{ block.id }} </strong>
        </div>
        <div>
          {{ block.title }}
        </div>
      </div>
    </kanban-board>
  </div>
</template>

<script>

import '../styles/kanban-board.css';

export default {
    data() {
        return {
            stages: [],
            blocks: []
        }
    },

    created() {
      const vm = this;

      vm.getBoard();
    },

    methods: {
      getBoard() {
        const vm = this;


        if (vm.$route.params.id) {
          if (vm.$route.params.id === 1) {
              vm.stages.push(
                {
                  id: 1,
                  name: 'on-hold'
                },
                {
                  id: 2,
                  name: 'in-progress'
                },
                {
                  id: 3,
                  name: 'needs-review'
                },
                {
                  id: 4,
                  name: 'approved'
                }
              );
              vm.blocks.push(
                  {
                  id: 1,
                  status: 2,
                  title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,',
                  },
                  {
                  id: 2,
                  status: 1,
                  title: 'Test',
                  },
                  {
                  id: 3,
                  status: 3,
                  title: 'It was popularised in the 1960s with the release of Letraset sheets',
                  },
                  {
                  id: 4,
                  status: 3,
                  title: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                  }
              );
          }
          else if (vm.$route.params.id === 2) {
              vm.stages.push(
                {
                  id: 1,
                  name: 'on-hold'
                },
                {
                  id: 2,
                  name: 'in-progress'
                },
                {
                  id: 3,
                  name: 'needs-review'
                },
                {
                  id: 4,
                  name: 'approved'
                }
              );
              vm.blocks.push(
                  {
                  id: 1,
                  status: 2,
                  title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,',
                  },
                  {
                  id: 2,
                  status: 1,
                  title: 'Test',
                  },
                  {
                  id: 3,
                  status: 3,
                  title: 'It was popularised in the 1960s with the release of Letraset sheets',
                  }
              );
          }
          else if (vm.$route.params.id === 3) {
              vm.stages.push(
                {
                  id: 1,
                  name: 'on-hold'
                },
                {
                  id: 2,
                  name: 'in-progress'
                },
                {
                  id: 3,
                  name: 'needs-review'
                },
                {
                  id: 4,
                  name: 'approved'
                },
                {
                  id: 5,
                  name: 'backlog'
                }
              );
              vm.blocks.push(
                  {
                  id: 1,
                  status: 2,
                  title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,',
                  },
                  {
                  id: 2,
                  status: 1,
                  title: 'Test',
                  },
                  {
                  id: 3,
                  status: 3,
                  title: 'It was popularised in the 1960s with the release of Letraset sheets',
                  },
                  {
                  id: 4,
                  status: 3,
                  title: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                  },
                  {
                  id: 5,
                  status: 1,
                  title: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                  },
                  {
                  id: 6,
                  status: 1,
                  title: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
                  }
              );
          }
        }

        return;
      },

      updateBlock(id, status) {
          this.modifiedBlocks.find(b => b.id === Number(id)).status = status;
      }
    },

    computed: {
      modifiedBlocks() {
        const blocks = this.blocks.map(x => ({
          id: x.id,
          status: "status-" + x.status,
          title: x.title
        }));

        return blocks; 
      }
    }
}
</script>

<style>
</style>