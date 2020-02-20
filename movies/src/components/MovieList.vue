<template>
  <ul>
    <li v-for="movie in movies" :key="movie.imdbID">{{ movie.Title }}</li>
</ul>
</template>

<script>
export default {
  name: 'movie-list',
  props: {
    movies: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
</style>
