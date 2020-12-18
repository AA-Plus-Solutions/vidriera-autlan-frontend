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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Form from "../components/Form";
export default {
  components: {
    Form,
  },
};
</script>
<style scoped>
h1 {
  margin-bottom: 30px;
}
</style>