<template>
  <h1 class="text-center">Boletim Escolar</h1>
  <hr />
  <nav>
    <router-link to="/">Gerenciamento de Notas</router-link> |
    <router-link to="/student">Gerenciamento de Estudantes</router-link> |
    <router-link to="/teacher">Gerenciamento de Professores</router-link>
  </nav>
  <hr />
  <router-view />
</template>

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
