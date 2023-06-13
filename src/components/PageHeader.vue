<script>
import { store } from "../store";
import NavItem from "./NavItem.vue";

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
        <!-- header contact bar -->
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
                        {{ store.contact.email }}
                    </span>
                    <span class="socials">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </span>
                </div>
            </div>
        </div>
        <!-- header jumbotron -->
        <section>
            <nav>
                <div class="logo">
                    <img src="../assets/svgs/svg-7.svg" alt="">
                </div>
                <div class="list">
                    <!-- here the nav  -->
                    <ul>
                        <NavItem v-for="(item, idx) in store.jumbotron_nav" :detailsjumbo="item" :key="idx" />
                    </ul>
                    <button>
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
                    <button>get in touch</button>
                    <button>read more</button>
                </div>
            </div>
        </section>
    </header>
</template>

<style lang="scss" scoped>
@use './styles/partials/mixins.scss' as*;

.container,
nav,
ul,
.list {
    @include my-dislay-flex;
}

//  <!-- header contact bar -->
.header-contact-bar {
    height: 40px;
    background-color: #21333E;
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

// <!-- header jumbotron -->
section {
    position: relative;
    background-image: url(../assets/images/bg-parallax.png);
    background-position-y: 50%;
    background-position-x: center;
    background-repeat: no-repeat;
    height: 800px;

    nav {
        height: 55px;
        font-size: 14px;

        .logo {
            width: 100px;
        }

        li {
            padding: 0px 10px;
            margin: 0px 10px;
            text-transform: uppercase;
            color: #21333E;
        }

        button {
            @include my-button-main-color
        }
    }

    .jumbotron-text {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        h1:first-child {
            color: #21333E;
        }

        h1 {
            display: inline-block;
            font-size: 55px;
            font-weight: 800;
            margin: 5px;
        }

        h1:nth-child(2) {
            @include background-titles;
            padding: 0px 10px;
            border-radius: 3px;
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
