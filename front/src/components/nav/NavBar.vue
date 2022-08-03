<template>
    <nav>

        <ul class="navbar__list">
            <li>
                <router-link to="/">Accueil</router-link>
            </li>
            <li>
                <router-link to="/project">Projets Réalisés</router-link>
            </li>
            <li>
                <router-link to="/aboutme">Expérience</router-link>
            </li>
        </ul>

    </nav>
</template>

<script>
export default {
    name: 'navBar',

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
@import "src/assets/scss/animMixin.scss";

nav {
    @include sliderbotSize;
    display: flex;
    flex-direction: row;
    justify-content: center;
    //align-items: center;
    height: 50px;
    width: 90%;
    font-family: 'Raleway', sans-serif;
    position: fixed;
    z-index: 1;
    border-radius: 0 0 5px 5px;
    box-shadow: 3px 3px 6px;
    animation: sliderbotNav 1.7s ease-in-out forwards;


    >ul {
        width: 100%;
        display: flex;
        flex-direction: row;
        //justify-content: space-around;
        background-color: $primary-color;
        border-radius: 0 0 5px 5px;


        >li {
            width: 100%;
            list-style: none;
            display: flex;
            justify-content: space-around;
            background-color: $primary-color;
            border-radius: 0 0 5px 5px;

        }
    }
}

a {
    text-decoration: none;
    color: $nav-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.3rem;
    background-color: $primary-color;



    &:hover {
        color: $tertiary-color;

    }
}

.router-link-active {
    border-bottom: 2px solid $tertiary-color;
    color: $tertiary-color;

    &:hover {
        color: $tertiary-color;
        border-bottom-color: $tertiary-color;
    }

}
</style>