<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add Contact</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
</script>

<style scoped>
nav {
  margin-bottom: 2rem;
}
nav a {
  margin-right: 1rem;
  text-decoration: none;
  color: #42b983;
}

nav a:hover{
  color:blueviolet;
}
</style>

