<script>

export default {
    name: "ActionProjectsCards",
    props: {
        detailscard: Object,
    }
}

</script>
<template>
    <div class="card">

        <div class="img">
            <img :src="detailscard.icon" alt="#">
        </div>

        <p>{{ detailscard.description }}</p>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: calc((100% / 3) - 10px);
    height: 400px;
    border-radius: 10px;
    padding: 40px;

    .img {

        width: 40px;
        filter: invert(17%) sepia(17%) saturate(2227%) hue-rotate(132deg) brightness(101%) contrast(94%);
    }
}
</style>