<template>
    <header>
        <h1>Шапка сайта</h1>
        <p>Это верхняя часть страницы</p>
        <slot />
        <Child_comp @childemit="actionEmit" />
    </header>
</template>

<script setup>
import Child_comp from './Child_comp.vue'
function actionEmit() {
  console.log(' событие emit');
}
</script>



<style scoped>
header {
    background-color: #42b983;
    color: white;
    padding: 20px;
    text-align: center;
}
</style>