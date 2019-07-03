<template>
  <div class="group">
    <div class="block">
      <div class="text">不同类别</div>
      <sun-cell title="默认">
        <sun-spinner slot="extra" class="spinner" />
      </sun-cell>
      <sun-cell title="snake">
        <sun-spinner slot="extra" class="spinner" type="snake" />
      </sun-cell>
      <sun-cell title="double-bounce">
        <sun-spinner slot="extra" class="spinner" type="double-bounce" />
      </sun-cell>
      <sun-cell title="triple-bounce">
        <sun-spinner slot="extra" class="spinner" type="triple-bounce" />
      </sun-cell>
    </div>

    <div class="block">
      <div class="text">不同大小</div>
      <sun-cell title="默认">
        <sun-spinner slot="extra" class="spinner" :size="30" />
      </sun-cell>
      <sun-cell title="snake">
        <sun-spinner slot="extra" class="spinner" :size="30" type="snake" />
      </sun-cell>
      <sun-cell title="double-bounce">
        <sun-spinner slot="extra" class="spinner" :size="30" type="double-bounce" />
      </sun-cell>
      <sun-cell title="triple-bounce">
        <sun-spinner slot="extra" class="spinner" :size="30" type="triple-bounce" />
      </sun-cell>
    </div>

    <div class="block">
      <div class="text">不同颜色</div>
      <sun-cell title="默认">
        <sun-spinner slot="extra" class="spinner" :size="30" color="#06bf04"/>
      </sun-cell>
      <sun-cell title="snake">
        <sun-spinner slot="extra" class="spinner" :size="30" color="#f44" type="snake" />
      </sun-cell>
      <sun-cell title="double-bounce">
        <sun-spinner slot="extra" class="spinner" :size="30" color="#38f" type="double-bounce" />
      </sun-cell>
      <sun-cell title="triple-bounce">
        <sun-spinner slot="extra" class="spinner" :size="30" color="#f60" type="triple-bounce" />
      </sun-cell>
    </div>

  </div>
</template>

<script>
// import SunSpinner from '../src/spinner.vue'
// import { SunCell } from '../../cell'

export default {
  name: 'sun-spiner-demo'

  // components: { SunSpinner, SunCell }
}
</script>

<style lang="scss" >

.group {
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  position: relative;

  .block {
    padding-bottom: 20px;

    .text {
      margin: 10px;
    }

    .spinner {
        align-self: center;
      }
      .line {
        position: absolute;
        left: 0;
        top: 19px;
        width: 100%;
        height: 2px;
        background: #000;
      }
  }
}
</style>
