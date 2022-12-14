<template>
  <div>
    <Panel class="card" header="Gerenciamento de Professores">
      <Toolbar class="mb-4">
        <template #start>
          <Button
            label="Novo"
            icon="pi pi-plus"
            class="p-button-success mr-2"
            @click="openNew"
          />
        </template>

        <template #end>
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
              v-model="filters['global'].value"
              placeholder="Pesquisar..."
            />
          </span>
        </template>
      </Toolbar>
      <!-- TODO: CRIAR A DATATABLE DE PROFESSORES -->

      <DataTable
        ref="dt"
        :value="teachers"
        dataKey="id"
        :paginator="true"
        :rows="10"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Registro {first} de {last} de {totalRecords} Professores"
        responsiveLayout="scroll"
      >
        <template #header>
          <div
            class="table-header flex flex-column md:flex-row md:justiify-content-between"
          >
            <h5 class="mb-2 md:m-0 p-as-md-center">Professores</h5>
          </div>
        </template>

        <Column field="name" header="Nome" :sortable="true"></Column>
        <Column field="contact" header="Contato" :sortable="true"></Column>

        <Column :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <Button
              icon="pi pi-pencil"
              class="p-button-rounded p-button-success mr-2"
              @click="openEdit(slotProps.data)"
            />
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-warning"
              @click="openDelete(slotProps.data)"
            />
          </template>
        </Column>
      </DataTable>
    </Panel>
    <dialog-form
      :title="titleForm"
      :teacherSelected="teacher"
      @create="create"
      @update="update"
    />
    <ConfirmDialog></ConfirmDialog>
  </div>
</template>

<script>
//FILTROS
import { FilterMatchMode } from "primevue/api";

//SERVICES
import TeacherService from "../../service/teacher/teacher_service";

//Components
import DialogForm from "./components/DialogForm.vue";

//MODELS
import Teacher from "@/models/Teacher";

export default {
  components: { DialogForm },
  data() {
    return {
      teachers: null,
      teacher: new Teacher(),
      filters: {},
      submitted: false,
      teacherService: new TeacherService(),
      visible: false,
      titleForm: null,
    };
  },
  created() {
    this.initFilters();
  },
  mounted() {
    this.findAll();
  },
  computed: {
    dialogForm: {
      get() {
        return this.$store.state.views.teacher.dialogForm;
      },
      set(value) {
        this.$store.state.views.teacher.dialogForm = value;
      },
    },
  },
  methods: {
    findAll() {
      this.teacherService.findAll().then((data) => {
        this.teachers = data;
      });
    },
    openNew() {
      this.teacher = new Teacher();
      this.titleForm = "Novo Professor";
      this.dialogForm = true;
    },
    openEdit(data) {
      this.teacher = data;
      this.dialogForm = true;
      this.titleForm = this.teacher.name;
    },
    openDelete(data) {
      this.$confirm.require({
        message: "Tem certeza que deseja excluir o registro?",
        header: "Confirme",
        icon: "pi pi-exclamation-triangle",
        acceptLabel: "Sim",
        rejectLabel: "Não",
        accept: () => {
          this.delete(data)
        },
      });
    },
    create(data) {
      this.teachers.push(data);
    },
    update(data) {
      this.delete(data);
      this.teachers.push(data);
    },
    delete(data) {
      //DELETAR O ITEM ANTERIOR
      let list = this.teachers.filter((t) => data.id != t.id);
      this.teachers = list;
    },
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    align-items: start;
  }
}

.product-image {
  width: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.p-dialog .product-image {
  width: 50px;
  margin: 0 auto 2rem auto;
  display: block;
}

.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 960px) {
  ::v-deep(.p-toolbar) {
    flex-wrap: wrap;

    .p-button {
      margin-bottom: 0.25rem;
    }
  }
}
</style>
