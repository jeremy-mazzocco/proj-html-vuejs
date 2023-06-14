<script>
export default {
    name: "WhatWeAreDoing",
    props: {
        detailswhat: Object,
    }
}
</script>
<template>
    <div class="item">
        <div class="number">
            {{ detailswhat.number }}
        </div>
        <div class="text">
            {{ detailswhat.text }}
        </div>
    </div>
</template>
<style lang="scss">
@use '../styles/partials/colors.scss' as*;

.number {
    color: $main-color;
    font-weight: 600;
    font-size: 32px;
}

.text {
    color: white;
    font-weight: 600;
    font-size: 19px;
}
</style>