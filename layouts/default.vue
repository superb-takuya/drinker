<template>
  <div>
    <app-header />
    <main>
      {{$store.state}}
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
