<script>

export default {
    name: "ActionProjectsCards",
    props: {
        detailscardproject: Object,
    }
}

</script>

<template>
    <div class="card">
        <a href="#">
            <div class="transparent">
                <div class="description">{{ detailscardproject.description }}</div>
            </div>
        </a>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: calc((100% / 3) - 10px);
    height: 298px;
    border-radius: 10px;
    background-size: contain;
    background-repeat: no-repeat;

    .transparent {
        background-color: rgba(31, 31, 31, 0.5);
        height: 100%;
        border-radius: 10px;

        .description {
            padding-top: 220px;
            color: white;
            font-size: 19px;
            font-weight: 700;
            line-height: 1.1;
        }
    }
}
</style>