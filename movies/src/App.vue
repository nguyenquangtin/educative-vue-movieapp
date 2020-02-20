
<template>
  <div id="app">
    <search @search="changeMovieResults"> </search>
      <movie-list :movies="movies"></movie-list>
  </div>
</template>

<script>
import Search from './components/Search'
import MovieList from './components/MovieList'

export default {
  name: 'app',
  components: {
    Search,
    MovieList
  },
  data () {
    return {
      movies: []
    }
  },
  methods: {
    changeMovieResults (results) {
      this.movies = results
    }
  }
}
</script>
<style></style>
