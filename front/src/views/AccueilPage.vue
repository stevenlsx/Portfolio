<template>

  <body>
    <div class="accueil">
      <div class="accueil__h1">
        <h1>Steven Le Saux</h1>
      </div>

      <div class="accueil__h2">
        <h2>Développeur Web Junior</h2>
      </div>
      <div class="accueil__p">
        <p>
          Je m'apelle Steven, j'ai 25 ans et je suis diplôme de la formation de développeur web OpenClassrooms.<br>
          Durant mon parcours, j'ai pu me former au front-end avec HTML/CSS, Javascript, Vue.js
          ainsi qu'aux bonnes pratiques du SEO. <br>
          J'ai aussi appris à développer en back-end avec Node.js, Express, SQL et MongoDB. <br>
          Mes cours en auto-didacte comme en distancielles m'ont habitué à être autonome, persévérant et rigoureux dans
          mon travail.<br>
          Ils ont été une porte d'entrée dans le monde du développement et je suis impatient de pouvoir monter en
          compétences.
        </p>
      </div>

      <AllButton>{{ btnText }}</AllButton>

    </div>
  </body>
</template>

<script>
import AllButton from "../components/AllButton.vue"

export default {
  name: "AccueilPage",
  components: {
    AllButton
  },
  data() {
    return {
      btnText: "Mes projets",
    }
  },
}
</script>
<style scoped lang="scss">
@import "../assets/scss/animMixin.scss";

.accueil {
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: column;
  background-color: #282828;
  color: rgb(244, 244, 244);
  font-family: 'Raleway', sans-serif;


  &__p {
    display: flex;
    align-self: center;
    width: 90%;
    font-size: 1.2rem;

    >p {
      @include sliderbotSize;
      animation: sliderbot 1s ease-in-out forwards;
      opacity: 0;
      animation-delay: 0.6s;
    }
  }
}


/************** MOBILE SCREEN **************/
@media screen and (min-width: 320px) and (max-width: 480px) {
  h1 {
    @include sliderleftSize;

    animation: sliderleftM 1s forwards;
    font-size: 1.9rem;
  }

  h2 {
    @include sliderrightSize;
    animation: sliderrightM 1s forwards;
    font-size: 1.3rem;
  }

  .accueil__h1 {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    height: 150px;
  }

  .accueil__h2 {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    height: 150px;
  }

  .accueil__p {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 1.2rem;
  }
}

/************** TABLET SCREEN **************/
@media screen and (min-width: 481px) and (max-width: 768px) {
  h1 {
    @include sliderleftSize;

    animation: sliderleftT 1s forwards;
    font-size: 1.9rem;
  }

  h2 {
    @include sliderrightSize;
    animation: sliderrightT 1s forwards;
    font-size: 1.5rem;
  }

  .accueil__h1 {
    display: flex;
    justify-content: center;
    padding-top: 60px;
    height: 120px;
    margin-bottom: 18px;

  }

  .accueil__h2 {
    display: flex;
    justify-content: center;
    height: 120px;
    margin-top: 18px;

  }

  .accueil__p {
    margin-top: 60px;
    margin-bottom: 20px;
    font-size: 1.4rem;
  }

}


/************** DESKTOP SCREEN **************/
@media screen and (min-width: 769px) and (max-width: 1024px) {
  h1 {
    @include sliderleftSize;

    animation: sliderleftD 1s forwards;
    align-self: flex-end;
    font-size: 2rem;

  }

  h2 {
    @include sliderrightSize;
    animation: sliderrightD 1s forwards;
    align-self: flex-start;
    font-size: 1.8rem;

  }

  .accueil__h1 {
    display: flex;
    justify-content: flex-start;
    padding-top: 100px;
    height: 200px;
    margin-bottom: 10px;

  }

  .accueil__h2 {
    display: flex;
    justify-content: flex-end;
    height: 200px;
    margin-top: 18px;
  }

  .accueil__p {
    margin-top: 74.25px;
    font-size: 1.5rem;
  }

}


/************** WIDE SCREEN **************/
@media screen and (min-width: 1025px) {
  h1 {
    @include sliderleftSize;

    animation: sliderleftW 1s forwards;
    font-size: 2.2rem;
    padding-top: 40px;
  }

  h2 {
    @include sliderrightSize;

    animation: sliderrightW 1s forwards;
    font-size: 2rem;
  }

  .accueil__h1 {
    display: flex;
    justify-content: flex-start;
    padding-top: 60px;
    height: 200px;
    margin-bottom: 10px;
  }

  .accueil__h2 {
    display: flex;
    justify-content: flex-end;
    height: 200px;
    margin-top: 50px;
  }

  .accueil__p {
    margin-top: 60px;
    font-size: 1.6rem;
  }
}
</style>