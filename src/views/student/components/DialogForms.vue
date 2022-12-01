<template>
    <Dialog
      :header="title"
      :visible="visible"
      :style="{ width: '500px' }"
      :modal="true"
      :closable="false"
      @hide="hideDialog"
      class="p-fluid"
    >
      <!-- TODO: CRIAR UM FORMULÁRIO -->
      <div class="field">
        <label for="name">Nome</label>
        <InputText
          id="name"
          type="text"
          v-model="value"
          placeholder="Digite o nome do Estudante"
        />
        </div>
      <div class="field">
        <label for="name">Credencial</label>
        <InputNumber
          id="name"
          type="text"
          v-model="value" mode="decimal"
          placeholder="Digite sua credencial"
        />
      </div>
      <div class="field">
        <label for="name">Contato</label>
        <InputMask
          id="name"
          type="text"
          v-model="value" mask="(99)-999999999"
          placeholder="(99)-99999-9999"
        />
      </div>
  
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
  //MODELS
  import Student from "@/models/Student";
  
  
  export default {
    props: ["studentSelected", "title"],
    data() {
      return {
        student: new Student(),
      };
    },
    computed: {
      visible: {
        get() {
          let value = this.$store.state.views.student.dialogForm;
          if (value === true) {
            this.getData();
          }
          return value;
        },
        set(value) {
          this.$store.state.views.student.dialogForm = value;
        },
      },
    },
    methods: {
      getData() {
        this.student = this.studentSelected;
      },
      hideDialog() {
        this.student = new Student();
        this.visible = false;
      },
    },
  };
  </script>
  
  <style></style>
  