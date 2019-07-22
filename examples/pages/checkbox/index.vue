<template>
  <div class="group">
    <div class="block">
      <div class="text">基础用法：{{checkbox1}}</div>
      <div class="items">
        <s-cell>
          <s-checkbox v-model="checkbox1">普通类别</s-checkbox>
        </s-cell>
      </div>
    </div>

    <div class="block">
      <div class="text">禁用状态</div>
      <div class="items">
        <s-cell>
          <s-checkbox disabled v-model="checkbox2">禁用</s-checkbox>
        </s-cell>
        <s-cell>
          <s-checkbox disabled v-model="checkbox3">选中+禁用</s-checkbox>
        </s-cell>
        <s-cell>
          <s-checkbox label-disabled v-model="checkbox4">禁用内容部分点击事件</s-checkbox>
        </s-cell>
      </div>
    </div>

    <div class="block">
      <div class="text">选择组：{{result1}}</div>
      <div class="items">
        <s-checkbox-group v-model="result1">
          <s-cell v-for="(item, index) in list" :key="index">
            <s-checkbox :name="item">
              checkbox {{ item }}
            </s-checkbox>
          </s-cell>
        </s-checkbox-group>
      </div>
    </div>

    <div class="block">
      <div class="text">最多2个可选：{{result2}}</div>
      <div class="items">
        <s-checkbox-group v-model="result2" :max="2">
          <s-cell v-for="(item, index) in list" :key="index">
            <s-checkbox :name="item">
              checkbox {{ item }}
            </s-checkbox>
          </s-cell>
        </s-checkbox-group>
      </div>
    </div>

    <div class="block">
      <div class="text">左右对齐：{{result3}}</div>
      <div class="items">
        <s-checkbox-group v-model="result3">
          <s-cell v-for="(item, index) in list" :title="'checkbox ' + item" :key="index">
            <s-checkbox :name="item" />
          </s-cell>
        </s-checkbox-group>
      </div>
    </div>

    <div class="block">
      <div class="text">自定义图标{{checkbox1}}</div>
      <div class="items">
        <s-cell>
          <s-checkbox v-model="checkbox1" class="myicon">普通类别</s-checkbox>
        </s-cell>
      </div>
    </div>
  </div>
</template>

<script>
// import { SunCheckbox, SunCheckboxGroup } from '../'
// import { SunCell, SunCellGroup } from '../../cell'

export default {
  name: 'sun-checkbox-demo',

  // components: { SunCheckbox, SunCheckboxGroup, SunCell, SunCellGroup },

  data() {
    return {
      checkbox1: true,
      checkbox2: false,
      checkbox3: true,
      checkbox4: true,
      list: ['a', 'b', 'c'],
      result1: ['a', 'b'],
      result2: [],
      result3: []
    }
  }
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

    .items {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      margin-bottom: 20px;
      font-size: 14px;

      .sun-checkbox-group {
        width: 100%;
        .sun-cell {
          .sun-checkbox {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.myicon {
  .sun-checkbox-checked {
    background-color: #f56c6c;
    border: 1px solid #f56c6c;
  }
}
</style>
