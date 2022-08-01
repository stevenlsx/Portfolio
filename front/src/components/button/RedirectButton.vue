<template>
  <div class="container">
    <button>
      <slot> {{ btnText }} </slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'redirectButton',
  data() {
    return {
      btnText: "GitHub du projet"
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/variables.scss";

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 3px 0 3px 0;
}

button {

  position: relative;
  background: $secondary-color;
  border: 1px solid black;
  color: rgb(255, 255, 255);
  width: 18%;
  height: 60px;
  font-size: 1.5rem;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 5px 5px 5px black;
  font-family: 'Raleway', sans-serif;
  transition: .6s;
  ;
  overflow: hidden;
  margin-top: 40px;
  animation: slidertop 1s ease-in-out forwards;
  animation-delay: 1.3s;

  &:focus {
    outline: 0;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, );
    width: 60px;
    height: 100%;
    left: 0;
    top: 0;
    opacity: .5;
    filter: blur(30px);
    transform: translateX(-200px) skewX(-15deg);
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    background: rgb(255, 255, 255);
    width: 30px;
    height: 100%;
    left: 30px;
    top: 0;
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-200px) skewX(-15deg);
  }

  &:hover {
    background: $tertiary-color;
    color: black;
    cursor: pointer;
    border-style: none;

    &:before {
      transform: translateX(300px) skewX(-15deg);
      opacity: 0.6;
      transition: 0.9s;
    }

    &:after {
      transform: translateX(300px) skewX(-15deg);
      opacity: 1;
      transition: 0.9s;
    }
  }

}



@media screen and (min-width: 320px) and (max-width: 480px) {
  button {
    font-size: 1.1rem;
    width: 30%;
    padding: 0 5px 0 5px;
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  button {
    font-size: 1.2rem;
    width: 30%;

  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  button {
    font-size: 1.3rem;
    width: 35%;
  }
}

@media screen and (min-width: 1025px) {
  button {
    font-size: 1.4rem;
    width: 28%;

  }

  .container {

    margin-bottom: 20px;
  }
}
</style>