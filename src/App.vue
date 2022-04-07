<template>

    <div id="wrapper">

        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/Profile">Profile</router-link>
                </li>
                <li>
                    <router-link to="/Login">Login</router-link>
                </li>
                <li>
                    <router-link to="/TodosView">Todo</router-link>
                </li>
            </ul>

        </div>
        <router-view />
    </div>

</template>

<script lang="ts">
    import 'https://use.fontawesome.com/releases/v6.1.0/js/all.js'
    export default {};
</script>

<style>
    @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500');
    @import './assets/base.css';    
</style>