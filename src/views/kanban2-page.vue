<template>
  <div>
    <Container
        orientation="horizontal"
        @drop="onColumnDrop($event)"
        drag-handle-selector=".column-drag-handle"
        @drag-start="dragStart"
        :drop-placeholder="upperDropPlaceholderOptions"
    >
      <Draggable v-for="column in columns" :key="column.id">
        <div>
          <div class="card-column-header">
            <span class="column-drag-handle">&#x2630;</span>
            {{ column.title }}
          </div>
          <Container
              group-name="col"
              @drop="(e: any) => onCardDrop(column.id, e)"
              @drag-start="(e: any) => log('drag start', e)"
              @drag-end="(e: any) => log('drag end', e)"
              :get-child-payload="getCardPayload(column.id)"
              drag-class="card-ghost"
              drop-class="card-ghost-drop"
              :drop-placeholder="dropPlaceholderOptions"
          >
            <Draggable v-for="card in column.cards" :key="card.id">
              <div>
                <h3>Task # {{ card.title }}</h3>
                <p class="card-text">Taskzinha</p>
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
        { title: "A fazer", cards: [
            { text: "Tarefa 0" },
            { text: "Tarefa 1" },
            { text: "Tarefa 2" },
            { text: "Tarefa 3" },
            { text: "Tarefa 4" },
            { text: "Tarefa 5" },
            { text: "Tarefa 6" },
          ]},
        { title: "Em andamento", cards: [
            { text: "Tarefa 7" },
            { text: "Tarefa 8" },
            { text: "Tarefa 9" },
          ] },
        { title: "Concluído", cards: [] },
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
    onColumnDrop(dropResult: object) {
      const scene = Object.assign({}, this.scene);
      scene.children = applyDrag(scene.children, dropResult);
      this.scene = scene;
    },

    onCardDrop(columnId: number, dropResult: object) {
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const scene = Object.assign({}, this.scene);
        const column = scene.children.filter((p: object) => p.id === columnId)[0];
        const columnIndex = scene.children.indexOf(column);

        const newColumn = Object.assign({}, column);
        newColumn.children = applyDrag(newColumn.children, dropResult);
        scene.children.splice(columnIndex, 1, newColumn);

        this.scene = scene;
      }
    },

    getCardPayload(columnId: number) {
      return (index: number) => {
        return this.scene.children.filter((p: object) => p.id === columnId)[0].children[
            index
            ];
      };
    },

    dragStart() {
      console.log("drag started");
    },

    log(...params) {
      console.log(...params);
    },
  },
};
</script>

<style scoped>

</style>