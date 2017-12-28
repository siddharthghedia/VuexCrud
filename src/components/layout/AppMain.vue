<template>
    <section class="app-main">
        <div class="container is-fluid is-marginless app-content">
            <level-bar></level-bar>
            <transition
                    mode="out-in"
                    enter-active-class="fadeIn"
                    leave-active-class="fadeOut"
                    appear>
                <router-view></router-view>
            </transition>
        </div>
    </section>
</template>

<script>
    import LevelBar from './LevelBar'
    export default {
      components: {
        LevelBar
      }
    }
</script>

<style lang="scss">
    /*@import '~bulma/sass/utilities/variables';*/
    @import '~bulma/sass/utilities/mixins';
    .app-main {
        padding-top: 50px;
        transform: translate3d(0, 0, 0);
    }
    .app-content {
        padding: 20px;
    }
</style>