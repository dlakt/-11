<template>
    <div>
        <h2>{{ title }}</h2>
        <div class="photo-item" v-for="(item, index) in images" :key="index">
            <img :src="item.url" alt="photo" width="150">
            <p>{{ item.title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title'],
    data() {
        return {
            // Готовые картинки с работающего сервера
            images: [
    { url: 'https://placehold.co/150x150/42b983/white?text=Фото+1' },
    { url: 'https://placehold.co/150x150/42b983/white?text=Фото+2'},
    { url: 'https://placehold.co/150x150/42b983/white?text=Фото+3'},
    { url: 'https://placehold.co/150x150/42b983/white?text=Фото+4'},
    { url: 'https://placehold.co/150x150/42b983/white?text=Фото+5'}
]
        }
    }
}
</script>

<style scoped>
.photo-item {
    display: inline-block;
    margin: 10px;
    text-align: center;
}
img {
    border-radius: 8px;
    border: 1px solid #ccc;
}
</style>