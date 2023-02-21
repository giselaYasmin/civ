<template>
    <div class="row h-100 w-100">
        <h1>API Countries</h1>
    </div>
    <div class="row h-100 w-100">
        <div class="col-sm-3">
            <filters />
        </div>
        <div class="col-sm-9">
            <countries />
        </div>
        <div class="container d-flex align-items-center justify-content-center">
            <paginate />
        </div>    
    </div>
</template>

<script>
import countries from '/src/components/countries/countries.vue';
import filters from '/src/components/countries/filters.vue';
import paginate from '/src/components/countries/paginate.vue'

export default({
    components:{
        countries,
        filters,
        paginate
    }
});

</script>