import { Teleport } from 'vue'
import { drag, unDrag } from '@/hooks/useDialogDragger'
import { NButton } from 'naive-ui'
import { NBaseClose, NBaseIcon } from 'naive-ui/es/_internal'
export default defineComponent({
  name: 'UBox',
  props: {
    onClose: {
      type: Function,
      default: () => {}
    },
  },
  setup() {
    const headerRef = ref()
    onMounted(() => {
      drag(headerRef.value)
    })
    onBeforeUnmount(() => {
      console.log('ubox==>onBeforeUnmount')
      // 防止 vue 溢出时崩溃页面
      unDrag(headerRef.value)
    })
    return {
      headerRef
    }
  },
  render() {
    return h(
      Teleport,
      {
        to: 'body'
      },
      h(
        'div',
        {
          class: 'ubox',
          style: 'z-index:99;left:100px;top:100px'
        },
        [
          h(
            'div',
            {
              class: 'ubox-content'
            },
            [
              h('div', { class: 'ubox-header', ref: 'headerRef' }, [
                h('div', {}, '标题'),
                h(NBaseClose, {
                  clsPrefix: 'n',
                  onClick: () => this.$props.onClose()
                })
              ]),
              h('div', { class: 'ubox-body' }, this.$slots.default?.())
            ]
          )
        ]
      )
    )
  }
})
