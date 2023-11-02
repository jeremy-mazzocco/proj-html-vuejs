<script>

export default {
    name: "TheCompanyCards",
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
        <h4>
            {{ detailscard.title }}
        </h4>
        <p>
            {{ detailscard.description }}
        </p>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as*;

.card {
    width: calc((100% / 2) - 10px);
    .img {
        display: inline-block;
        vertical-align: middle;

        img {
            filter: invert(40%) sepia(98%) saturate(498%) hue-rotate(133deg) brightness(98%) contrast(93%);
            width: 16px;
            margin-right: 5px;
        }
    }

    h4 {
        color: rgb(255, 255, 255);
        display: inline-block;
    }

    p {
        @include paragraph-style;
        color: rgb(218, 218, 218);
        margin: 16px 0px;
    }
}
</style>