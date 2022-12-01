<template>
  <div>
    <Panel header="Gerenciamento de Estudantes">
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
      <!-- TODO: CRIAR A DATATABLE DE ESTUDANTES -->
      <DataTable
        ref="dt"
        :value="students"
        dataKey="id"
        :paginator="true"
        :rows="10"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Registro {first} de {last} de {totalRecords} Estudantes"
        responsiveLayout="scroll"
      >
        <template #header>
          <div
            class="table-header flex flex-column md:flex-row md:justiify-content-between"
          >
            <h5 class="mb-2 md:m-0 p-as-md-center">Estudantes</h5>
          </div>
        </template>

        
        <Column
          field="name"
          header="Nome"
          :sortable="true"
          style="min-width: 16rem"
        ></Column>
        <Column
          field="credential"
          header="Credencial"
          :sortable="true"
          style="min-width: 12rem"
        ></Column>
        <Column
          field="status"
          header="Status"
          :sortable="true"
          style="min-width: 12rem"
        ></Column>
        <Column
          field="contact"
          header="Contato"
          :sortable="true"
          style="min-width: 12rem"
        ></Column>
        <Column
          field="cpf"
          header="CPF"
          :sortable="true"
          style="min-width: 12rem"
        ></Column>

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
    <dialogForm 
    :title="titleForm"
    :studentSelected="student"
    @created = "created"
    @update = "update"
    />
    <ConfirmDialog></ConfirmDialog>
  </div>
</template>

<script>
  //FILTROS
  import { FilterMatchMode } from "primevue/api";

  //SERVICES
  import StudentService from "../../service/student/student_service";

  //COMPONENTES
  import DialogForm from "./components/DialogForms.vue";

  //MODELS
import Student  from "@/models/Student";

  export default {
    components: {DialogForm},
    data() {
      return {
        students: null,
        student: new Student(),
        filters: {},
        submitted: false,
        studentService: new StudentService(),
        visible: false,
        titleForm: null,
    };
    },

    created() {
    this.initFilters();
  },
    mounted() {
    this.findAll();
      console.log (this.student)
  },
  computed: {
    dialogForm: {
      get() {
        return this.$store.state.views.student.dialogForm;  
      },
      set(value) {
        this.$store.state.views.student.dialogForm = value;
      }
    }
  },
  methods: {
    findAll() {
      this.studentService.findAll().then((data) => {
        this.students = data;
      });
    },
    openNew() {
      this.student = new Student();
      this.titleForm = 'Novo Estudante';
      this.dialogForm = true;
    },
    openEdit(data) {
      this.student = data;
      this.dialogForm = true;
      this.titleForm = this.student.name;
      // TODO: OPEN EDIT
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
      this.students.push(data);
    },
    update(data) {
      this.delete(data);
      this.students.push(data);
    },
    delete(data) {
      //DELETAR O ITEM ANTERIOR
      let list = this.students.filter((t) => data.id != t.id);
      this.students = list;
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
