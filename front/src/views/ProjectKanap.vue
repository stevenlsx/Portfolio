<template>
    <div class="fiche">

        <header>
            <img src="../assets/img/kanap_logo.png" alt="Logo Kanap">
        </header>
        <section>
            <div class="fiche__first_p">
                <p>
                    Kanap est le projet de n°5 de la formation développeur web chez OpenClassrooms.
                    L'objectif consiste à intégrer dynamiquement les éléments de d'une API donnée
                    dans les différentes pages web avec JavaScript pour l'entreprise
                    fictive "Kanap".
                </p>
            </div>
            <h2>Specifications techniques</h2>
            <p>
                La page d’accueil présente l’ensemble des produits retournés par l’API. <br />
                La page produit affiche un produit, avec un menu déroulant d'options et un input de quantité.<br />
                La page panier permet de modifier les quantités d'un produit ou de le supprimer (actualisant le prix).
                Les inputs des utilisateurs doivent être validés pour vérifier le format et le type de données.<br />
                La page confirmation affiche le numéro de commande sans le stocker.<br />
                Usage de Fetch communiquer avec l'API.
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
            window.location.href = "https://github.com/stevenlsx/LeSauxSteven_5_07122021-"
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

    p {
        text-align: center;
        padding: 0 7px 0 7px;

    }

    h2 {
        text-align: center;
        height: 60px;
        padding: 30px 7px 0 7px;
    }

    .section__btn {
        display: flex;
        align-items: flex-end;
        height: 100px;
    }

}

@media screen and (min-width: 320px) and (max-width: 480px) {
    .fiche {
        &__first_p {
            height: 130px;
        }

        >section {
            font-size: 1.05rem;

            p {
                margin-bottom: -30px;
                height: 400px;
            }

            h2 {
                margin-bottom: 20px;

            }

            .section__btn {
                display: flex;
                align-items: flex-end;
                height: 50px;
            }
        }
    }
}

@media screen and (min-width: 481px) and (max-width: 768.9px) {
    .fiche {
        &__first_p {
            height: 200px;
        }

        >section {
            font-size: 1.2rem;

            p {
                margin-bottom: -60px;
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
                margin-bottom: 60px;

            }
        }
    }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    .fiche {
        &__first_p {
            height: 150px;
        }

        >section {
            font-size: 1.3rem;
            width: 75%;

            p {
                height: 250px;
                margin-bottom: 30px;
            }
        }
    }
}

@media screen and (min-width: 1025px) {
    .fiche {
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