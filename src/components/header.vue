<template>
  <header>
    <nav>
        <h2> Minimal Vue Boilerplate</h2>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
nav {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 840px) {
  nav {
      display: none;
  }
}
</style>
