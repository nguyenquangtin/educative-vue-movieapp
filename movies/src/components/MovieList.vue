<template>
  <ul>
    <movie-list-item v-for="movie in movies" :movie="movie" :key="movie.imdbID" />
</ul>
</template>

<script>
import MovieListItem from './MovieListItem'

export default {
  name: 'movie-list',
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  components: {
    MovieListItem
  }
}
</script>

<style>
</style>
