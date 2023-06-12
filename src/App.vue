<script>
import { store } from "./store";
import PageHeader from "./components/PageHeader.vue";
import PageMain from "./components/PageMain.vue";
import PageFooter from "./components/PageFooter.vue";

export default {
    components: {
        PageHeader,
        PageMain,
        PageFooter
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <PageHeader />
    <PageMain />
    <PageFooter />
</template>

<style></style>
