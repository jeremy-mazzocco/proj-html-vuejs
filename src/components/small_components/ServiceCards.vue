<script>

export default {
    name: "ServiceCards",
    props: {
        detailscard: Object,
    }
}

</script>


<template>
    <div class="card">
        <div class="icons">
            <div class="img">
                <img :src="detailscard.icon" alt="#">
            </div>
            <div class="fa">
                <a href="#">
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </div>
        <h3>{{ detailscard.title }}</h3>
        <p>{{ detailscard.description }}</p>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as*;
@use '../styles/partials/colors.scss' as *;

.card {
    width: calc((100% / 3) - 10px);
    background-color: white;
    height: 240px;
    border-radius: 10px;
    padding: 40px;

    .icons {
        position: relative;

        .img {
            display: inline-block;
            width: 40px;
            filter: invert(17%) sepia(17%) saturate(2227%) hue-rotate(132deg) brightness(101%) contrast(94%);
        }

        .fa {
            position: absolute;
            right: 0;
            padding: 4px 5px;
            border-radius: 50px;

            i {
                color: #90C8C8;
                font-size: 20px;
            }
        }

        .fa:hover {
            background-color: rgb(129, 217, 217);

            i {
                color: rgb(18, 138, 139)
            }
        }
    }

    h3 {
        color: $second-color;
        margin: 10px 0px;
    }

    p {
        @include paragraph-style;
        display: inline-block;
        margin: 10px 0px;
    }
}
</style>