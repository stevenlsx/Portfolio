<template>
  <div class="xp">
    <div class="xp__title">

    </div>
    <div class="xp__parcours">
      <h2>Mon Parcours</h2>
      <div class="xp__parcours__p">
        <p>
          <b>2014-2015:</b><br />
          Ecole des Psychologue Praticiens. <br />
          <b>2015-2016:</b><br />
          Séjour d'une année à Brighton .<br />
          <b>2016:</b> <br />
          BTS Management des Unités Commerciales.<br />
          <b>2017:</b><br />
          Piscine de l'école 42.<br />
          <b>2019:</b> <br />
          Analyste référencement pour l'entreprise Kaokeb<br />
          <b>2021-2022:</b>
          <br /> Formation de développeur chez Web Openclassrooms.<br />
        </p>
      </div>
    </div>
    <h2>Mes Compétences</h2>
    <section>
      <article class="xp__section_front">
        <h3>Front-end</h3>
        <ul>
          <li>
            HTML
          </li>
          <li>
            CSS
          </li>
          <li>
            Javascript
          </li>
          <li>
            Vue.js
          </li>
          <li>
            SEO
          </li>
        </ul>
      </article>
      <article class="xp__section_back">
        <h3>Back-end</h3>
        <ul>
          <li>
            Node.js
          </li>
          <li>
            Express
          </li>
          <li>
            SQL
          </li>
          <li>
            MongoDB
          </li>
          <li>
            Cors, bcrypt
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script>

export default {
  name: "aboutMe",
  components: {

  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>





<style scoped lang="scss">
@import "src/assets/scss/variables.scss";

.xp {
  display: flex;
  flex-direction: column;
  //justify-content: space-around;
  font-family: 'Raleway', sans-serif;
  color: white;
  height: 1260px;

  &__parcours {
    display: flex;
    flex-direction: column;
    align-self: center;
    font-size: 1.5rem;
    line-height: 1.5;
    width: 70%;
    text-align: center;
    box-sizing: content-box;
    margin-top: -80px;
    margin-bottom: 40px;


    &__p {
      box-shadow: 10px 10px 50px black;
      margin-top: -30px;
      margin-bottom: 20px;
      border-radius: 8px;
    }
  }

  &__title {
    text-align: center;
    height: 100px;
  }

  h2 {
    height: 100px;
    align-self: center;
    font-size: 1.8rem;
    margin-bottom: 50px;
    padding-top: 50px;

  }



  &__section_front,
  &__section_back {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    margin-top: 20px;


    h3 {
      text-align: center;
      height: 40px;
      background-color: white;
      border-radius: 8px 8px 0 0;
      padding-top: 15px;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      background-color: white;
      list-style: none;
      border-radius: 0 0 8px 8px;

      >li {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        height: 40px;
        width: 90%;
        border: 3px solid $primary-color;
        border-radius: 18px;
        background-color: $secondary-color;
        color: white;
        margin-bottom: 30px;
      }
    }
  }


}

/************** MOBILE SCREEN **************/
@media screen and (min-width: 320px) and (max-width: 480px) {
  .xp {
    height: 1600px;

    section {
      margin-top: -40px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      color: black;
    }

    &__section_front,
    &__section_back {
      height: 230px;
      width: 85%;
      box-shadow: 23px 70px 5px black;

      h3 {
        font-size: 1.4rem;
        padding-bottom: 5px;
      }

      ul {
        flex-wrap: wrap;
        display: flex;
        justify-content: center;

        li {
          display: flex;
          flex-direction: row;
          width: 40%;

        }
      }

    }
  }
}

/************** TABLET SCREEN **************/
@media screen and (min-width: 481px) and (max-width: 768.9px) {
  .xp {
    height: 1500px;
    margin-bottom: 60px;

    section {
      margin-top: -50px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      color: black;
    }

    &__section_front,
    &__section_back {
      height: 230px;
      width: 85%;
      margin-bottom: 20px;
      box-shadow: 35px 75px 5px black;

      h3 {
        font-size: 1.5rem;
        padding-bottom: 5px;
      }

      ul {
        flex-wrap: wrap;
        display: flex;
        justify-content: center;

        li {
          display: flex;
          flex-direction: row;
          width: 40%;
          height: 45px;

        }
      }

    }
  }
}

/************** DESKTOP SCREEN **************/
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .xp {
    section {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      color: black;
    }

    &__section_front,
    &__section_back {
      width: 35%;
      height: 400px;
      box-shadow: 35px 35px 5px black;

      ul {
        justify-content: flex-start;

      }
    }
  }
}

/************** WIDE SCREEN **************/
@media screen and (min-width: 1025px) {
  .xp {
    section {
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      color: black;
    }

    &__section_front,
    &__section_back {
      width: 35%;
      height: 400px;
      box-shadow: 35px 35px 5px black;

      ul {
        justify-content: flex-start;

      }
    }
  }
}
</style>