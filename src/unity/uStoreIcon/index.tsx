import { defineComponent, ref, watch, h, type SetupContext } from 'vue'

interface Props {
  src: string
}
export default defineComponent({
  name: 'ImageLoader',
  props: {
    src: {
      type: String,
      required: true
    }
  },
  setup(props: Props, context: SetupContext) {
    const imageSrc = ref('')
    const isSvg = (url: string): boolean => {
      return url.indexOf('.svg') > -1 || url.startsWith('<svg')
    }
    const saveToLocalStorage = async (url: string) => {
      console.log(isSvg(url), url)
      if (isSvg(url)) {
        if (url.startsWith('<svg')) {
          localStorage.setItem(url, url)
          imageSrc.value = url
        } else {
          try {
            const response = await fetch(url)
            const blob = await response.blob()
            if (blob.type == 'image/svg+xml') {
              let reader: any = new FileReader()
              reader.readAsText(blob, 'utf-8')
              reader.onload = function () {
                localStorage.setItem(url, reader.result.replace(/\"/gm, "'"))
              }
            } else {
              localStorage.setItem(url, url)
            }
          } catch (error) {
            console.error('Error fetching SVG:', error)
          }
        }
      } else {
        localStorage.setItem(url, url)
        imageSrc.value = url
      }
    }
    const cachedData = localStorage.getItem(props.src)
    if (cachedData) {
      imageSrc.value = isSvg(cachedData) ? cachedData : props.src
    } else {
      saveToLocalStorage(props.src)
    }
    watch(
      () => props.src,
      (newValue) => {
        const cachedData = localStorage.getItem(newValue)
        if (cachedData) {
          imageSrc.value = isSvg(cachedData) ? cachedData : newValue
        } else {
          saveToLocalStorage(newValue)
        }
      }
    )
    return {
      imageSrc
    }
  },
  render() {
    return h('div', [
      this.imageSrc.startsWith('<svg')
        ? h('div', { innerHTML: this.imageSrc })
        : h('img', {
            src: this.imageSrc
          })
    ])
  }
})

/**
<template>
  <div>
    <ImageLoader src="https://example.com/image.jpg" />
    <ImageLoader src="https://example.com/image.svg" />
    <ImageLoader src="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='red' /></svg>" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ImageLoader from './ImageLoader';

export default defineComponent({
  components: {
    ImageLoader,
  }
});
</script>

 */
