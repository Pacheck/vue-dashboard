<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import "animate.css";

export default {
  name: "App",
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#212c4f" : "#f0f3f5";
  },
};
</script>
<style lang="scss">
* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  margin: 0;
  padding: 0;
  overflow: hidden;
}
body {
  background-color: $dark_blue;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $white;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

h4 {
  margin: 0;
  font-size: 24px;
  text-align: center;
  color: #fff;
}

input {
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  font-size: 20px;
  color: #fff;
  padding-left: 20px;
  margin-top: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

button {
  height: 60px;
  width: 100%;
  font-size: 20px;
  border: none;
  color: #fff;
  margin-top: 20px;
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-bottom: 40px;
}

a {
  text-decoration: none;
  line-height: 25px;
  /* identical to box height */

  text-align: center;
}

/* Theme */
.light-background {
  background-color: $light-gray;
}
.dark-background {
  background-color: $dark-blue;
}
.light-text {
  color: $white;
}
.dark-text {
  color: $black;
}
.light-field {
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}
.light-link {
  color: rgba(255, 255, 255, 0.3);
}
.dark-link {
  color: rgba(0, 0, 0, 0.3);
}
</style>
