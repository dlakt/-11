<template>
    <button @click="$emit('childemit')">
        Нажми меня, чтобы вызвать событие!
    </button>
</template>

<script setup>
</script>

<style scoped>
button {
    padding: 10px 20px;
    background-color: #fff;
    color: #42b983;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}
button:hover {
    background-color: #eee;
}
</style>