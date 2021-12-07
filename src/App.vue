<template>
  <div>
    <Header />

    <div class="align-center">
      <div>
        <div class="img-ctn">
          <img
            src="../assets/logo-vuejs.png"
            alt="Vue.js"
          >
          <img
            src="../assets/cypress.png"
            alt="Vue.js"
          >
          <img
            src="../assets/jest.png"
            alt="Vue.js"
          >
        </div>
        <h1> A minimal Vue.js boilerplate tested <br /> with Cypress and Jest. </h1>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style scoped>
.align-center {
  text-align: center;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  height: 150px;
  object-fit: contain;
}

.img-ctn {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 840px) {
  .img-ctn {
    flex-direction: column;
  }

  h1 {
    font-size: 1.1rem;
    /* text-align: right; */
  }

  img {
    height: 100px;
  }
}
</style>
