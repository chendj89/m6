import DataForm from '@/components/common/DataForm'
import { renderInput } from '@/hooks/form'
import type { DataFormType, FormItem } from '@/types/components'
import {
  NInput,
  type FormProps,
  type SelectOption,
  NForm,
  NFormItem
} from 'naive-ui'
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
    const ok = ref('10:28')
    function createFeedback(value: string) {
      switch (value) {
        case '10:30':
          return '十点半的飞机已经到了'
        case '10:29':
          return '虽然差不多了，请把时间调到 10:30'
        default:
          return '请把时间调到 10:30'
      }
    }
    function createStatus(value: string) {
      switch (value) {
        case '10:30':
          return undefined
        case '10:29':
          return 'warning'
        default:
          return 'error'
      }
    }
    const inputFeedback = computed(() => {
      return createFeedback(ok.value)
    })
    const inputValidationStatus = computed(() => {
      return createStatus(ok.value)
    })
    return {
      dataForm,
      formConfig,
      formItems,
      submit,
      ok,
      inputFeedback,
      inputValidationStatus
    }
  },
  render() {
    return h('div', { class: '--00' }, [
      h(DataForm, {
        ref: 'dataForm',
        options: this.formItems,
        formConfig: this.formConfig
      }),
      h(NForm, {}, [
        h(
          NFormItem,
          {
            label: '哟呵',
            validationStatus: this.inputValidationStatus,
            feedback: this.inputFeedback
          },
          [
            h(NInput, {
              value: this.ok,
              onInput: (event: any) => {
                this.ok = event
              }
            })
          ]
        )
      ]),
      h('div', { onClick: this.submit }, '确定')
    ])
  }
})
