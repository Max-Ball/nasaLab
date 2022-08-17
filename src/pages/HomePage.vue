<template>
  <img class="img-fluid" :src="spaceInfo.img" alt="">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 offset-md-3 d-flex flex-column text-main">
        <div class="text-end mt-5">
          <h1>
            {{spaceInfo.title}}
          </h1>
          <h3>
            {{spaceInfo.date}}
          </h3>
        </div>
        <div class="my-5">
          <h5>
            {{spaceInfo.explanation}}
          </h5>
        </div>
      </div>
      <div class="col-md-3 text-end">
        <button type="button" class="btn text-button" data-bs-toggle="modal"
        data-bs-target="#space-info">
          <h1>
            <i class="mdi mdi-telescope"></i>
          </h1>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { spacesService } from '../services/spacesService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'

export default {
  setup() {
    async function getSpaceInfo() {
      try {
        await spacesService.getSpaceInfo()
      } catch (error) {
        logger.error('[getting space info]', error)
        Pop.error(error)
      }
    }

  onMounted(() => { getSpaceInfo() })
    
  return {
    spaceInfo: computed(() => AppState.spaceInfo)
    
    }
  }
    
}
</script>

<style scoped lang="scss">

.text-main{
  position: relative;
  z-index: 1;
  color: rgb(220, 218, 214);
  text-shadow: 2px 2px 1px rgb(31, 29, 29);
}


.text-button{
  position: relative;
  z-index: 1;
  color: rgb(220, 218, 214);
  text-shadow: 2px 2px 1px rgb(31, 29, 29);
}
img{
  position: absolute;
  z-index: 0;
  height: 100vh;
  width: 100vw;
}
</style>
