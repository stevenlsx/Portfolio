<template>

  <body>
    <div class="home">
      <header>
        <div class="home__me">
          <img src="../assets/img/me.jpg" alt="Photo de Steven Le Saux">
        </div>
        <div class="home__title">
          <div class="home__h1">
            <h1>Steven Le Saux</h1>
          </div>
          <div class="home__h2">
            <h2>Développeur Web Junior</h2>
          </div>
        </div>
      </header>
      <div class="home__p">
        <p>
          Diiplôme de la formation de développeur web OpenClassrooms.<br>
          Durant mon parcours, j'ai pu me former au front-end avec HTML/CSS, Javascript, Vue.js
          ainsi qu'aux bonnes pratiques du SEO. <br>
          J'ai aussi appris à développer en back-end avec Node.js, Express, SQL et MongoDB. <br>
          Mes cours en auto-didacte comme en distancielles m'ont habitué à être autonome, persévérant et rigoureux dans
          mon travail.<br>
          Ils ont été une porte d'entrée dans le monde du développement et je suis impatient de pouvoir monter en
          compétences.
        </p>
      </div>

      <HomeButton @click="goToProject()">{{ btnText }}</HomeButton>

    </div>
  </body>
</template>

<script>
import HomeButton from "../components/button/HomeButton.vue"

export default {
  name: "HomePage",
  components: {
    HomeButton
  },
  data() {
    return {
      btnText: "Mes projets",

    }
  },
  methods: {
    goToProject() {
      this.$router.push('/project')
    },
  }
}
</script>
<style scoped lang="scss">
@import "../assets/scss/animMixin.scss";

header {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.home {
  display: flex;
  margin: 0;
  padding: 0;
  text-align: start;
  flex-direction: column;
  color: rgb(244, 244, 244);
  font-family: 'Raleway', sans-serif;

  &__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  &__p {
    display: flex;
    align-self: center;
    width: 90%;
    font-size: 1.2rem;
    border-radius: 5px;
    padding: 10px;

    >p {
      @include sliderbotSize;
      animation: sliderbot 1s ease-in-out forwards;
      opacity: 0;
      animation-delay: 0.65s;
      //margin-bottom: 20px;
      padding: 20px 0 0 20px;
      background-color: white;
      color: black;
      box-shadow: 3px 3px 15px black;
      width: 100%;
      border-radius: 5px;
    }
  }

  &__me {
    height: 181px;
    text-align: center;
    border-radius: 40px;

    >img {
      object-fit: contain;
      border-radius: 100%;
      box-shadow: 3px 3px 20px black
    }
  }
}

/************** MOBILE SCREEN **************/
@media screen and (min-width: 320px) and (max-width: 480px) {

  header {
    flex-direction: column;
  }

  .home {
    &__me {
      margin-top: 20px;

      >img {
        @include sliderleftSize;
        animation: sliderleftM 1s forwards;
      }
    }

    &__h1 {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      height: 70px;

      >h1 {
        @include sliderrightSize;
        animation: sliderrightM 0.9s forwards;
        font-size: 1.9rem;
      }
    }

    &__h2 {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      height: 70px;

      >h2 {
        @include sliderrightSize;
        animation: sliderrightM 1s forwards;
        font-size: 1.3rem;
      }
    }

    &__p {
      margin-top: 10px;
      margin-bottom: 30px;
      font-size: 1.2rem;
    }
  }
}

/************** TABLET SCREEN **************/
@media screen and (min-width: 481px) and (max-width: 768.9px) {
  .home {
    &__me {
      width: 50%;

      >img {
        @include sliderleftSize;
        animation: sliderleftT 1s forwards;
        width: 200px;
        height: 200px;
      }
    }

    &__title {
      width: 50%;
    }

    &__h1 {
      text-align: center;
      width: 50%;
      padding-top: 60px;
      height: 120px;
      margin-bottom: 18px;

      >h1 {
        @include sliderrightSize;
        animation: sliderrightT 1s forwards;
        font-size: 1.8rem;
      }
    }

    &__h2 {
      text-align: center;
      width: 50%;
      height: 120px;
      margin-top: 18px;

      >h2 {
        @include sliderrightSize;
        animation: sliderrightT 1s forwards;
        font-size: 1.5rem;
      }
    }

    &__p {
      margin-top: 60px;
      margin-bottom: 20px;
      font-size: 1.3rem;
    }
  }
}


/************** DESKTOP SCREEN **************/
@media screen and (min-width: 769px) and (max-width: 1024px) {
  img {
    @include sliderleftSize;
    animation: sliderleftD 1s forwards;
    width: 225px;
    height: 225px;
  }

  .home {
    &__h1 {
      padding-top: 60px;
      height: 100px;
      margin-bottom: 10px;

      >h1 {
        @include sliderrightSize;
        animation: sliderrightD 1s forwards;
        align-self: flex-end;
        font-size: 2rem;
      }
    }

    &__h2 {
      height: 100px;
      margin-top: 18px;

      >h2 {
        @include sliderrightSize;
        animation: sliderrightD 1s forwards;
        align-self: flex-start;
        font-size: 1.8rem;
      }
    }

    &__p {
      display: flex;
      margin-top: 35px;
      margin-bottom: 20px;
      font-size: 1.5rem;
    }
  }
}


/************** WIDE SCREEN **************/
@media screen and (min-width: 1025px) {

  .home {
    &__me {
      >img {
        @include sliderleftSize;
        animation: sliderleftW 1s forwards;
        width: 257px;
        height: 257px;
      }

    }

    &__title {
      margin-bottom: -25px;
    }

    &__h1 {
      padding-top: 60px;
      height: 100px;
      margin-bottom: 10px;

      >h1 {
        @include sliderrightSize;
        width: 100%;
        animation: sliderrightW 1s forwards;
        font-size: 2.2rem;
        padding-top: 40px;
      }
    }

    &__h2 {
      height: 100px;
      margin-top: 50px;

      >h2 {
        @include sliderrightSize;
        width: 100%;
        animation: sliderrightW 1s forwards;
        font-size: 2rem;
      }
    }

    &__p {
      margin-top: 60px;
      font-size: 1.5rem;
    }
  }
}
</style>