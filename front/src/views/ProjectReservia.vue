<template>
    <div class="fiche">

        <header>
            <img src="../assets/img/reservia_logo.png" alt="Logo Reservia">
        </header>
        <section>
            <p>
                Reservia est le projet de n°2 de la formation développeur web chez OpenClassrooms.
                L'objectif consiste à intégrer une maquette responsive en HTML et CSS pour l'entreprise
                fictive "Reservia".
            </p>
            <h2>Specifications techniques</h2>
            <p>
                Une maquette est fournie pour la version mobile et une autre pour la version desktop.
                Le choix est laissé libre quant à la version tablette et aux breakpoints. L'utilisation
                de framework et des pré-processeurs est interdite.
            </p>
            <div class="fiche__btn">
                <RedirectButton @click="goToGit()"></RedirectButton>
            </div>
        </section>


    </div>

</template>

<script>


import RedirectButton from "../components/button/RedirectButton.vue";

export default {
    name: "projetReservia",
    components: {
        RedirectButton
    },
    data() {
        return {

        }
    },
    methods: {
        goToGit() {
            window.location.href = "https://github.com/stevenlsx/LeSauxSteven_2_08032021"
        },
    }
}
</script>
<style scoped lang="scss">
.fiche {
    height: 100%;
    font-family: "raleway", sans-serif;
    font-size: 1rem;
    color: white;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
        height: 125px;
        margin-bottom: 20px;
    }

    section {
        height: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        text-align: left;
        padding: 0 7px 0 7px;
        height: 170px;
        width: 80%;
    }

    h2 {
        text-align: center;
        height: 80px;
        padding: 30px 7px 0 7px;
    }

    &__btn {
        height: 20%;
        width: 100%;
    }

}

@media screen and (min-width: 320px) and (max-width: 480px) {
    .fiche {
        margin-bottom: -30px;

        >section {
            font-size: 1.05rem;
        }
    }
}

@media screen and (min-width: 481px) and (max-width: 768.9px) {
    .fiche {
        margin-bottom: -30px;

        >section {
            font-size: 1.2rem;

        }
    }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    .fiche {
        >section {
            font-size: 1.3rem;
            width: 75%;

            p {
                margin-bottom: 0px;
            }
        }
    }
}

@media screen and (min-width: 1025px) {
    .fiche {

        >section {
            font-size: 1.4rem;
            width: 75%;

            p {
                margin-bottom: -40px;
            }
        }
    }
}
</style>