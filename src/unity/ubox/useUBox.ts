import { Teleport, createVNode, render } from 'vue'
import index from './index'
import Content from './context.vue' // 这是首个组件，展示了组件的基本行为，包括创建组件实例、属
export function useUBox() {
  const ins: any = inject('ins')
  return () =>
    new Promise((resolve) => {
      const container = document.createElement('div')
      const onClose = (params: any) => {
        render(null, container)
        container.parentNode?.removeChild(container)
        resolve(params || true)
      }
      let app = createVNode(
        h(
          Teleport,
          { to: 'body' },
          h(
            index,
            {
              onClose: onClose,
              title: '000'
            },
            {
              default: () => h(Content, { msg: '999', onClose: onClose })
            }
          )
        )
      )
      app.appContext = ins.appContext.app._context
      render(app, container)
    })
}
