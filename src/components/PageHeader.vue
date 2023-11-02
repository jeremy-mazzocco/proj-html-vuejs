<script>
import { store } from "../store";
import NavItem from "./small_components/NavItems.vue";

export default {
    name: "PageHeader",
    components: {
        NavItem,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <header>
        <div class="header-contact-bar">
            <div class="container">

                <div class="open-hours">
                    <i class="fa-solid fa-clock"></i>
                    {{ store.contact.open_hours }}
                </div>

                <div class="contact">
                    <span class="phone-number">
                        <i class="fa-solid fa-phone"></i>
                        {{ store.contact.phone_number }}
                    </span>

                    <span class="email">
                        <i class="fa-solid fa-envelope"></i>
                        <a href="#">
                            {{ store.contact.email }}
                        </a>
                    </span>

                    <span class="socials">
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                    </span>
                </div>
            </div>
        </div>

        <section>
            <nav>

                <div class="logo">
                    <a href="#">
                        <img src="../assets/svgs/svg-7.svg" alt="">
                    </a>
                </div>

                <div class="list">
                    <ul>
                        <NavItem v-for="(item, idx) in store.jumbotron_nav" :detailsjumbo="item" :key="idx" />
                    </ul>
                    <button id="btn-main">
                        get in touch
                    </button>
                </div>
            </nav>

            <div class="jumbotron-text">
                <h1>
                    Ready
                </h1>
                <h1>
                    Team
                </h1>
                <div class="text">
                    No matter what the comapany needs we will be ready to assist you in the best possible way.
                </div>
                <div>
                    <button id="btn-main">get in touch</button>
                    <button id="btn-second">read more</button>
                </div>
            </div>

        </section>
    </header>
</template>

<style lang="scss" scoped>
@use './styles/partials/mixins.scss' as*;
@use './styles/partials/colors.scss' as*;

.container,
nav,
ul,
.list {
    @include my-dislay-flex;
}

.header-contact-bar {
    height: 40px;
    background-color: $second-color;
    color: #C0C3D0;
    font-size: 12px;

    .fa-solid,
    .fa-brands {
        padding: 0px 3px;
    }

    span {
        padding: 0px 10px;
    }

    .fa-facebook-f,
    .fa-twitter,
    .fa-linkedin-in {
        margin: 0px 10px;
    }
}

section {
    position: relative;
    background-image: url(../assets/images/bg-parallax.png), url(../assets/images/background-sq.png);
    background-position-y: 50%;
    background-position-x: center;
    background-repeat: no-repeat;
    background-size: 3000px 900px;
    height: 700px;

    nav {
        height: 55px;
        font-size: 14px;
        padding-top: 15px;

        .logo {
            width: 100px;
        }

        li {
            padding: 5px 10px;
            margin: 0px 10px;
            text-transform: uppercase;
            color: $second-color;
        }

        li:hover {
            background-color: #05838316;
            border-radius: 5px;
        }

        button {
            @include my-button-main-color
        }
    }
    .jumbotron-text {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        h1 {
            @include titles-1;
            font-size: 55px;
            font-weight: 800;
            margin-right: 5px;
        }

        h1:nth-child(2) {
            @include titles-1-background;
        }

        .text {
            padding: 0px 22%;
            margin: 25px 0px;
            color: #8f9096;
        }

        button:first-child {
            @include my-button-main-color;
        }

        button {
            @include my-button-second-color;
            margin: 10px;
        }
    }
}
</style>
