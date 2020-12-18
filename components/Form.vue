<template>
  <v-form v-model="valid">
    <v-row>
      <!-- :rules="nameRules" -->
      <v-text-field
        v-model="firstname"
        label="Nombre"
        outlined
        required
      ></v-text-field>
    </v-row>
    <v-row>
      <v-text-field
        v-model="email"
        label="Correo"
        outlined
        required
      ></v-text-field>
    </v-row>
    <v-row>
      <v-text-field v-model="topic" label="Asunto" outlined></v-text-field>
    </v-row>
    <v-row>
      <!-- <v-text-field v-model="message" label="Mensaje" outlined></v-text-field> -->
      <!-- name="input-7-4" -->
      <!-- value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through." -->

      <v-textarea v-model="message" outlined label="Mensaje"></v-textarea>
    </v-row>
    <v-row>
      <!-- @click="validate"   -->
      <!-- v-on:click="validate" -->
      <!-- :disabled="!valid" -->

      <v-btn color="success" class="mr-4" @click="click_btn"> Enviar </v-btn>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data: () => {
    return {
      valid: false,
      firstname: "",
      lastname: "",
      email: "",
      topic: "",
      message: "",
    };
  },
  methods: {
    click_btn() {
      console.log("you clicked me");
      const obj = {
        nombre: this.firstname + " " + this.lastname,
        correo: this.email,
      };
      console.log(obj);
    },
  },
};
</script>

<style>
</style>