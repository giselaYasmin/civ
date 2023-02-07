<template>
    <div>
        <h3>Filtros por region</h3>
        <div v-for="region in allRegions" :key="region.id">
            <input type="radio" name="selectRegion"
            :value="region">
            {{region}}
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return{
            allRegions:
            ['All', 'Europe', 'Asia', 'Africa','Americas',
            'Oceania', 'Antarctic']
        }
    }
}
</script>