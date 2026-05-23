<script setup lang="ts">
import Myfooter from './components/Myfooter.vue';
import Myheader from './components/Myheader.vue';
import Mycomponent from './components/Mycomponent.vue';

</script>

<template>
    <div>
        <Myheader />
        <nav>
            <RouterLink to="/">Главная</RouterLink>
            |
            <RouterLink to="/about">О нас</RouterLink>

            <RouterLink to="/contact">контакт</RouterLink>

            <RouterLink to="/user/1">Пользователь 1</RouterLink> |
            
            <RouterLink to="/user/2">Пользователь 2</RouterLink>

        </nav>
        
        <hr />
        
        <RouterView />
        <hr />
        <Mycomponent />
        <Myfooter />
    </div>
</template>

<style>
nav {
    text-align: center;
    padding: 20px;
}
nav a {
    margin: 0 10px;
    text-decoration: none;
    color: green;
    font-weight: bold;
}
</style>