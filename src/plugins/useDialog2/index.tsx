import { createVNode, render, defineComponent, ref } from 'vue'
import { NModal, NConfigProvider, zhCN, dateZhCN } from 'naive-ui'
import { drag, unDrag } from '@/hooks/useDialogDragger'
const tpl = defineComponent({
  props: ['com', 'opts'],
  setup() {
    const show = ref(false)
    const loaded = ref(false)
    // 显示
    setTimeout(() => {
      show.value = true
    }, 300)
    // 加载子组件
    setTimeout(() => {
      loaded.value = true
    }, 320)
    const header: any = ref()
    onMounted(() => {
      console.log(header.value)
      // drag(header.value)
    })
    setTimeout(() => {
      drag(header.value)
    }, 1000)

    return {
      show,
      loaded,
      header
    }
  },
  render() {
    const onClose: any = (args: any) => {
      this.show = false
      unDrag(this.header);
      setTimeout(() => {
        // @ts-ignore
        this.$.appContext?.$close(args)
      }, 300)
    }
    const onSuccess = (args: any) => {
      onClose({ ...args, type: 'success' })
    }
    const onCancel = (args: any) => {
      if (args) {
        args.type + 'cancel'
      }
      onClose({ ...args, type: 'cancel' })
    }
    const { title, ...rest } = this.$props.opts
    return (
      <NConfigProvider locale={zhCN} date-locale={dateZhCN}>
        <NModal
          v-model:show={this.show}
          onClose={onClose}
          preset="dialog"
          title="Dialog"
          maskClosable={false}
          style="--n-padding:16px;--n-close-margin:16px 16px 0 0;"
          show-icon={false}
        >
          {{
            action: () => <div id="footer"></div>,
            default: () =>
              this.loaded
                ? h(this.$props.com, {
                    onSuccess,
                    onCancel,
                    onClose,
                    ...rest
                  })
                : null,
            header: h('div', {
              ref:'header'
            }, title)
          }}
        </NModal>
      </NConfigProvider>
    )
  }
})

export interface Opts {
  /**
   * 弹窗标题
   */
  title: String
  /**
   * 参数
   */
  params: Record<string, any>
}
export default function useDialog2() {
  const ins: any = inject('ins')
  /**
   * 使用弹窗
   * @example
   * ```ts
   * let dialog=useDialog2()
   * dialog({
   *  com:"模板",
   *  //参数
   *  params:{}
   * }).then(data=>{
   *  //data为弹窗返回数据
   * })
   * ```
   * ```vue
   *   <template>
   *     <div>
   *       <n-input></n-input>
   *       <teleport to="#footer">
   *         <n-button type="primary" size="small">保存</n-button>
   *       </teleport>
   *     </div>
   *   </template>
   *   <script setup lang="ts" name="Temp">
   *   const props = defineProps(["onSuccess", "onCancel","onClose","params"]);
   *   const successIssue = () => {
   *     props.onSuccess({msg:"1"})
   *   };
   *   </script>
   * ```
   */
  return ({ com, opts }: { com: any; opts: Opts }) => {
    return new Promise((resolve) => {
      let container = document.createElement('div')
      const app: any = createVNode(tpl, {
        com: com,
        opts
      })
      app.appContext = ins.appContext.app._context
      app.appContext.$close = (result: any = true) => {
        render(null, container)
        container.parentNode?.removeChild(container)
        resolve(result)
      }
      render(app, container)
    })
  }
}
