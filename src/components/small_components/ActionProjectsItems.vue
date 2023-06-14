<script>

export default {
    name: "ActionProjectsItems",
    props: {
        detailsaction: String,
    }
}

</script>
<template>
    <li>
        <a href="#">
            {{ detailsaction }}
        </a>
    </li>
</template>