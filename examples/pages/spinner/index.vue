<template>
  <div class="group">
    <div class="block">
      <div class="text">不同类别</div>
      <s-cell title="默认">
        <s-spinner slot="extra" class="spinner" />
      </s-cell>
      <s-cell title="snake">
        <s-spinner slot="extra" class="spinner" type="snake" />
      </s-cell>
      <s-cell title="double-bounce">
        <s-spinner slot="extra" class="spinner" type="double-bounce" />
      </s-cell>
      <s-cell title="triple-bounce">
        <s-spinner slot="extra" class="spinner" type="triple-bounce" />
      </s-cell>
    </div>

    <div class="block">
      <div class="text">不同大小</div>
      <s-cell title="默认">
        <s-spinner slot="extra" class="spinner" :size="30" />
      </s-cell>
      <s-cell title="snake">
        <s-spinner slot="extra" class="spinner" :size="30" type="snake" />
      </s-cell>
      <s-cell title="double-bounce">
        <s-spinner slot="extra" class="spinner" :size="30" type="double-bounce" />
      </s-cell>
      <s-cell title="triple-bounce">
        <s-spinner slot="extra" class="spinner" :size="30" type="triple-bounce" />
      </s-cell>
    </div>

    <div class="block">
      <div class="text">不同颜色</div>
      <s-cell title="默认">
        <s-spinner slot="extra" class="spinner" :size="30" color="#06bf04"/>
      </s-cell>
      <s-cell title="snake">
        <s-spinner slot="extra" class="spinner" :size="30" color="#f44" type="snake" />
      </s-cell>
      <s-cell title="double-bounce">
        <s-spinner slot="extra" class="spinner" :size="30" color="#38f" type="double-bounce" />
      </s-cell>
      <s-cell title="triple-bounce">
        <s-spinner slot="extra" class="spinner" :size="30" color="#f60" type="triple-bounce" />
      </s-cell>
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
