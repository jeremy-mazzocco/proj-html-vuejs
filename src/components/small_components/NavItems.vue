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
        <a href="#">
            {{ detailsjumbo }}
        </a>
    </li>
</template>