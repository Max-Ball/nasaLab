<template>
  <main>
    <router-view />
  </main>
  <Modal id="space-info" class="text-center">
    <h3 class="mb-3">
      Please enter a date:
    </h3>
    <form @submit.prevent="getSpaceInfoByDate()" class="text-center">
      <input type="date" required v-model="date">
      <button type="submit" class="btn btn-primary">Select Date</button>
      
    </form>
  </Modal>
</template>

<script>
import { computed, ref } from 'vue'
import { AppState } from './AppState'
import { logger } from './utils/Logger'
import Pop from './utils/Pop'
import { spacesService } from './services/spacesService'
export default {
  name: 'App',
  setup() {
    const date = ref('')
    return {
      date,
      appState: computed(() => AppState),
      spaceInfo: computed(() => AppState.spaceInfo),

      getSpaceInfoByDate() {
        try {
          spacesService.getSpaceInfoByDate(date.value)
          date.value = ''
        } catch (error) {
          logger.error('[getting info by date]', error)
          Pop.error(error)
        }
      }
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
