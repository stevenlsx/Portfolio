<template>
    <div class="fiche">

        <header>
            <img src="../assets/img/groupomania_logo.png" alt="Logo Groupomania">
        </header>
        <section>
            <div class="fiche__first_p">
                <p>
                    Groupomania est le 7e et dernier projet de la formation de développeur web chez OpenClassrooms.
                    Le projet consiste à construire un réseau social interne avec Vue.js et requêtant une base de donnée
                    SQL
                    pour les employés de l'entreprise
                    fictive "Groupomania".
                </p>
            </div>
            <h2>Specifications techniques et fonctionnelles</h2>
            <p>
                La création et supression d'un compte doivent être possible.<br />
                L'accès à un forum où les salariés publient du contenu multimédia et/ou du texte doit être
                présent.<br />
                La modification et suppression des publications par leurs auteurs doit être possible.<br />
                Les publications les plus récentes doivent être facilement repérable. <br />
                Un administrateur doit pouvoir modérer les intéractions entre salariés.<br />
                La session de utilisateur doit persister pendant qu'il est connecté.<br />
            </p>
            <RedirectButton :class="{ section__btn: isActive }" @click="goToGit()"></RedirectButton>
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
            isActive: true
        }
    },
    methods: {
        goToGit() {
            window.location.href = "https://github.com/stevenlsx/LeSauxSteven_7_16042022"
        },
    }
}
</script>
<style scoped lang="scss">
.fiche {
    //height: 100%;
    font-family: "raleway", sans-serif;
    font-size: 1rem;
    color: white;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
        text-align: center;
        height: 150px;
        margin-bottom: 20px;
        width: 75%;
        margin-bottom: 40px;
        border-radius: 8px;

        img {
            object-fit: contain;
            border-radius: 8px;
        }
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    p {
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: left;
        padding: 0 12px 0 12px;
        width: 90%
    }

    &__first_p {
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;

        >p {
            text-align: left;
        }
    }

    h2 {
        height: 80px;
        padding: 30px 7px 0 7px;
    }

    .section__btn {
        display: flex;
        align-items: flex-end;
        height: 100px;
        width: 100%
    }

}

@media screen and (min-width: 320px) and (max-width: 480px) {
    .fiche {
        height: 900px;
        margin-bottom: 80px;

        &__first_p {
            height: 450px;
        }

        >section {
            font-size: 1.05rem;

            p {
                height: 350px;
            }

            h2 {
                margin-top: -250px;
                margin-bottom: 30px;
            }

            .section__btn {
                display: flex;
                height: 100px;
            }
        }
    }
}

@media screen and (min-width: 481px) and (max-width: 768.9px) {
    .fiche {
        height: 870px;
        margin-bottom: 20px;

        &__first_p {
            height: 200px;
        }

        >section {
            font-size: 1.2rem;

            p {
                margin-bottom: -50px;
                height: 400px;
                padding-top: 10px
            }

            h2 {
                margin-top: -50px;
                margin-bottom: 20px;
            }

            .section__btn {
                display: flex;
                margin-top: -10px;
                height: 6%;
                margin-bottom: 120px;

            }
        }
    }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    .fiche {
        height: 800px;
        margin-bottom: 40px;

        &__first_p {
            height: 150px;
        }

        >section {
            font-size: 1.3rem;
            width: 75%;
            margin-bottom: 20px;

            p {
                height: 250px;
                margin-bottom: 25px;
            }
        }
    }
}

@media screen and (min-width: 1025px) {
    .fiche {
        margin-bottom: 70px;

        &__first_p {
            height: 130px;
        }

        >section {
            font-size: 1.4rem;
            width: 75%;

            p {
                height: 300px;
                margin-bottom: -40px;
            }
        }
    }
}
</style>