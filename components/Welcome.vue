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
            Leer mas <span class="arrow"></span>
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