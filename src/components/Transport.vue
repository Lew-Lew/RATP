<template>
  <!-- <p>{{ transports }}</p> -->

  <ol class="list-group list-group-flush">
    <li
      class="list-group-item d-flex justify-content-between align-items-start"
      v-for="t in transports"
      v-bind:key="t.line"
    >
      <div class="row align-items-center">
        <div class="col-2">
          <img
            v-bind:src="linkImage(t.line, type)"
            class="img-thumbnail"
            v-bind:alt="t.line"
          />
        </div>
        <div class="col">
          <div id="titleLine" class="fw-bold">{{ t.title }}</div>
        </div>

        <div class="col text-end">
          <span v-if="t.slug == 'normal'"></span>
          <span
            v-else-if="t.slug == 'alerte' || t.slug == 'critical'"
            class="badge rounded-pill bg-danger"
            >incident</span
          >
          <span
            v-else-if="t.slug == 'normal_trav'"
            class="badge rounded-pill bg-warning text-dark"
            >travaux</span
          >
          <span v-else class="badge rounded-pill bg-light text-dark">{{
            t.slug
          }}</span>
        </div>

        <div id="message" class="ps-2">
          {{ t.message }}
        </div>
      </div>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    transports: Object,
    type: String,
  },

  methods: {
    linkImage: function (line, type) {
      if (type == "RATPMetro") {
        line = line.replace("B", "bis");
      } else if (type == "RATPTram") {
        line = line.toLowerCase();
      }
      return (
        "https://citymapper.com/static/data/resources/routeicon-fr-paris-" +
        type +
        line +
        "-24@2x.png"
      );
    },
  },
};
</script>

<style scoped>
.list-group {
  border-radius: 0.5em;
  text-align: justify;
}

.img-thumbnail {
  border: none !important;
  margin-bottom: 0.5em;
}

#titleLine {
  font-size: 1.1em;
}

#message {
  padding-left: 1.5em !important;
  padding-right: 1.5em !important;
}
</style>
