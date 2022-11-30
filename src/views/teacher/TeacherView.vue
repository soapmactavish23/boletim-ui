<template>
  <div>
    <Panel header="Gerenciamento de Professores">
      <Toolbar>
        <template #start>
          <Button label="Novo" icon="pi pi-plus" class="mr-2" />
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
    </Panel>
  </div>
</template>

<script>
//FILTROS
import { FilterMatchMode } from "primevue/api";
export default {
  data() {
    return {
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
      },
    };
  },
};
</script>

<style></style>
