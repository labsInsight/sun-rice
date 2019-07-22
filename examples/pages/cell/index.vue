<template>
  <div class="group">
    <div class="block">
      <div class="text">基础用法</div>
      <s-cell-group :border="false" class="items">
        <s-cell class="item" value="有内容，无边框" />
      </s-cell-group>

      <div class="items">
        <s-cell class="item" border value="有内容，有边框" />
        <s-cell title="标题" value="有标题也有内容" />
        <s-cell title="必选" value="内容：单元格必选" required />
        <s-cell title="标题" value="内容：标题和描述信息" label="描述信息" />
        <s-cell title="限制标题宽度" value="标题宽度为60px" titleWidth="60"/>
        <s-cell title="限制内容宽度" value="设定内容最大宽度为120，设定内容最大宽度为120，设定内容最大宽度为120" labelWidth="120"/>
      </div>
    </div>

    <div class="block">
      <div class="text">组</div>
      <s-cell-group class="items">
        <s-cell value="内容1" />
        <s-cell value="内容2" />
      </s-cell-group>
    </div>

    <div class="block">
      <div class="text">点击事件 ---- 点击了 {{numbar}} 次</div>
      <s-cell-group class="items">
        <s-cell title="点击触发事件" value="内容" clickable @click="onClick($event, 'value')" />
      </s-cell-group>
    </div>

    <div class="block">
      <div class="text">左图标右箭头</div>
      <s-cell-group class="items">
        <s-cell title="收藏夹" value="箭头向上" :icon="favorfill" arrowDirection="up" />
        <s-cell title="联系人" value="箭头向下" :icon="peoplefill" arrowDirection="down" />
        <s-cell title="照片集" value="箭头向左" :icon="picfill" arrowDirection="left" />
        <s-cell title="我的钱包" :underline="false" value="箭头向右" :icon="rechargefill" arrowDirection="right" />
      </s-cell-group>
    </div>

    <div class="block">
      <div class="text">自定义slot</div>
      <s-cell-group class="items">
        <s-cell title="左右插入图片/图标" value="内容1">
          <template slot="left-icon"><img class="left-icon" :src="favorfill" /></template>
          <template slot="right-icon"><img class="right-icon" :src="peoplefill" /></template>
        </s-cell>
        <s-cell>
          <slot name="title"><span class="head-title">加粗显示</span></slot>
          <slot name="value"><span class="head-value">变小显示</span></slot>
          <slot name="extra"><span class="head-label">变颜色显示</span></slot>
        </s-cell>
      </s-cell-group>
    </div>

  </div>
</template>

<script>
// import { SunCell, SunCellGroup } from '../'

export default {
  name: 'sun-cell-demo',

  // components: { SunCell, SunCellGroup },

  data() {
    return {
      numbar: 0,
      favorfill: 'https://activity-photo-1255552770.cos.ap-chengdu.myqcloud.com/sun-rice/favorfill.png',
      peoplefill: 'https://activity-photo-1255552770.cos.ap-chengdu.myqcloud.com/sun-rice/peoplefill.png',
      picfill: 'https://activity-photo-1255552770.cos.ap-chengdu.myqcloud.com/sun-rice/picfill.png',
      rechargefill: 'https://activity-photo-1255552770.cos.ap-chengdu.myqcloud.com/sun-rice/rechargefill.png'
    }
  },

  methods: {
    onClick(event, value) {
      this.numbar += 1
    }
  }
}
</script>

<style scoped lang="scss" >

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

    .items {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      .item {
        margin-bottom: 5px;
      }
      .left-icon {
        width: 16px;
        height: 16px;
        margin: auto 5px auto 0;
      }
      .right-icon {
        width: 16px;
        height: 16px;
        margin: auto 5px;
      }
      .head-title {
        font-size: 14px;
        font-weight: bold;
      }
      .head-value {
        font-size: 11px;
      }
      .head-label {
        color: #f44;
        line-height: 100%;
        position: absolute;
        right: 15px;
      }
    }
  }
}
</style>
