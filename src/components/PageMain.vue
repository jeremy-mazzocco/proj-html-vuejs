<script>

export default {
    name: "PageMain"
}

</script>

<template>
    <section>
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
                    <button>
                        see all
                    </button>
                </div>
            </div>
            <!-- here the Services Cards -->
            <div class="row">
                <div class="card">
                    <div class="icons">
                        <div class="img">
                            <img src="../assets/svgs/svg-1.svg" alt="#">
                        </div>
                        <div class="fa">
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <h3>Audit & Assurance</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use './styles/partials/mixins.scss' as*;

section {
    background-color: #EEF4ED;
    height: 800px;

    .container {
        padding: 110px 0px;

        h4 {
            color: #00A6A6;
            text-transform: uppercase;
            font-size: 12px;
            margin: 10px 0px;
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
                color: #606D75;
                display: inline-block;
                width: 80%;
                font-size: 14px;
                font-weight: 300;
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
            gap: 10px;
            margin: 40px 0px;

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
                        filter: invert(19%) sepia(25%) saturate(643%) hue-rotate(158deg) brightness(89%) contrast(96%);
                    }

                    .fa {
                        position: absolute;
                        right: 0;

                        i {
                            color: #90C8C8;
                            font-size: 20px;
                        }
                    }
                }

                h3 {
                    color: #21333E;
                    margin: 10px 0px;
                }

                p {
                    color: #3f464b;
                    display: inline-block;
                    font-size: 13px;
                    font-weight: 300;
                    margin: 10px 0px;
                }
            }
        }
    }
}
</style>
