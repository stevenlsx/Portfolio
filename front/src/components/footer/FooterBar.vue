<template>

    <footer>
        <div class="border"></div>
        <h2>Contact</h2>
        <ul>
            <li>C.V:
                <a href="cv/cvStevenLsx.zip" download>
                    <fa icon="download" color="white" size="lg" transform="right-6 up-2" />
                </a>

            </li>
            <li>Mail: <a href="mailto:sg.lesaux@gmail.com">
                    <fa icon="envelope" color="white" size="lg" transform="right-6 down-1" />
                </a></li>
            <li>
                <fa icon="phone-square" size="lg" />: 06.73.02.14.73
            </li>
            <li .class="reseaux">Reseaux:
                <a href="https://www.linkedin.com/in/steven-ls/">
                    <fa :icon="['fab', 'linkedin']" size="lg" color="white" />
                </a>
                <a href="https://github.com/stevenlsx">
                    <fa :icon="['fab', 'github']" size="lg" color="white" />
                </a>
            </li>
        </ul>
    </footer>

</template>
<script>

export default {
    name: "aboutMe",
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

footer {
    margin-top: 50px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    color: white;

    .border {
        width: 60%;
        border-top: 3px solid rgb(105, 104, 104);
        padding-bottom: 20px;
    }

    ul {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;

        li {
            margin-top: 40px;
            list-style: none;

            &:last-child {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }

            a :hover {
                color: $tertiary-color;
            }
        }


    }

}

@media screen and (min-width: 320px) and (max-width: 480px) {
    footer {
        h2 {
            padding-top: 10px;
            font-size: 1.7rem;
        }

        ul {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 1.1rem;

            li {
                display: flex;
                justify-content: center;
                width: 80%;
                height: 10px;
                font-size: 1.1rem;

                &:last-child {
                    width: 40%;
                    margin-bottom: 50px;
                }
            }

        }
    }
}

@media screen and (min-width: 481px) and (max-width: 768.9px) {
    footer {
        height: 400px;
        margin-bottom: 20px;

        ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            font-size: 1rem;
            width: 70%;

            li {
                font-size: 1.27rem;
                width: 50%;
                height: 80px;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
            }
        }
    }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    ul {
        li {
            width: 20%;
            font-size: 1.25rem;

            &:nth-child(3) {
                display: flex;
                height: 100%;

            }
        }
    }
}

@media screen and (min-width: 1025px) {
    ul li {
        width: 15%;
        font-size: 1.25rem;
    }

    h2 {
        text-align: center;
        font-size: 1.8rem;
        padding-right: 15px;
        margin-bottom: 10px;
        padding-bottom: 5px;
    }
}
</style>