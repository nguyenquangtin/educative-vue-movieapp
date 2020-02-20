<template>
  <li>
    <img :src="movie.Poster"/>
    <p>{{ movie.Title }}</p>
    <span>{{ movie.Year }}</span>
  </li>
</template>

<script>
export default {
  name: 'movie-list-item',
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>
