<template>
  <div id="cesiumContainer">
  </div>
</template>

<script>
import Cesium from 'cesium/Cesium'
import widgets from 'cesium/Widgets/widgets.css'
export default {
  name: 'cesiumContainer',
  mounted () {
    let viewer = new Cesium.Viewer('cesiumContainer')
  }

}
</script>

<style scoped>
</style>
