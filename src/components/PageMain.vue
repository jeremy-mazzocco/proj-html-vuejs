<script>
import { store } from "../store";
import ServiceCards from "./small_components/ServiceCards.vue";
import TheCompanyCards from "./small_components/TheCompanyCards.vue";
import ActionProjectsItems from "./small_components/ActionProjectsItems.vue";
import ActionProjectsCards from "./small_components/ActionProjectsCards.vue";
import WhatWeDoingCards from "./small_components/WhatWeDoingCards.vue";


export default {
    name: "PageMain",
    components: {
        ServiceCards,
        TheCompanyCards,
        ActionProjectsItems,
        ActionProjectsCards,
        WhatWeDoingCards
    },
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <!-- OUR BUSINESS AREA - 1 -->
    <section class="bussiness-area">
        <div class="container">
            <h4>
                our business areas
            </h4>
            <div class="title">
                <h2>
                    Excellence in
                </h2>
                <h2>
                    Services
                </h2>
            </div>
            <div class="description">
                <p>
                    We are leaders in providing consultancy services with a set of cuttng-edge technologies and a team of
                    expericed ad renowed professionals. These are some options that you can hire.
                </p>
                <div class="button">
                    <button id="btn-main">
                        see all
                    </button>
                </div>
            </div>
            <!-- here the Services Cards -->
            <div class="row">
                <ServiceCards v-for="(card, idx) in store.services_cards" :key="idx" :detailscard="card" />
            </div>
        </div>
    </section>

    <!-- ABOUT THE NETWORK - 2 -->
    <section class="about-network">
        <div class="top-dots">
            <img src="../assets/images/new-bullets.png" alt="#">
        </div>
        <div class="bottom-dots">
            <img src="../assets/images/new-bullets.png" alt="#">
        </div>
        <div class="left">
            <div class="text">
                <h4>
                    about the network
                </h4>
                <div class="title">
                    <h2>
                        The
                    </h2>
                    <h2>
                        Company
                    </h2>
                </div>
                <p>
                    For 12 years we have been providing audit for warranty, financial avice, risk advice, taxes and related
                    servies to select clients.
                </p>
                <div class="row">
                    <TheCompanyCards v-for="(card, idx) in store.thecompany_cards" :key="idx" :detailscard="card" />
                </div>
                <button class="fist-button" id="btn-main">
                    get in touch
                </button>
                <button class="second-button" id="btn-second">
                    read more
                </button>
            </div>
        </div>
        <div class="right">
        </div>
    </section>

    <!-- ACTION & PROJECTS - 3 -->
    <section class="actions-projects">
        <div class="container">
            <h4>
                we do more for everyone
            </h4>
            <div class="title">
                <h2>
                    Actions &
                </h2>
                <h2>
                    Projects
                </h2>
            </div>
            <div class="menu">
                <ul>
                    <ActionProjectsItems v-for="(item, idx) in store.action_and_projects_menu" :key="idx"
                        :detailsaction="item" />
                </ul>
            </div>
            <div class="row">
                <ActionProjectsCards v-for="(card, idx) in store.action_and_projects_cards" :key="idx"
                    :detailscardproject="card" :style='{ backgroundImage: "url(" + card.img + ")", }' />
            </div>
        </div>
    </section>
    <!-- WHAT WE ARE DOING - 4 -->
    <section class="what-we-are-doing">
        <div class="container">
            <h4>
                what we are doing
            </h4>
            <div class="title">
                <h2>
                    Results
                </h2>
                <h2>
                    in Numbers
                </h2>
            </div>
            <div class="results">
                <WhatWeDoingCards v-for="(item, idx) in store.what_we_are_doing_cards" :key="idx" :detailswhat="item" />
            </div>
        </div>
    </section>
    <!-- LOGOS -->
    <section class="logos">
        <div class="container">
            <div class="img">
                <img src="../assets/images/logo-4.png" alt="#">
            </div>
            <div class="img-5">
                <img src="../assets/images/logo-5.png" alt="#">
            </div>
            <div class="img-1">
                <img src="../assets/images/logo-1.png" alt="#">
            </div>
            <div class="img-2">
                <img src="../assets/images/logo-2.png" alt="#">
            </div>
            <div class="img">
                <img src="../assets/images/logo-3.png" alt="#">
            </div>
            <div class="img">
                <img src="../assets/images/logo-4.png" alt="#">
            </div>
        </div>
    </section>
    <!-- GET IN TOUCH -->
    <section class="get-in-touch">

    </section>
</template>

<style lang="scss" scoped>
@use './styles/partials/mixins.scss' as*;

// OUR BUSINESS AREA - 1
.bussiness-area {
    background-color: #EEF4ED;

    .container {
        padding: 110px 0px;

        h4 {
            @include intro-title;
        }

        .title {
            h2 {
                @include titles-1;
            }

            h2:nth-child(2) {
                @include titles-1-background;
            }
        }

        .description {
            position: relative;
            margin: 10px 0px;

            p {
                @include paragraph-style;
                display: inline-block;
                width: 80%;
            }

            .button {
                position: absolute;
                right: 0;
                top: 0;

                button {
                    @include my-button-main-color;
                }
            }
        }

        .row {
            @include my-dislay-flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 40px 0px;
        }
    }
}

// ABOUT THE NETWORK - 2 
.about-network {
    height: 700px;
    display: flex;
    position: relative;

    .top-dots,
    .bottom-dots {
        position: absolute;
        width: 8%;
        opacity: 0.3;
        z-index: 5;
        right: 46%;
    }

    .top-dots {
        top: -4%;
    }

    .bottom-dots {
        bottom: -5%;
    }

    .left {
        background-color: #111117;
        width: calc(100% / 2);
        height: 100%;
        position: relative;

        .text {
            width: 56%;
            position: absolute;
            right: 3%;
            top: 12%;
            margin-right: 10px;

            h4 {
                @include intro-title;
            }

            .title {
                h2 {
                    @include title-2;
                }

                h2:first-child {
                    @include title-2-background;
                }
            }

            p {
                @include paragraph-style;
                color: rgb(218, 218, 218);
                margin: 15px 0px;
            }

            .row {
                @include my-dislay-flex;
                flex-wrap: wrap;
                gap: 10px 15px;
                margin: 55px 0px;
            }

            .fist-button {
                @include my-button-main-color;
                margin: 0px 5px;
            }

            .second-button {
                @include my-button-second-color;
                background-color: black;
                color: white;
                margin: 0px 5px;
            }
        }
    }

    .right {
        background-image: url(../assets/images/about-4.jpg);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: calc(100% / 2);
        height: 100%;
    }
}

// ACTION & PROJECTS - 3 
.actions-projects {
    height: 1050px;
    padding: 90px 0px;
    text-align: center;

    .container {

        h4 {
            @include intro-title;
        }

        .title {
            h2 {
                @include titles-1;
            }

            h2:nth-child(2) {
                @include titles-1-background;
            }
        }

        .menu {
            margin: 20px 0px;
            padding: 0px 100px;
            font-size: 15px;

            ul {
                @include my-dislay-flex;

                li {
                    text-transform: uppercase;
                    color: #606D75;
                    padding: 7px 8px;
                }

                li:hover {
                    background-color: #05838316;
                    border-radius: 5px;
                }
            }
        }

        .row {
            @include my-dislay-flex;
            flex-wrap: wrap;
            gap: 20px 10px;
        }
    }
}

// WHAT WE ARE DOING - 4
.what-we-are-doing {
    height: 480px;
    padding: 90px 0px;
    text-align: center;
    background-image: url(../assets/images/bg-7.jpg);
    background-size: cover;
    background-position: center;

    .container {

        h4 {
            @include intro-title;
        }

        .title {
            h2 {
                @include title-2;
            }

            h2:first-child {
                @include title-2-background;
            }
        }

        .results {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px 0px;
            margin: 20px 0px;
            padding: 30px 45px;
        }
    }
}

// LOGOS
.logos {
    height: 220px;
    background-color: #111117;

    .container {
        @include my-dislay-flex;
        padding: 0px 15px;

        .img {
            width: 75px;
            filter: invert(82%) sepia(3%) saturate(35%) hue-rotate(314deg) brightness(82%) contrast(84%);
        }

        .img-5 {
            width: 50px;
            filter: invert(82%) sepia(3%) saturate(35%) hue-rotate(314deg) brightness(82%) contrast(84%);
        }

        .img-1,
        .img-2 {
            width: 100px;
            filter: invert(82%) sepia(3%) saturate(35%) hue-rotate(314deg) brightness(82%) contrast(84%);
        }
    }
}

// GET IN TOUCH
.get-in-touch {
    height: 700px;
}
</style>
