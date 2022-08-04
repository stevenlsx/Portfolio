<template>
    <div class="fiche">
        <header>
            <img src="../assets/img/ohmyfood_logo.png" alt="Logo Ohmyfood">
        </header>
        <section>
            <p>
                Ohmyfood est le projet n°3 de la formation de développeur web chez OpenClassrooms.
                développer un site responsive qui répertorie les menus de 4 restaurants gastronomiques pour l'entreprise
                fictive "Ohmyfood".
            </p>
            <h2>Specifications techniques</h2>
            <p>
                Le site est développé en utilisant l'approche mobile-first à l'aide d'une maquette. Pour les version
                tablettes et desktop,
                la mise en page est libre. L'usage de SASS est autorisé. Les animations doivent être accessibles au clic
                ou au survol,
                en CSS uniquement.
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
            window.location.href = "https://github.com/stevenlsx/LeSauxSteven_3_20102021"
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
    margin-bottom: -80px;

    header {
        text-align: center;
        height: 100px;
        margin-bottom: 40px;

        img {
            width: 90%;
            object-fit: contain;
        }
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
        height: 180px;
        width: 90%;
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
        >section {
            font-size: 1.05rem;

            p {
                margin-bottom: -20px;
            }

            h2 {
                margin-bottom: -20px;
            }
        }
    }
}

@media screen and (min-width: 481px) and (max-width: 768.9px) {
    .fiche {
        >section {
            font-size: 1.2rem;

            p {
                margin-bottom: -20px;
            }

            h2 {
                margin-bottom: -20px;
            }
        }
    }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    .fiche {
        >section {
            font-size: 1.3rem;
            width: 75%;

            p {
                margin-bottom: -40px;
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