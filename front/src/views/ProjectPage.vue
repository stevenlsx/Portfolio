<template>
  <div class="projet">
    <div class="projet__h1">
      <h1>Projets Réalisés</h1>
    </div>
    <div class="projet__card">
      <ProjectCard />
    </div>
  </div>
</template>

<script>

import ProjectCard from "../components/ProjectCard.vue"

export default {
  name: "ProjectPage",
  components: { ProjectCard },
  data() {
    return {

    }
  }
}
</script>
<style scoped lang="scss">
.projet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Raleway', sans-serif;

  &__h1 {
    text-align: center;
    height: 100px;
    margin-bottom: 20px;

    >h1 {
      padding-top: 70px;
      color: white;
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 480px) {
  .projet {

    &__card {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    >h1 {
      font-size: 1.9rem;
    }
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .projet {
    &__card {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    >h1 {
      font-size: 2rem;
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .projet {
    &__card {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    >h1 {
      font-size: 2.4rem;
    }
  }
}

@media screen and (min-width: 1025px) {
  .projet {

    &__card {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    >h1 {
      font-size: 3rem;
    }
  }
}
</style>
