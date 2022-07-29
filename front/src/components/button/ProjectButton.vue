<template>
  <div class="container">
    <button>
      <slot> {{ btnText }} </slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'projectButton',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/animMixin.scss";

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 320px) and (max-width: 480px) {
  .container {
    padding: 3px 0 8px 0;
    height: 60px;
    width: 80%;
    margin-top: -5px;
    background-color: white;
  }

  button {

    position: relative;
    background: #282828;
    border: 1px solid rgb(255, 254, 254);
    color: rgb(255, 255, 255);
    height: 50px;
    border-radius: 8px;
    font-family: 'Raleway', sans-serif;
    transition: .6s;
    overflow: hidden;

    font-size: 1.1rem;
    width: 50%;
    padding: 0 5px 0 5px;
    visibility: visible;

    &:active {
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

    &:active {
      background: #30d0cd;
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
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .container {
    height: 50px;
    width: 80%;
    margin-top: -5px;
    background-color: white;
  }

  button {
    position: relative;
    background: #282828;
    border: 1px solid rgb(255, 254, 254);
    color: rgb(255, 255, 255);
    height: 45px;
    border-radius: 8px;
    font-family: 'Raleway', sans-serif;
    transition: .6s;
    overflow: hidden;
    font-size: 0.9rem;
    width: 50%;
    padding: 0 5px 0 5px;
    visibility: visible;

    &:active {
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

    &:active {
      background: #30d0cd;
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
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .container {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    border: 3px solid black;
    background-color: black;
  }

  button {
    position: relative;
    background: white;
    border: 1px solid rgb(255, 254, 254);
    color: black;
    height: 50px;
    border-radius: 8px;
    font-family: 'Raleway', sans-serif;
    transition: .6s;
    visibility: visible;
    overflow: hidden;
    font-size: 1.1rem;
    width: 50%;
    padding: 0 5px 0 5px;

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
      background: #30d0cd;
      color: white;
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
}

@media screen and (min-width: 1025px) {
  .container {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    border: 3px solid black;
    background-color: black;
  }

  button {
    position: relative;
    background: white;
    border: 1px solid rgb(255, 254, 254);
    color: black;
    height: 70px;
    border-radius: 8px;
    font-family: 'Raleway', sans-serif;
    transition: .6s;
    visibility: visible;
    overflow: hidden;
    font-size: 1.3rem;
    width: 50%;
    padding: 0 5px 0 5px;

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
      background: #30d0cd;
      color: white;
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

}
</style>

       