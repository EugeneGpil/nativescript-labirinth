<template>
  <Page actionBarHidden="true">
    <GridLayout>
      <Canvas id="canvas" width="100%" height="100%" @ready="doCanvasStart"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue'
import App from '~/classes/app'

export default Vue.extend({
  data() {
    return {
      canvas: null,
      ctx: null
    }
  },

  methods: {
    doCanvasStart(args: any) {
      this.canvas = args.object
      this.ctx = (this.canvas as any).getContext('2d') as any
      (this.ctx as any).fillStyle = 'green';
      (this.ctx as any).fillRect(10, 10, 150, 100)
    }
  },

  mounted() {
    App.setImmersiveMode()
  },
})
</script>
