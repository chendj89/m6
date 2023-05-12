import DataForm from '@/components/common/DataForm'
import { renderInput } from '@/hooks/form'
import type { DataFormType, FormItem } from '@/types/components'
import type { FormProps, SelectOption } from 'naive-ui'
export default defineComponent({
  name: 'renderForm',
  setup() {
    const formItems = [
      {
        label: '会议名称',
        key: 'name',
        required: true,
        value: ref(null),
        render: (formItem: FormItem) =>
          renderInput(formItem.value, {
            placeholder: '请输入会议名称',
            clearable: true
          }),
        validator: (formItem: FormItem) => {
          if (!formItem.value.value) {
            return false
          }
          return true
        }
      }
    ]
    const dataForm: any = ref<DataFormType | null>(null)
    const formConfig = {
      labelWidth: 100,
      size: 'medium',
      labelAlign: 'right'
    } as FormProps
    function submit() {
      console.log(1)
      console.log(dataForm.value?.validator())
      if (!dataForm.value?.validator()) {
        console.log(
          '提交成功，参数为：' +
            JSON.stringify(dataForm.value?.generatorParams())
        )
      }
    }
    return {
      dataForm,
      formConfig,
      formItems,
      submit
    }
  },
  render() {
    return h('div', { class: '--00' }, [
      h(DataForm, {
        ref: 'dataForm',
        options: this.formItems,
        formConfig: this.formConfig
      }),
      h('div', { onClick: this.submit }, '确定')
    ])
  }
})
