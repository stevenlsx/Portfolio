<template>

  <body>
    <header>
      <div class="header__h1">
        <h1>Projets Réalisés</h1>
      </div>
    </header>
    <section>
      <div class="section__card">
        <ProjectCard />
      </div>
    </section>
  </body>
</template>

<script>

import ProjectCard from "../components/ProjectCard.vue"


export default {
  name: "ProjectPage",
  components: {
    ProjectCard,

  },
  data() {
    return {

    }
  }
}
</script>
<style scoped lang="scss">
body {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Raleway', sans-serif;
}

header {

  height: 250px;
}

.header__h1 {
  text-align: center;
  height: 100px;


  >h1 {
    padding-top: 70px;
    color: white;
    margin-bottom: 40px;

  }
}



@media screen and (min-width: 320px) and (max-width: 480px) {
  body {
    height: 1600px;
  }

  header {
    margin-top: -50px;
  }

  section {
    margin-top: -70px;
  }

  .section__card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 1.9rem;
  }
}


@media screen and (min-width: 481px) and (max-width: 768px) {

  body {
    height: 850px;
  }

  section {
    margin-top: 20px;
  }

  .section__card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  h1 {
    font-size: 2rem;
  }
}


@media screen and (min-width: 769px) and (max-width: 1024px) {

  body {
    margin-bottom: 50px;
  }



  section {
    margin-top: 40px;
  }

  .section__card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  h1 {
    font-size: 2.4rem;
  }
}


@media screen and (min-width: 1025px) {
  body {
    height: 1000px;
  }

  .header__h1 h1 {
    margin-top: -50px;
  }

  header {
    margin-bottom: -50px;
  }

  .section__card {
    margin-top: -25px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  h1 {
    font-size: 3rem;
  }
}
</style>
