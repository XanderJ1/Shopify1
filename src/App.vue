<script setup>
import Home from '@/components/Home.vue';
import SignUp from '@/components/signUp.vue';
import Navbar from '@/components/Navbar.vue'
import { RouterView } from 'vue-router';  
</script>

<template>
  <header>
    <Navbar />
    <RouterView />
  </header>
</template>

<style scoped>
</style>
