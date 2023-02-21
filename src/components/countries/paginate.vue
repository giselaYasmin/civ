<template>
    <Paginate
        :page-count="pageCounter"
        v-model="currentPage"
        :page-range="3"
        :margin-pages="2"
        :prev-text="'Anterior'"
        :next-text="'Siguiente'"
    />
</template>

<script>
import Paginate from 'vuejs-paginate-next';

export default({
    data(){
        return{
            pageCount: 0
        }
    },
    components: {
        Paginate
    },
    computed: {
        pageCounter(){
            this.pageCount = Math.ceil(this.$store.state.total/10);

            if(this.$store.state.currentPage>this.pageCount){
                this.$store.state.currentPage = 1
            }
            return this.pageCount
        },
        currentPage: {
            get(){
                return this.$store.state.currentPage
            },
            set(value) {
                this.$store.commit("SET_CURRENTPAGE", value)
            }
        }
    }
})

</script>
<style lang="css">
  /* Adopt bootstrap pagination stylesheet. */
  @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";

  /* Write your own CSS for pagination */
  .pagination {
  }
  .page-item {
  }
</style>