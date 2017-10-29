<template lang="pug">
  .flex
    n-side-bar-mobile.is-hidden-tablet(
      v-show="showSidebar"
      )

    n-side-bar-background.is-hidden-tablet(
      v-show="showSidebar",
      @click.native="showSidebar = false"
      )
    n-side-bar-desktop.is-hidden-mobile.full-height

    .main-container
      .header
        .is-hidden-tablet
          button(
            @click="showSidebar = !showSidebar"
            )
            | ...
          | header
        .is-hidden-mobile
          | header info
      nuxt
    //n-logo
</template>

<script>
export default {

  data() {
    return {
      showSidebar: false,
    };
  },

};
</script>
