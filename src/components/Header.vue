<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>
      <router-link active-class="current" :to="{ name: 'Vote'}">
        <v-btn icon>
          <v-icon>mdi-vote-outline</v-icon>
        </v-btn>
      </router-link>

      <router-link active-class="current" :to="{ name: 'List'}">
        <v-btn icon>
          <v-icon>mdi-clipboard-text-outline</v-icon>
        </v-btn>
      </router-link>

      <router-link active-class="current" :to="{ name: 'ProductInfo'}">
        <v-btn icon>
          <v-icon>mdi-clipboard-edit-outline</v-icon>
        </v-btn>
      </router-link>

      <router-link :to="{ name: 'Login'}">
        <v-btn icon>
          <v-icon>mdi-logout-variant</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
}
.current .v-btn--icon .v-icon {
  color: #ff80ab;
}
</style>