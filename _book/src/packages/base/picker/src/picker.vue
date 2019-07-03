<template>
  <div class="sun-picker">
    <div class="sun-picker-toolbar sun-line-top-bottom" v-if="showToolbar">
      <slot>
        <div class="sun-picker-cancel" @click="emit('cancel')">{{ cancelButtonText || '取消' }}</div>
        <div class="sun-picker-title sun-ellipsis" v-if="title" v-text="title" />
        <div class="sun-picker-confirm" @click="loading? '': emit('confirm')">{{ confirmButtonText || '确定' }}</div>
      </slot>
    </div>
    <div v-if="loading" class="sun-picker-loading">
      <sun-spinner class="sun-picker-loading-loading" :size="20" color="#000" type="fading-circle" />
    </div>
    <div class="sun-picker-columns" :style="columnsStyle" @touchmove.prevent >
      <sun-picker-column v-for="(item, index) in currentColumns" :key="index" :value-key="valueKey" :options="item.values"
        :class-name="item.className" :default-index="item.defaultIndex" :item-height="itemHeight" :visible-item-count="visibleItemCount"
        @change="onChange(index)" />
      <div class="sun-picker-frame sun-line-top-bottom" :style="frameStyle" />
    </div>
  </div>
</template>

<script>
import deepClone from '../../../utils/deep-clone'
import SunPickerColumn from './picker-column'
import SunSpinner from '../../spinner'

export default ({
  name: 'sun-picker',

  components: { SunPickerColumn, SunSpinner },

  props: {
    title: {
      type: String,
      default: ''
    },
    loading: Boolean,
    showToolbar: Boolean,
    confirmButtonText: {
      type: String,
      default: ''
    },
    cancelButtonText: {
      type: String,
      default: ''
    },
    visibleItemCount: {
      type: Number,
      default: 5
    },
    valueKey: {
      type: String,
      default: 'text'
    },
    itemHeight: {
      type: Number,
      default: 44
    },
    columns: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      children: [],
      currentColumns: []
    }
  },

  watch: {
    columns: {
      handler() {
        const columns = this.columns.map(deepClone)
        this.isSimpleColumn = columns.length && !columns[0].values
        this.currentColumns = this.isSimpleColumn ? [{ values: columns }] : columns
      },
      immediate: true
    }
  },

  computed: {
    frameStyle() {
      return {
        height: this.itemHeight + 'px'
      }
    },

    columnsStyle() {
      return {
        height: this.itemHeight * this.visibleItemCount + 'px'
      }
    }
  },

  methods: {
    emit(event) {
      if (this.isSimpleColumn) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0))
      } else {
        this.$emit(event, this.getValues(), this.getIndexes())
      }
    },

    onChange(columnIndex) {
      if (this.isSimpleColumn) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0))
      } else {
        this.$emit('change', this, this.getValues(), columnIndex)
      }
    },

    // get column instance by index
    getColumn(index) {
      return this.children[index]
    },

    // get column value by index
    getColumnValue(index) {
      return (this.getColumn(index) || {}).currentValue
    },

    // set column value by index
    setColumnValue(index, value) {
      const column = this.getColumn(index)
      column && column.setValue(value)
    },

    // get column option index by column index
    getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex
    },

    // set column option index by column index
    setColumnIndex(columnIndex, optionIndex) {
      const column = this.getColumn(columnIndex)
      column && column.setIndex(optionIndex)
    },

    // get options of column by index
    getColumnValues(index) {
      return (this.currentColumns[index] || {}).values
    },

    // set options of column by index
    setColumnValues(index, options) {
      const column = this.currentColumns[index]
      if (column) {
        column.values = options
      }
    },

    // get values of all columns
    getValues() {
      return this.children.map(child => {
        return child.currentValue
      })
    },

    // set values of all columns
    setValues(values) {
      values.forEach((value, index) => {
        this.setColumnValue(index, value)
      })
    },

    // get indexes of all columns
    getIndexes() {
      return this.children.map(child => child.currentIndex)
    },

    // set indexes of all columns
    setIndexes(indexes) {
      indexes.forEach((optionIndex, columnIndex) => {
        this.setColumnIndex(columnIndex, optionIndex)
      })
    }
  }
})
</script>

<style lang="css" >
@import "../../../styles/theme.css";

@component-namespace sun {
  @component picker {
    position: relative;
    overflow: hidden;
    user-select: none;
    background-color: $white;
    width: 100%;
    -webkit-text-size-adjust: 100%; /* avoid iOS text size adjust */

    @descendent toolbar {
      display: flex;
      height: 40px;
      line-height: 40px;
      justify-content: space-between;
    }

    @descendent cancel, confirm {
      color: $blue;
      padding: 0 15px;
      font-size: 14px;

      &:active {
        background-color: $active-color;
      }
    }

    @descendent title {
      max-width: 50%;
      text-align: center;
    }

    @descendent columns {
      display: flex;
      position: relative;
    }

    @descendent loading {
      top: 40px;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
      position: absolute;
      background-color: rgba(255, 255, 255, 0.9);
      @descendent loading {
        position: absolute;
        top: 50%;
        left: 50%;
      }
    }

    @descendent frame {
      top: 50%;
      left: 0;
      width: 100%;
      z-index: 1;
      position: absolute;
      pointer-events: none;
      transform: translateY(-50%);

      &.sun-line-top-bottom{
      position: absolute;
    }
    }
  }
}
</style>
