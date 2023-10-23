<template>
  <div class="flex">
    <Container
        @drag-start="dragStart"
        @drop="onColumnDrop"
        class="grid grid-flow-col auto-cols-max gap-5"
    >
      <Draggable
          v-for="column in columns"
          :key="column.id"
          class="card w-96 bg-base-100 shadow-xl"
      >
        <div class="card-body">
          <div class="card-column-header">
            <h2 class="card-title">{{ column.title }}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
<!--            <span class="column-drag-handle">&#x2630;</span>-->
          </div>
          <Container
              group-name="col"
              @drop="(e) => onCardDrop(column, e)"
              @drag-start="(e) => dragStart(e)"
              @drag-end="(e) => dragEnd(e)"
              :get-child-payload="getCardPayload(column.id)"
              drag-class="card-ghost"
              drop-class="card-ghost-drop"
              :drop-placeholder="dropPlaceholderOptions"
              class="flex flex-col gap-4"
          >
            <Draggable v-for="card in column.cards" :key="card.id">
              <div class="card bg-primary text-primary-content">
                <div class="card-body">
                  <h2 class="card-title">
                    Task #
                    <span class="bold">{{ card.text }}</span>
                  </h2>
                  <p class="card-text">Taskzinha</p>
                  <div class="card-actions justify-end">
                    <button class="btn">Buy Now</button>
                  </div>
                </div>
              </div>
            </Draggable>
          </Container>
        </div>
      </Draggable>
    </Container>
  </div>
</template>

<script lang="ts">
import { Container, Draggable } from "vue-dndrop";
// import { applyDrag, generateItems } from "./utils";

export default {
  name: "kanban2Page",

  components: { Container, Draggable },

  data() {
    return {
      columns: [
        {
          id: 1,
          title: "A fazer",
          cards: [
            {
              id: 1,
              step_id: 1,
              text: "Tarefa 1"
            },{
              id: 2,
              step_id: 1,
              text: "Tarefa2"
            },{
              id: 3,
              step_id: 1,
              text: "Tarefa 3"
            },{
              id: 4,
              step_id: 1,
              text: "Tarefa 4"
            },{
              id: 5,
              step_id: 1,
              text: "Tarefa 5"
            },
          ]
        },{
          id: 2,
          title: "fazendo",
          cards: [
            {
              id: 6,
              step_id: 2,
              text: "Tarefa 6"
            },{
              id: 7,
              step_id: 2,
              text: "Tarefa 7"
            },{
              id: 8,
              step_id: 2,
              text: "Tarefa 8"
            },{
              id: 9,
              step_id: 2,
              text: "Tarefa 9"
            },{
              id: 10,
              step_id: 2,
              text: "Tarefa 10"
            },
          ]
        },
      ],
      upperDropPlaceholderOptions: {
        className: "cards-drop-preview",
        animationDuration: "150",
        showOnTop: true,
      },
      dropPlaceholderOptions: {
        className: "drop-preview",
        animationDuration: "150",
        showOnTop: true,
      },
    };
  },

  methods: {
    onColumnDrop() {
      // console.log(dropResult);
    },

    onCardDrop(column: object, { addedIndex, payload }) {
      if (column.id === payload.step_id) {
        const index = column.cards.indexOf(payload)
        if (index !== -1)
          column.cards.splice(index, 1)
      } else if (addedIndex !== null) {
        column.cards.splice(addedIndex, 0, payload)
      }
    },


    getCardPayload(columnId) {
      return (index) => {
        return this.columns.filter((col) => col.id === columnId)[0].cards[index];
      };
    },

    dragStart() {
      // console.log("drag started");
    },

    dragEnd () {},

    log(...params) {
      console.log(...params);
    },
  },
};
</script>

<style scoped>

</style>