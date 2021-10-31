import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const userSelectedDarkMode =
  window.localStorage.getItem("isDarkMode") === "true";

// Initial State
if (
  window.matchMedia("(prefers-color-scheme: dark)").matches &&
  !userSelectedDarkMode
) {
  window.localStorage.setItem("isDarkMode", "true");
}
const state = {
  isDarkMode: userSelectedDarkMode,
};

//Getters
const getters = {
  isDarkMode: (state) => state.isDarkMode,
};

//Mutations
const mutations = {
  toggleDarkMode: (state) => {
    if (state.isDarkMode) {
      state.isDarkMode = false;
      document.body.style.background = "#f0f3f5";
      window.localStorage.setItem("isDarkMode", "false");
    } else {
      state.isDarkMode = true;
      document.body.style.background = "#212c4f";
      window.localStorage.setItem("isDarkMode", "true");
    }
  },
};

//Actions
const actions = {
  triggerDarkMode: (context) => {
    context.commit("toggleDarkMode");
  },
};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});
