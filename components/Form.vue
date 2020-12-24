<template>
  <v-form v-model="valid" class="justify-center">
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
    <v-row class="justify-center">
      <!-- @click="validate"   -->
      <!-- v-on:click="validate" -->
      <!-- :disabled="!valid" -->

      <v-btn color="success" class="custom-btn mr-4" @click="click_btn">
        Enviar<span class="arrow"></span>
      </v-btn>
    </v-row>
  </v-form>
</template>

<script>
import axios from "axios";

import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";

// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);

export default {
  data: () => {
    return {
      valid: false,
      firstname: "",
      lastname: "",
      email: "",
      topic: "",
      message: "",
      messages: [],
    };
  },
  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal(
        "El correo fue enviado exitosamente",
        "Nos pondremos en contacto",
        "success"
      );
    },
    click_btn() {
      console.log("you clicked me");
      const obj = {
        nombre: this.firstname + " " + this.lastname,
        correo: this.email,
        asunto: this.topic,
        mensaje: this.message,
      };
      console.log(obj);
      this.triggerSendMessageFunction(obj);
    },
    async triggerSendMessageFunction(contact) {
      try {
        const sentInfo = {
          name: contact.nombre,
          email: contact.correo,
          message: contact.mensaje,
          topic: contact.asunto,
        };
        // const response = await axios.post("/api/sendmail", sentInfo);
        const response = await this.$axios.$post(
          "/.netlify/functions/sendmail",
          sentInfo
        );
        this.showAlert();

        console.log(sentInfo);
        // this.resetForm();
        this.messages.push({ type: "success", text: response });
      } catch (error) {
        this.messages.push({ type: "error", text: error.response.data });
      }
    },
  },
};
</script>

<style>
.v-btn.custom-btn {
  background-color: rgb(32, 71, 122) !important;
}

/* **********animations********** */
@-webkit-keyframes animateNext {
  25% {
    right: -1.2em;
  }
  50% {
    right: -0.7em;
  }
  75% {
    right: -1em;
  }
  100% {
    right: -0.7em;
  }
}

@keyframes animateNext {
  25% {
    right: -1.2em;
  }
  50% {
    right: -0.7em;
  }
  75% {
    right: -1em;
  }
  100% {
    right: -0.7em;
  }
}

.v-btn.custom-btn span.arrow {
  width: 30px;
}

.v-btn.custom-btn span.arrow::after {
  content: "";
  width: 1.2em;
  height: 0.7em;
  display: inline-block;
  background-size: 1.15em;
  background-position: right;
  position: relative;
  background-repeat: no-repeat;
  top: 1px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16'%3e%3cg fill='none' fill-rule='evenodd' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3e%3cpath d='M1.7797 8.0199h20.9252l-6.2016 6.2016'/%3e%3cpath d='M16.806 1.308l5.8236 6.5842-2.9118 3.0499'/%3e%3c/g%3e%3c/svg%3e");
  right: -0.7em;
}

.v-btn.custom-btn:hover span.arrow::after {
  -webkit-animation: animateNext 1s 1;
  animation: animateNext 1s 1;
}

@media (max-width: 576px) {
  .row {
    margin: 0;
  }
}
</style>