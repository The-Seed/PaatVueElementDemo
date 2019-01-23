<template>
    <div id="wrap">
        <Header />
        <div id="container">
            <router-link to="/">GO HOME</router-link> 
            <router-link to="/a">GO A PAGE</router-link> 
            <router-link to="/b">GO B PAGE</router-link> 
            <div id="contents"><router-view /></div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
export default {
    name: 'app',
    components: { Header, Nav, Footer },
    created: function(){

    },
}
</script>