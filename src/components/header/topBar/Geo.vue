<template>
    <div>
        <i class="el-icon-location-outline font__color"></i>
        <span class="font__color">{{$store.state.city}}</span>
        <router-link to="/chooseCity" class="container-margin bottom_border">切换城市</router-link>
        [
        <router-link to="/" class="container-margin grey__color">句容</router-link>
        <router-link to="/" class="container-margin grey__color">仪征</router-link>
        <router-link to="/" class="container-margin grey__color">马鞍山</router-link>
        ]
    </div>
</template>