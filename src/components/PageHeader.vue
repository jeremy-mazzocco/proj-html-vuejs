<script>
export default {
    name: "PageHeader"
}

</script>

<template>
    <header>
        <!-- header contact bar -->
        <div class="container" id="header-contact-bar">
            <div class="open-hours">
                Open Hours: Mon-Sat - 9:00-18:00
            </div>
            <div class="contact">
                <span class="phone-number">
                    +1(305)1234-5678
                </span>
                <span class="email">
                    hello@example.com
                </span>
                <span class="socials">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </span>
            </div>
        </div>
        <!-- header jumbotron -->
        <section>
            <nav>
                <div class="logo">
                    <img src="../assets/svgs/svg-7.svg" alt="">
                </div>
                <div class="list">
                    <ul>
                        <li>home</li>
                        <li>sevices</li>
                        <li>about</li>
                        <li>projects</li>
                        <li>results</li>
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
                <div>
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
@use './styles/general.scss' as*;

.container,
nav,
ul,
.list {
    @include my-dislay-flex;
}

#header-contact-bar {
    height: 30px;
}

section {
    position: relative;
    background-image: url(../assets/images/bg-parallax.png);
    background-position: center;
    background-size: 2500px 600px;
    background-repeat: no-repeat;
    height: 500px;

    nav {
        height: 50px;

        .logo {
            width: 140px;
        }
    }

    .jumbotron-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        h1 {
            display: inline-block;
            font-size: 50px;
        }
    }
}
</style>
