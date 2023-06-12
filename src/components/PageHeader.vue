<script>
export default {
    name: "PageHeader"
}

</script>

<template>
    <header>
        <!-- header contact bar -->
        <div class="container">
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

.container {
    height: 30px;

}

nav {
    height: 50px;

    .logo {
        width: 140px;
    }
}

section {
    background-image: url(../assets/images/bg-parallax.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
}
</style>
