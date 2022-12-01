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
        v-model="teacher.name"
        placeholder="Digite o nome do professor"
      />
    </div>

    <div class="field">
      <label for="name">Contato</label>
      <InputMask
        id="name"
        type="text"
        v-model="teacher.contact"
        mask="(99)-999999999"
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
      <Button label="Salvar" icon="pi pi-check" autofocus @click="save" />
    </template>
  </Dialog>
</template>

<script>
//MODELS
import Teacher from "@/models/Teacher";

export default {
  props: ["teacherSelected", "title"],
  data() {
    return {
      teacher: new Teacher(),
    };
  },
  computed: {
    visible: {
      get() {
        let value = this.$store.state.views.teacher.dialogForm;
        if (value === true) {
          this.getData();
        }
        return value;
      },
      set(value) {
        this.$store.state.views.teacher.dialogForm = value;
      },
    },
  },
  methods: {
    getData() {
      this.teacher = this.teacherSelected;
    },
    save() {
      if (this.teacher.id === null) {
        this.create();
      } else {
        this.update();
      }
      this.hideDialog();
    },
    create() {
      this.$emit("create", this.teacher);
    },
    update() {
      this.$emit("update", this.teacher);
    },
    hideDialog() {
      this.teacher = new Teacher();
      this.visible = false;
    },
  },
};
</script>

<style></style>
