<template>
  <div>
    {{ title }}
  </div>
</template>

<script>
  export default {

    async asyncData(context) {
      try {
        var { data } = await api.get('/');

        return {
          title: data,
        };
      }
      catch (e) {
        alert('error happens');
      }
    },

  };
</script>
