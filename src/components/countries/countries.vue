<template>
   <countriesView :countriesData="loadData" />
</template>

<script>
import requests from './requests';
import countriesView from '/src/views/countries/countriesView.vue';

export default({
    data(){
        return {
            data: [],
            firstIndex: 0,
            lastIndex: 0,
            sliceData: [],
            cData: [],
        }
    },
    components:{
        countriesView
    },
    methods: {
        async getAllCountries(){
            const response = await fetch(requests.getAllCountries);
            this.data = await response.json();
            this.total = this.data.length;
        },
        async getbyRegion(){
            const response =
            await fetch(requests.getbyRegion(this.$store.state.currentRegion));
            this.data = await response.json();
            this.total = this.data.length;
        }
    },
    computed: {
        loadData(){
            if(this.$store.state.currentRegion == "All"){
                this.getAllCountries()
                this.lastIndex = this.$store.state.currentPage * 10;
                this.firstIndex = this.lastIndex - 10;
                this.sliceData = this.data.slice(this.firstIndex, this.lastIndex)
                this.cData = this.sliceData.map(d => d.name);
            } else {
               this.getbyRegion()
               this.lastIndex = this.$store.state.currentPage * 10;
               this.firstIndex = this.lastIndex - 10;
               this.sliceData = this.data.slice(this.firstIndex, this.lastIndex)
               this.cData = this.sliceData.map(d => d.name)
            }
            return this.cData
        },
        total: {
            get(){
                return this.$store.state.total
            },
            set(value) {
                this.$store.commit("SET_TOTAL", value)
            }
        }
    }
});

</script>
