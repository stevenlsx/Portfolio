<template>
  <div class="app">
    <div class="nav">
      <NavBar :class="{ transi: isActive }" v-if="!$route.meta.hideNavbar" />
    </div>

    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import NavBar from "./components/nav/NavBar.vue"

export default {
  name: 'app',
  components: {
    NavBar
  },
  data() {
    return {
      isActive: true
    }
  },

}
</script>
<style lang="scss">
@import "assets/scss/animMixin.scss";
@import "src/assets/scss/variables.scss";

* {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: $primary-color;
}

.nav {
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;

}

.transi {
  animation: sliderbot 1s ease-in-out forwards;
}

@font-face {
  font-family: "raleway";
  src: local("fonts"),
    url(./fonts/Raleway-Regular.ttf) format("truetype");
  font-family: "ralewayB";
  src: local("fonts"),
    url(./fonts/Raleway-Bold.ttf) format("truetype");
}

.slide-up-enter-active {
  @include slide-up-project;
  animation: slide-up-project 0.7s ease-in-out;
}


.slide-up-leave-active {
  @include slide-up-accueil;
  animation: slide-up-accueil 1s ease-in-out;
}
</style>
