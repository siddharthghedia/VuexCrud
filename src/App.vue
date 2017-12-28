<template>
  <div id="app">
    <navbar></navbar>
    <app-main></app-main>
  </div>
</template>

<script>
    import Navbar from '@/components/layout/Navbar'
    import AppMain from '@/components/layout/AppMain'
    export default {
      name: 'app',
      components: {
        Navbar,
        AppMain
      }
    }
</script>

<style lang="css">
  html {
    background-color: whitesmoke;
  }
</style>