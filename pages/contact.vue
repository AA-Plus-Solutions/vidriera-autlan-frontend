<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" lg="5">
          <h1>Contactanos</h1>
          <Form />
        </v-col>
        <v-col cols="12" lg="5" offset-lg="2">
          <nuxt-image src="/vidriera_autlan_foto.jpg" />
          <iframe
            height="300"
            frameborder="0"
            style="border: 0"
            :src="apiKey"
            allowfullscreen
            id="vidriera-map"
          ></iframe>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
// const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Package: @nuxtjs/dotenv
// const apiKey = $config.GOOGLE_MAPS_API_KEY; // Package: @nuxtjs/dotenv

import Form from "../components/Form";
export default {
  components: {
    Form,
  },
  data: (context) => {
    return {
      apiKey:
        "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ_W3OnsFw14ARKf6A_WoRB1g&key=" +
        context.$config.GOOGLE_MAPS_API_KEY,
    };
  },
  // head(context) {
  //   console.log(this.$config);
  //   return {
  //     script: [
  //       {
  //         src: `https://maps.googleapis.com/maps/api/js?key=${this.$config.GOOGLE_MAPS_API_KEY}&libraries=places`,
  //       },
  //     ],
  //   };
  // },
  // onCreated() {
  //   console.log(apiKey);
  // },
};
</script>
<style scoped>
h1 {
  margin-bottom: 30px;
}
#vidriera-map {
  margin-top: 20px;
  width: 100%;
}
</style>