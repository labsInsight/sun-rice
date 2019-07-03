<template>
  <div class="sun-uploader">
    <slot />
    <input v-bind="$attrs" ref="input" type="file" class="sun-uploader-input" :accept="accept" :disabled="disabled"
      @change="onChange">
  </div>
</template>

<script>

export default ({
  name: 'sun-uploader',

  inheritAttrs: false,

  props: {
    disabled: Boolean,
    beforeRead: Function,
    afterRead: Function,
    accept: {
      type: String,
      default: 'image/*'
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    },
    compressImg: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onChange(event) {
      let { files } = event.target
      if (this.disabled || !files.length) {
        return
      }

      files = files.length === 1 ? files[0] : [].slice.call(files, 0)
      if (!files || (this.beforeRead && !this.beforeRead(files))) {
        return
      }

      if (Array.isArray(files)) {
        Promise.all(files.map(this.readFile)).then(contents => {
          let oversize = false
          const payload = files.map((file, index) => {
            if (file.size > this.maxSize) {
              oversize = true
            }

            return {
              file: files[index],
              content: contents[index]
            }
          })

          this.onAfterRead(payload, oversize)
        })
      } else {
        this.readFile(files).then(content => {
          this.onAfterRead(
            { file: files, content },
            files.size > this.maxSize
          )
        })
      }
    },

    readFile(file) {
      return new Promise(resolve => {
        const reader = new FileReader()

        reader.onload = event => {
          resolve(event.target.result)
        }

        if (this.resultType === 'dataUrl') {
          reader.readAsDataURL(file)
        } else if (this.resultType === 'text') {
          reader.readAsText(file)
        }
      })
    },

    onAfterRead(files, oversize) {
      if (oversize) {
        if (this.compressImg && /^image/.test(files.file.type)) {
          let img = new Image()
          img.src = files.content
          const _this = this
          img.onload = function () {
            let base64data = _this.compress(img, files.file.size)
            let blob = _this.dataURItoBlob(base64data, files.file.type)
            const file = {
              file: new window.File([blob], files.file.name, { type: files.file.type }),
              content: base64data
            }
            _this.afterRead && _this.afterRead(file)
            _this.$refs.input && (_this.$refs.input.value = '')
          }
        } else {
          this.$emit('oversize', files)
        }
      } else {
        this.afterRead && this.afterRead(files)
        this.$refs.input && (this.$refs.input.value = '')
      }
    },

    // 压缩图片
    compress(img, size) {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const width = img.width
      const height = img.height
      const quality = this.maxSize / size
      canvas.width = width
      canvas.height = height
      // 铺底色
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0, width, height)

      // 进行最小压缩
      const ndata = canvas.toDataURL('image/jpeg', quality)
      return ndata
    },
    dataURItoBlob(base64Data, type) {
      let byteString
      if (base64Data.split(',')[0].indexOf('base64') >= 0) {
        byteString = atob(base64Data.split(',')[1])
      } else {
        byteString = unescape(base64Data.split(',')[1])
      }
      let mimeString = base64Data
        .split(',')[0]
        .split(':')[1]
        .split(';')[0]
      let ia = new Uint8Array(byteString.length)
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
      }
      return new Blob([ia], { type: mimeString })
    }
  }
})
</script>

<style lang="css" >
@import "../../../styles/theme.css";

@component-namespace sun {
  @component uploader {
    position: relative;
    display: inline-block;

    @descendent input {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }

    input[type="file"]::-webkit-file-upload-button {
      cursor: pointer;
    }
  }
}
</style>
