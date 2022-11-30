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

        <Column field="name" header="Name" :sortable="true"></Column>
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
    <DialogForm :visible="visible" :title="titleForm"/>
  </div>
</template>

<script>
//FILTROS
import { FilterMatchMode } from "primevue/api";

//SERVICES
import TeacherService from "../../service/teacher/teacher_service";

//Components
import DialogForm from "./components/DialogForm.vue"

export default {
  components: {DialogForm},
  data() {
    return {
      teachers: null,
      product: {},
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
  methods: {
    findAll() {
      this.teacherService.findAll().then((data) => {
        this.teachers = data;
      });
    },
    openNew() {
      this.titleForm = 'Novo Professor';
      this.visible = true;
    },
    hideDialog() {
      this.visible = false;
    },
    openEdit() {
      // TODO: OPEN EDIT
    },
    openDelete() {
      // TODO: OPEN DELETE
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
