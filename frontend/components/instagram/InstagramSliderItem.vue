<template>
  <div class="instgram_post">
    <a :href="instagramURL">
      <i class="fab fa-instagram"></i>
      <img :src="instagramImg" alt="img"
    /></a>
  </div>
</template>

<script>
export default {
  name: "instagram-slider-item",
  props: {
    instagramImg: String,
    instagramURL: String,
  },
};
</script>

<style></style>
