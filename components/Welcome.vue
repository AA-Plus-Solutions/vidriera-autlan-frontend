<template>
  <section id="bienvenidos" v-scrollanimation>
    <v-container>
      <v-row>
        <v-col cols="12" lg="6">
          <h2>Bienvenido</h2>
          <p>
            Te invitamos a conocer los productos de excelente calidad que
            tenemos para ti. Nuestra experiencia y nuestro excelente servicio
            nos respaldan.
          </p>
          <p>
            En Vidriera Autlan, estamos comprometidos con el cliente a brindarle
            un servicio de valor agregado y ofrecerle una amplia gama de
            productos de alta calidad y con ello superar sus expectativas.
          </p>
          <v-btn color="success" class="custom-btn mr-4" to="/about-us" nuxt>
            Leer mas <span></span>
          </v-btn>
        </v-col>
        <v-col cols="12" lg="6">
          <nuxt-image
            :lazy="true"
            placeholder="https://via.placeholder.com/150/6A6C6E/?Text="
            src="/vidriera_autlan_foto.jpg"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style>
#bienvenidos {
  padding: 80px 0px;
}
@media (max-width: 576px) {
  #bienvenidos {
    padding: 40px 0px;
    text-align: center;
  }
  #bienvenidos .row {
    margin: 0;
  }
  #bienvenidos .col-12 {
    /* padding: 0 20px; */
    padding: 0;
  }
  #bienvenidos .v-btn {
    margin-bottom: 40px;
  }
  #bienvenidos h2 .display-3 {
    font-size: 1.75rem !important;
  }
}
.before-enter {
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.enter {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

.v-btn.custom-btn {
  background-color: rgb(32, 71, 122) !important;
}
</style>