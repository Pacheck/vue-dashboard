<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <RequestAccount />
    <div class="login">
      <img src="@/assets/DCHQ.png" alt="" v-show="isDarkMode" />
      <img src="@/assets/DCHQ-dark.png" alt="" v-show="!isDarkMode" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Sign into Design+Code HQ
      </h4>
      <input
        type="email"
        placeholder="Email"
        :class="{
          'light-field': isDarkMode,
          'light-field': isDarkMode,
          'dark-field': !isDarkMode,
        }"
      />
      <input
        type="password"
        placeholder="Password"
        :class="{
          'light-field': isDarkMode,
          'light-field': isDarkMode,
          'dark-field': !isDarkMode,
        }"
      />
      <button>Sign In</button>
      <router-link
        to="/recover"
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
        >Forgot your password?</router-link
      >
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount.vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";

export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch,
  },

  computed: {
    isDarkMode() {
      return this.$store.state.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
.dark-field {
  background-color: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}

.login {
  width: 400px;
}
</style>
