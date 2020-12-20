<template>
  <div>
    <app-header />
    <main>
      <Nuxt />
    </main>
  </div>
</template>


<script>
import AppHeader from "~/components/common/header.vue"

export default {
  components: {
    AppHeader,
  },
}
</script>
