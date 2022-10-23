<template>
  <div class="container">
    <h1>Vuex tutorial</h1>
    <FilterByStatus />
    <FilterByName />
    <ListCharacters />
  </div>
</template>

<script>
import ListCharacters from "./components/ListCharacters.vue"
import FilterByStatus from "./components/FilterByStatus.vue";
import FilterByName from "./components/FilterByName.vue";
export default {
  components: { ListCharacters, FilterByStatus, FilterByName },
  setup() { }
}
</script>

<style lang="scss">
:root {
  --background-body: #24282f;
  --background-card: #3c3e44;
  --text-white: #ffffff;
  --text-gray: #c0c0c0;
  --text-orange: #ff9800;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--background-body);
  color: var(--text-white);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

h1 {
  margin-bottom: 3rem;
  text-align: center;
}

.container {
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
}

img {
  width: 100%;
}
</style>
