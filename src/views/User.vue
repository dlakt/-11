<template>
    <div>
        <h2>Профиль пользователя</h2>
        <p><strong>ID пользователя:</strong> {{ userId }}</p>
        <p><strong>Получен из параметров маршрута:</strong> {{ $route.params.id }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = route.params.id
</script>