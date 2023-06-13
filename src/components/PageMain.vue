<script>
import { store } from "../store";
import ServiceCards from "./small_components/ServiceCards.vue";

export default {
    name: "PageMain",
    components: {
        ServiceCards,
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

    <!--    ABOUT THE NETWORK - 2 -->
    <section class="about-network">
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
                    For 12 yearswe have been providing audit for warranty, financial avice, risk advice, taxes and related
                    servies to select clients.
                </p>
                <div class="row">
                    <div class="card">
                        <h3>
                            Tradition
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="right">

        </div>
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
                display: inline-block;
                font-size: 40px;
                margin: 10px 0px;
                color: #21333E;
            }

            h2:nth-child(2) {
                @include background-titles;
                margin-left: 4px;
                padding: 0px 4px;
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

    .left {
        background-color: #111117;
        width: calc(100% / 2);
        height: 100%;
        position: relative;

        .text {
            width: 60%;
            position: absolute;
            right: 0;
            top: 12%;
            margin-right: 10px;

            h4 {
                @include intro-title;
            }

            .title {
                h2 {
                    display: inline-block;
                    font-size: 40px;
                    color: white;
                }

                h2:first-child {
                    background-color: rgba(27, 142, 142, 0.14);
                    border-radius: 5px;
                    margin: 10px 3px;
                    padding: 0px 10px;
                    color: white;
                }

                h2:nth-child(2) {
                    margin-left: 4px;
                }
            }

            p {
                @include paragraph-style;
                color: rgb(218, 218, 218);
                margin: 10px 0px;
            }

            .row {
                @include my-dislay-flex;
                gap: 10px;

                .card {
                    width: calc((100% / 2) - 10px);

                    h3 {
                        color: white;
                    }
                }

            }
        }
    }

    // ABOUT THE NETWOR - 2
    .right {
        background-image: url(../assets/images/about-4.jpg);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: calc(100% / 2);
        height: 100%;
    }
}
</style>
