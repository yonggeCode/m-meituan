<template>
    <div class="searchBar clearFix">     
        <div class="logo">
            <router-link to="/">
            <img src="@/assets/image/logo.png" alt="">
            </router-link>
        </div>      
        <div class="search">
            <search/>
        </div>
    </div>
</template>
    
<script>
import Search from './Search'
export default {    
    components:{
        Search
    }   
}
</script>
<style lang="scss" scoped>
    .searchBar{
    width: 1190px;
    margin: 0 auto;
    text-align:left;
    position: relative;
    padding-bottom: 40px;
    .logo {
        width: 18.3rem;
        height: 4.5rem;
        padding: 28px 60px 40px 0;
        display: inline-block;
        vertical-align: sub;   
            img{
            width: 10.5rem;
            height: 3.8rem;
            cursor: pointer;
        }
    }
}

    
</style>
