<template>
  <div>
    <app-header />
    <main>
      <Nuxt />
    </main>
    <app-footer />
  </div>
</template>


<script>
import AppHeader from "~/components/common/header.vue"
import AppFooter from "~/components/common/footer.vue"

export default {
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>
