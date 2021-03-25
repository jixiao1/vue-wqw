<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <input type="checkbox" v-model="input"/>
   <transition>
      <div class="box" v-show="input">你很优秀的</div>
   </transition>
    <transition name="slidfe">
      <div class="box" v-show="input">你很优秀的</div>
   </transition>
   <div class="box animate__animated animate__bounce" v-show="input">你很优秀的</div>
   <router-link to="/box" tag="div" class="box">box</router-link>
   <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import 'animate.css'

export default {
  name: 'App',
  data () {
    return {
      input: true
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .box {
    width: 500px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    font-size: 30px;
    color: blanchedalmond;
    background: blue;
    margin: 10px auto;
  }
  // .v-enter {
  //   transform: scale(0);
  //   opacity: 0;
  // }
  // .v-enter-to {
  //   transform: scale(1);
  //   opacity: 1;
  // }
  // .v-enter-active {
  //   transition: 5s;
  // }
  @keyframes identifier {
    0% {
      transform: scale(0);
      opacity: 0;
    }
     100% {
       transform: scale(1);
       opacity: 1;
     }
  }
  .v-enter-active {
  animation: identifier 5s;
}
.v-leave {
  transform: scale(1);
  opacity: 1;
}
.v-leave-to {
  transform: scale(0);
  opacity: 0;
}
.v-leave-active {
  transition: all 5s;
}

  @keyframes identifier1 {
    0% {
      transform: translateX(-100%)
    }
     100% {
      transform: translateX(0%)
     }
  }

    .slidfe-enter-active {
  animation: identifier1 5s;
}
.slidfe-leave {
  transform: translateX(0%);
}
.slidfe-leave-to {
  transform: translateX(-100%);
}
.slidfe-leave-active {
  transition: all 2s;
}
}

</style>
