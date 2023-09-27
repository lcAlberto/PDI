<template>
  <div class="flex flex-col justify-center items-center h-screen w-full gap-3">
    <h1 class="text-6xl">
      <font-awesome-icon :icon="['fas', 'wand-sparkles']" shake size="2xl" />
    </h1>
    <h1 class="text-3xl">Upload mágico</h1>
    <p>Arraste um arquivo pra cá</p>
    <div class="w-10/12 h-52 my-14">
      <div
          class="dropzone border-4 border-dashed rounded-xl flex items-center justify-center h-full"
          @dragover="handleDragOver"
          @dragleave="handleDragLeave"
          @drop="handleDrop"
          :class="{
            'border-1 border-red-500': isInvalidDropzone,
            'border-1 border-lime-500 text-accent-content/80 text-blue-500': isDragOver
          }"
      >
        <div
            v-if="isInvalidDropzone"
            class="text-center text-red-500"
        >
          <font-awesome-icon :icon="['fas', 'bomb']"  beat-fade size="2xs" class="text-7xl my-2" />
          <p v-if="errorMessage" v-html="errorMessage"/>
        </div>
        <div
            v-else-if="file.name"
            class="text-center text-green-500 group"
        >
          <div
              class="badge badge-error p-1 left-2/4 absolute hidden group-hover:inline-flex"
              @click="clear"
          >
            <font-awesome-icon :icon="['fas', 'xmark']" />
          </div>
          <font-awesome-icon :icon="['fas', 'file-circle-check']" size="2xl" class="text-5xl my-5" />
          <p>{{ file.name }}</p>
          <span>Tamanho: {{ file.size }} bytes</span>
        </div>
        <div
            v-else
            class="text-center"
        >
          <h1 class="text-5xl">
            <font-awesome-icon :icon="['fas', 'download']" beat-fade size="2xs" />
          </h1>
          <p v-if="isDragOver">Solte o arquivo aqui</p>
          <p v-else>Clique ou arraste o arquivo aqui</p>
        </div>
      </div>
      <input type="file" ref="fileInput" @change="handleFileSelect" style="display: none" />
    </div>
    <img :src="imagePreview" class="w-1/2"/>
    <button
        v-if="isInvalidDropzone"
        class="btn btn-error w-4/12"
        @click="clear"
    >
      Limpar
    </button>
    <button
        v-else-if="file && file.name"
        class="btn glass w-4/12">
      Enviar
    </button>
  </div>
</template>
<script lang="js">
export default {
  data() {
    return {
      isDragOver: false,
      isInvalidDropzone: false,
      file: {},
      errorMessage: '',
      imagePreview: '',
      availableTypes: [
        'image/png',
        'image/jpg',
        'audio/mpeg',
        'video/x-matroska',
        'application/pdf'
      ]
    };
  },
  methods: {
    handleDragOver(event) {
      event.preventDefault();
      this.isDragOver = true;
    },
    handleDragLeave(event) {
      event.preventDefault();
      this.isDragOver = false;
    },
    handleDrop(event) {
      event.preventDefault();
      this.isDragOver = false;

      const files = event.dataTransfer.files;

      if (files && files.length > 0) {
        this.validateAndUploadFile(files[0]);
      }
    },
    handleFileSelect() {
      const fileInput = this.$refs.fileInput;
      if (fileInput.files && fileInput.files.length > 0) {
        this.validateAndUploadFile(fileInput.files[0]);
      }
    },
    validateAndUploadFile(file) {
      // console.log(file);
      if (this.availableTypes.includes(file.type) && file.size < 1067264984) {
        this.file = file
        if (['image/png', 'image/jpg'].includes(file.type))
          this.showImagePreview(file)
      } else {
        this.isInvalidDropzone = true;
        this.errorMessage = this.availableTypes.includes(file.type) ?
            'Formato de arquivo inválido. Por favor, carregue um arquivo <br>'
            + `<b>${this.availableTypes.toString()}</b>`
            : file.size > 4000000
            ? '<b>mds que arquivo colossal! carregue um menor!</b>'
            : '<b>Ah esse arquivo não quero, mande outro</b> <br>' +
                'Mande um arquivo menor que 40000 bytes'
      }
    },
    showImagePreview(file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.imagePreview = event?.target?.result || '';
      };
      reader.readAsDataURL(file);
    },
    clear () {
      this.file = {}
      this.isDragOver = false
      this.isInvalidDropzone = false
      this.errorMessage = ''
      this.imagePreview = ''
    }
  },
};
</script>


<style scoped>

</style>