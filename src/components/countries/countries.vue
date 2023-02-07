<template>
    {{ data.map((d) => d.region ) }}
</template>

<script>
import requests from './requests';
export default({
    data(){
        return {
            data: [],
        }
    },
    methods: {
        async getAllCountries(){
            const response = await fetch(requests.getAllCountries);
            this.data = await response.json();
        },
        async getbyRegion(){
            const response = await fetch(requests.getbyRegion('africa'));
            this.data = await response.json();
        }
    },
    created(){
        this.getAllCountries();
    }
});

</script>
