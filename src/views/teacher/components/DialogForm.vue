<template>
  <Dialog
    :header="title"
    :visible="visible"
    :style="{ width: '500px' }"
    :modal="true"
  >
    Dialog Form
    <template #footer>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        class="p-button-text"
        @click="hideDialog"
      />
      <Button label="Salvar" icon="pi pi-check" autofocus />
    </template>
  </Dialog>
</template>

<script>
export default {
  props: ["visible", "title"],
  data() {
    return {
      display: false,
    };
  },
  watch: {
    visible(val) {
      this.display = val;
    },
    hideDialog() {
        this.display = false;
    },
  },
};
</script>

<style></style>
