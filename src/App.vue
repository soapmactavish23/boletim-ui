<template>
  <Toast />
  <h1 class="text-center">Boletim Escolar</h1>
  <hr />
  <nav>
  <TabMenu :model="items" />
  </nav>
  <hr />
  <router-view />
</template>
<Carousel :value="cars" :numVisible="3" :numScroll="1">
	<template #item="slotProps">
	</template>
</Carousel>
<script>
export default {
	data() {
		return {
			items: [
                {label: 'Menu', icon: 'pi pi-fw pi-home', to: '/login'},
                {label: 'Notas', icon: 'pi pi-fw pi-calendar', to: '/metter'},
                {label: 'Estudantes', icon: 'pi pi-fw pi-user-edit', to: '/student'},
                {label: 'Professores', icon: 'pi pi-fw pi-file', to: '/teacher'},
                {label: 'Sair', icon: 'pi pi-fw pi-cog'}
            ]
		}
	}
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  text-align: center;
  color: #2c3e50;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
