<template>
    <div v-for="data in countriesData" :key="data">
        {{ data.common }}
        {{ data.official }}
    </div>
</template>
<script>
export default({
    props: {
        countriesData: []
    }
})
</script>