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
.accueil {
  display: flex;

  flex-direction: column;
  align-items: center;
  background-color: #282828;
  color: rgb(244, 244, 244);
  font-family: 'Raleway', sans-serif;
  padding: 10px 0 10px 0;

  &__h1,
  &__h2 {
    font-size: 1.5rem;
    padding-top: 40px;
    display: flex;
  }

  &__h1 {
    align-self: flex-end;
  }

  &__h2 {
    align-self: flex-start;
  }

  &__p {
    display: flex;
    width: 60%;
    font-size: 1.5rem;
  }
}

@keyframes sliderleft {
  0% {
    transform: translateX(0px);
    opacity: 0;
  }

  70% {
    opacity: 0.7;
  }

  100% {
    transform: translateX(-870px);
    opacity: 1;
  }
}

@keyframes sliderright {
  0% {
    transform: translateX(0px);
    opacity: 0;
  }

  70% {
    opacity: 0.7;
  }

  100% {
    transform: translateX(780px);
    opacity: 1;
  }
}

h1 {
  animation: sliderleft 1s forwards;
}

h2 {
  animation: sliderright 1s forwards;

}
</style>