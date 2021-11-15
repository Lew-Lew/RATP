<template>
  <div id="nav">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Metros</h1>
          <Transport :transports="metros" type="RATPMetro"></Transport>
        </div>

        <div class="col">
          <h1>RER</h1>
          <Transport :transports="rers" type="RER"></Transport>
        </div>

        <div class="col">
          <h1>Tramways</h1>
          <Transport :transports="tramways" type="RATPTram"></Transport>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import axios from "axios";
import Transport from "./components/Transport.vue";
export default {
  components: {
    Transport,
  },

  data() {
    return {
      infoTraffic: null,
    };
  },

  computed: {
    metros: function () {
      return this.infoTraffic?.metros;
    },

    rers: function () {
      return this.infoTraffic?.rers;
    },

    tramways: function () {
      return this.infoTraffic?.tramways;
    },
  },

  mounted() {
    axios
      .get("https://api-ratp.pierre-grimaud.fr/v4/traffic")
      .then((response) => (this.infoTraffic = response.data.result));
  },
};
</script>

<style>
#app {
  background-color: #49beb7;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<style scoped>
h1 {
  color: whitesmoke;
}
</style>
