<template>
  <div class="kanban">
    <div
        v-for="(column, columnIndex) in columns"
        :key="columnIndex"
        class="column w-screen"
    >
      <!-- <h2>{{ column.title }}</h2> -->
      <div
          v-for="(card, cardIndex) in column.cards"
          :key="cardIndex"
          class="card"
          @dragstart="onDragStart(columnIndex, cardIndex)"
          @dragover.prevent
          @drop="onDrop(columnIndex, column, cardIndex, card)"
          draggable="true"
      >
        {{ card.text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
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
        { title: "Em andamento",
          cards: [
            { text: "Tarefa 7" },
            { text: "Tarefa 8" },
            { text: "Tarefa 9" },
          ] },
        { title: "Concluído", cards: [] },
      ],
      draggingColumnIndex: -1,
      draggingCardIndex: -1,
      originalColumn: {},
      movingCard: {},
      itens: [
        { id: 1, title: 'todo', lista: [
            { id: 1, title: 'kjfdhsfkj'},
            { id: 2, title: 'kjfdhsfkj'},
            { id: 3, title: 'kjfdhsfkj'},
            { id: 4, title: 'kjfdhsfkj'},
          ]}
      ]
    };
  },
  methods: {
    onDragStart(columnIndex: number, cardIndex: number) {
      console.log('começando...', columnIndex, cardIndex);
      this.originalColumn = this.columns[columnIndex]
      console.log(this.originalColumn);
      this.movingCard = this.columns[columnIndex].cards[cardIndex]
      console.log(this.movingCard);
      this.draggingColumnIndex = columnIndex;
      this.draggingCardIndex = cardIndex;
    },
    onDrop(targetColumnIndex: number, column: object, cardIndex: number, card: object) {
      let currentColumn: object = this.columns[targetColumnIndex]
      if (
          this.draggingColumnIndex === targetColumnIndex ||
          this.draggingColumnIndex === -1 ||
          this.draggingCardIndex === -1
      ) {
        if (currentColumn) {
          currentColumn.cards.splice(this.draggingCardIndex, 1)
          currentColumn.cards.splice(cardIndex, 0, this.movingCard);
        }
      } else {

        // Obtenha o cartão de destino
        const targetColumn = this.columns[targetColumnIndex];
        const targetCardIndex = Math.min(
            targetColumn.cards.length,
            this.draggingCardIndex
        );
        console.log(targetCardIndex, this.movingCard);

        // Mova o cartão da coluna de origem para a coluna de destino na posição correta
        const cardToMove = this.columns[this.draggingColumnIndex].cards.splice(
            this.draggingCardIndex,
            1
        )[0];

        currentColumn.cards.splice(cardIndex, 0, cardToMove);

        // this.columns[targetColumnIndex].cards.push(cardToMove);
      }

      // Limpe os índices de arrastar
      this.draggingColumnIndex = -1;
      this.draggingCardIndex = -1;
      this.originalColumn = {}
      this.movingCard = {}
    },
  },
};
</script>

<style scoped>
.kanban {
  display: flex;
  justify-content: space-between;
}

.column {
  width: 250px;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #aeff35;
  margin-right: 10px;
}

.card {
  padding: 10px;
  background-color: white;
  border: 1px solid #ccc;
  margin: 5px 0;
  cursor: grab;
}
</style>
