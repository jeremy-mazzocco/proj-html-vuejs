<script>

export default {
    name: "NavItem",
    props: {
        detailsjumbo: String,
    }
}

</script>
<template>
    <li>
        {{ detailsjumbo }}
    </li>
</template>