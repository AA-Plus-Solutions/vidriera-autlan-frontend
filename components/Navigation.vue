<template>
  <header class="header">
    <v-container>
      <!-- <h1 class="text-title">Vidriera App</h1> -->
      <!-- <nuxt-image src="/vidriera_autlan_foto.jpg" /> -->
      <!-- <img class="logo-img" src="/logo_vidriera_autlan.jpg" /> -->
      <div class="d-flex justify-space-between">
        <div class="logo-container">
          <nuxt-link tag="img" src="/logo_vidriera_autlan.jpg" to="/">
          </nuxt-link>
        </div>
        <div class="additional-routes d-flex align-center justify-end">
          <nav class="d-flex justify-end">
            <ul>
              <li>
                <NuxtLink to="/">Inicio</NuxtLink>
              </li>

              <li>
                <NuxtLink to="/about-us">Nosotros</NuxtLink>
              </li>
              <li>
                <nuxt-link to="/catalog">Catalogo</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact">Contacto</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </v-container>
  </header>
</template>
<style scoped>
.logo-container {
  width: 20%;
}
.additional-routes {
  width: 50%;
}
.logo-container img {
  width: 100%;
  max-height: 100px;
}
/* .header {
  color: #ffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  border-bottom: 1px solid #2ecc71;
} */
header {
  border-bottom: 1px solid #4b5267;
}
header .container {
  padding: 0 12px;
}
.header ul {
  display: flex;
  list-style: none;
}
.header a {
  color: #2d3436;
  font-size: 14px;
  /* background: #2d3436; */
  padding: 0.3rem 1rem;
  margin-right: 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
}
.header a:hover,
.header a.nuxt-link-exact-active {
  /* background: #2c3e50; */
  border-bottom: 1px solid rgb(32, 71, 122);
  color: rgb(32, 71, 122);
  font-weight: bold;
}
</style>