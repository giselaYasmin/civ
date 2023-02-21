<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">{{brandName}}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="route in routes" :key="route">
                <router-link :to="route.path" class="nav-link">{{route.name}}</router-link>
            </li>    
        </ul>
        </div>
    </div>
    </nav>
</template>
<script>
export default({
    props: {
        brandName: String
    },
    data(){
        return{
            routes: []
        }
    },
    created(){
        this.$router.options.routes.forEach(route => {
            this.routes.push({
                name: route.name,
                path: route.path
            })
        })
    }
})
</script>