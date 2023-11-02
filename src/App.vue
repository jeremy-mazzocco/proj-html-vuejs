<script>
import { store } from "./store";
import PageHeader from "./components/PageHeader.vue";
import PageMain from "./components/PageMain.vue";

export default {
    components: {
        PageHeader,
        PageMain
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
    
</template>

<style lang="scss">
@use './components/styles/general.scss' as*;
</style>
