<template>
  <div class="footer">
    <v-container>
      <v-row>
        <v-col>
          <p>Vidriera Autlan |<b>AA+ Solutions</b></p>
          <!-- <h1>hello</h1> -->
        </v-col>

        <v-col>
          <div class="d-flex justify-end">
            <a href="http://www.facebook.com" target="_blank">
              <v-icon color="white">mdi-facebook</v-icon>
            </a>
            <a href="http://www.instagram.com" target="_blank">
              <v-icon color="white">mdi-instagram</v-icon>
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: #4b5267;
}
p,
h1,
v-icon {
  color: white;
}
v-icon {
  margin-left: 10px;
}
b {
  font-weight: bold;
  margin-left: 10px;
}
a {
  text-decoration: none;
  margin-left: 10px;
}
</style>
