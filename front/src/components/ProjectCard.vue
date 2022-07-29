
<template>

    <div class="card" v-for="Card in cardArray" :key="Card">

        <div class="card__img">
            <img :src="Card.image" alt="Logo du projet" />
        </div>
        <div class="card__h3">
            <h3>{{ Card.title }}</h3>
        </div>
        <div class="card__p">
            <p>{{ Card.caption }}</p>
        </div>
        <div class="overlay">
            <ProjectButton @click="redirectProject(Card.url)">
                En savoir plus
            </ProjectButton>
        </div>

    </div>

</template>

<script>
import ProjectButton from "../components/button/ProjectButton.vue"

export default {
    name: 'ProjectCard',
    components: {
        ProjectButton
    },
    data() {
        return {
            cardArray: [
                {
                    image: require("../assets/img/reservia_logo.png"),
                    title: "Reservia",
                    caption: "Transformer une maquette en site web avec HTML & CSS ",
                    url: "reservia"

                },
                {
                    image: require("../assets/img/ohmyfood_logo.png"),
                    title: "Ohmyfood!",
                    caption: "Dynamiser une page web avec des animations CSS",
                    url: "ohmyfood"
                },
                {
                    image: require("../assets/img/kanap_logo.png"),
                    title: "Kanap",
                    caption: "Construire un site e-commerce en JavaScript ",
                    url: "/kanap"
                },
                {
                    image: require("../assets/img/groupomania_logo.png"),
                    title: "Groupomania",
                    caption: "Créer un réseau social d’entreprise ",
                    url: "/groupomania"
                }
            ],


        }
    },
    methods: {
        redirectProject(url) {
            this.$router.push(url)
        }
    }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: 320px) and (max-width: 480px) {




    .overlay {
        display: flex;
        justify-content: center;
        background-color: white;
        width: 100%;
        border-radius: 18px;
    }

    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 325px;
        width: 90%;
        margin-top: 25px;
        margin-bottom: 10px;
        background-color: white;
        border: 4px solid black;
        text-align: center;
        border-radius: 18px;
        box-shadow: 0 0px 15px rgba(0, 0, 0, .2);
        transition: 0.2s;

        &:hover {
            transform: translateY(-.5%);
            box-shadow: 0 4rem 8rem rgba(0, 0, 0, .2);
        }

        &__img {
            height: 181px;
            width: 100%;
            background-color: white;
            border-radius: 18px 18px 0 0;

            >img {
                width: 98%;
                height: 135px;
                object-fit: contain;
                background-color: white;
                border-radius: 18px 18px 0 0;
            }
        }

        &__p {
            width: 100%;
            background-color: white;
            border-radius: 0 0 18px 18px;
            margin-top: -1px;

            >p {
                width: 99%;
                height: 53px;
                background-color: white;
                border-radius: 0 0 18px 18px;
            }
        }

        &__h3 {
            width: 100%;

            >h3 {
                border-top: 1px solid black;
                background-color: white;
                width: 100%;
                height: 53px;
                padding-top: 15px;
            }
        }
    }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
    .overlay {
        display: flex;
        justify-content: center;
        background-color: white;
        width: 100%;
        border-radius: 18px;
    }

    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 325px;
        width: 45%;
        margin-top: 25px;
        margin-bottom: 10px;
        background-color: white;
        border: 4px solid black;
        text-align: center;
        border-radius: 18px;
        box-shadow: 0 0px 15px rgba(0, 0, 0, .2);
        transition: 0.2s;

        &:hover {
            transform: translateY(-.5%);
            box-shadow: 0 4rem 8rem rgba(0, 0, 0, .2);
        }

        &__img {
            height: 181px;
            width: 100%;
            background-color: white;
            border-radius: 18px 18px 0 0;

            >img {
                width: 98%;
                height: 135px;
                object-fit: contain;
                background-color: white;
                border-radius: 18px 18px 0 0;
            }
        }

        &__p {
            width: 100%;
            background-color: white;
            border-radius: 0 0 18px 18px;
            margin-top: -1px;

            >p {
                width: 99%;
                height: 53px;
                background-color: white;
                border-radius: 0 0 18px 18px;
                font-size: 1rem;
            }
        }

        &__h3 {
            width: 100%;

            >h3 {
                border-top: 1px solid black;
                background-color: white;
                width: 100%;
                height: 53px;
                padding-top: 15px;
                font-size: 1.4rem;
            }
        }
    }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    .overlay {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding-right: 3px;
        margin-left: -2px;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        border-radius: 10px;
        background-color: black;
    }

    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 310px;
        width: 41%;
        margin-top: 25px;
        margin-bottom: 20px;
        background-color: white;
        border: 4px solid black;
        text-align: center;
        border-radius: 18px;
        box-shadow: 0 0px 15px rgba(0, 0, 0, .2);
        transition: 0.4s;

        &:hover {
            transform: translateY(-.5%);
            box-shadow: 0 4rem 8rem rgba(0, 0, 0, .2);
        }

        &:hover .overlay {
            opacity: 1;
        }

        &__img {
            height: 181px;
            width: 100%;
            background-color: white;
            border-radius: 18px 18px 0 0;

            >img {
                width: 98%;
                height: 135px;
                object-fit: contain;
                background-color: white;
                border-radius: 18px 18px 0 0;
            }
        }

        &__p {
            width: 100%;
            background-color: white;
            border-radius: 0 0 18px 18px;


            >p {
                width: 100%;
                height: 80px;
                background-color: white;
                border-radius: 0 0 18px 18px;
                font-size: 1.2rem;
            }
        }

        &__h3 {
            width: 100%;

            >h3 {
                border-top: 1px solid black;
                background-color: white;
                width: 100%;
                height: 70px;
                padding-top: 15px;
                font-size: 1.7rem;

            }
        }
    }
}

@media screen and (min-width: 1025px) {
    .overlay {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding-right: 3px;
        margin-left: -2px;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .2s ease;
        border-radius: 10px;
        background-color: black;
    }

    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 360px;
        width: 40%;
        margin-top: 25px;
        margin-bottom: 20px;
        background-color: white;
        border: 4px solid black;
        text-align: center;
        border-radius: 18px;
        box-shadow: 0 0px 15px rgba(0, 0, 0, .2);
        transition: 0.4s;

        &:hover {
            transform: translateY(-.5%);
            box-shadow: 0 4rem 8rem rgba(0, 0, 0, .2);
        }

        &:hover .overlay {
            opacity: 1;
        }

        &__img {
            height: 181px;
            width: 100%;
            background-color: white;
            border-radius: 18px 18px 0 0;

            >img {
                width: 98%;
                height: 135px;
                object-fit: contain;
                background-color: white;
                border-radius: 18px 18px 0 0;
            }
        }

        &__p {
            width: 100%;
            background-color: white;
            border-radius: 0 0 18px 18px;

            >p {
                width: 100%;
                height: 95px;
                background-color: white;
                border-radius: 0 0 18px 18px;
                font-size: 1.4rem;


            }
        }

        &__h3 {
            width: 100%;
            display: flex;
            justify-content: center;

            >h3 {
                border-top: 1px solid black;
                background-color: white;
                width: 100%;
                height: 90px;
                padding-top: 35px;
                font-size: 1.8rem;

            }
        }
    }
}
</style>