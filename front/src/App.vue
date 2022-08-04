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
    <div class="footer">
      <FooterBar />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/nav/NavBar.vue"
import FooterBar from "./components/footer/FooterBar.vue"
export default {
  name: 'app',
  components: {
    NavBar,
    FooterBar
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

.footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 200px;

}

.nav {
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;

}

@font-face {
  font-family: "raleway";
  src: local("fonts"),
    url(./fonts/Raleway-Regular.ttf) format("truetype");
  font-family: "ralewayB";
  src: local("fonts"),
    url(./fonts/Raleway-Bold.ttf) format("truetype");
}

//ANIMATION TRANSI --> PAGE TOUS PROJET//
.slide-up-leave-active {
  @include slide-up-from;
  animation: slide-up-from 1s ease-in-out;
}

.slide-up-enter-active {
  @include slide-up-to;
  animation: slide-up-to 0.7s ease-in-out;
}



//ANIMATION TRANSI --> PAGE ACCUEIL//
.slide-down-leave-active {
  @include slide-down-from;
  animation: slide-down-from 0.5s ease-in-out;
}

.slide-down-enter-active {
  @include slide-down-to;
  animation: slide-down-to 0.7s ease-in-out;
}



//ANIMATION TRANSI --> PAGE EXPERIENCE//
.slide-left-leave-active {
  @include slide-left-from;
  animation: slide-left-from 0.7s ease-in;
}

.slide-left-enter-active {
  @include slide-left-to;
  animation: slide-left-to 1s ease-out;
}

//ANIMATION TRANSI --> PAGE DE PROJET//
.slide-right-leave-active {
  @include slide-right-from;
  animation: slide-right-from 0.7s ease-in;
}

.slide-right-enter-active {
  @include slide-right-to;
  animation: slide-right-to 1s ease-out;
}
</style>
