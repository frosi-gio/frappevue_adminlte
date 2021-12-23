<template>
    <div id="app">

        <vue-cal style="height: 250px" class="vuecal--green-theme"></vue-cal>
    </div><a href="https://antoniandre.github.io/vue-cal" target="_blank">Documentation @
        //antoniandre.github.io/vue-cal</a>

</template>

<script>
    new Vue({
        components: {
            vueCal: vuecal
        },
        el: "#app"
    });
</script>

<style>
    * {
        font: 12px sans-serif;
        margin: 0;
        padding: 0;
    }
    
    html,
    body,
    #app {
        height: 100%;
    }
    
    #app {
        padding: 40px;
        box-sizing: border-box;
    }
    
    a {
        position: fixed;
        top: 5px;
        right: 5px;
        color: #333;
    }
</style>