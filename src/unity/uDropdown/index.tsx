import {
  defineComponent,
  h,
  ref,
  type Ref,
  Fragment,
  watch,
  nextTick,
} from "vue";
import { NAvatar, NDropdown, NText } from "naive-ui";
import type { userInfo } from "@/types/users";
function renderCustomHeader() {
  return h(
    "div",
    {
      style: "display: flex; align-items: center; padding: 8px 12px;",
    },
    [
      h(NAvatar, {
        round: true,
        style: "margin-right: 12px;",
        src: "https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG",
      }),
      h("div", null, [
        h("div", null, [h(NText, { depth: 2 }, { default: () => "打工仔" })]),
        h("div", { style: "font-size: 12px;" }, [
          h(
            NText,
            { depth: 3 },
            { default: () => "毫无疑问，你是办公室里最亮的星" }
          ),
        ]),
      ]),
    ]
  );
}
/**
 * 判断对象数组中指定属性是否重复
 * @param arr 对象数组
 * @param keyName 指定属性名称，默认为 'key'
 * @returns 如果有重复返回 true，否则返回 false
 */
function hasDuplicateKeys<T extends Record<string, any>>(arr: T[], keyName: string = 'key'): boolean {
  const keys = new Set<string>();
  for (const obj of arr) {
    const key = obj[keyName];
    if (keys.has(key)) {
      return true;
    }
    keys.add(key);
  }
  return false;
}
export default defineComponent({
  name: "UDropDown",
  extends: NDropdown,
  props: {
    modelValue: {
      type: Array,
      require: true,
      default: () => [],
      validator: (val:any) => {
        let bl=hasDuplicateKeys(val,'key')
        console.log(bl,val)
        return !bl;
      },
    },
  },
  setup(props, { emit }) {
    const x: Ref<number> = ref(0);
    const y: Ref<number> = ref(0);
    const show: Ref<boolean> = ref(false);
    let defaultOptions:userInfo[] = [
      {
        key: "header",
        type: "render",
        render: renderCustomHeader,
      },
      {
        key: "header-divider",
        type: "divider",
      },
      {
        label: "处理群消息 342 条",
        key: "stmt1",
      },
      {
        label: "被 @ 58 次",
        key: "stmt2",
      },
      {
        label: "加入群 17 个",
        key: "stmt3",
      },
    ];
    const options: any = ref([...defaultOptions, ...props.modelValue]);
    const select = (key: string | number) => {
      console.log(key);
      show.value = false;
    };
    const outside = () => {
      show.value = false;
    };
    const contextMenu = (e: MouseEvent) => {
      e.preventDefault();
      show.value = false;
      nextTick().then(() => {
        show.value = true;
        x.value = e.clientX;
        y.value = e.clientY;
      });
    };
    const updateOptions = (newOptions: any) =>
      emit("update:modelValue", newOptions);
    watch(() => props.modelValue, updateOptions);
    return {
      x,
      y,
      show,
      options,
      select,
      outside,
      contextMenu,
    };
  },
  render() {
    return h(Fragment, null, [
      h(
        "div",
        {
          onContextmenu: this.contextMenu,
          style: "display: inline-block;",
        },
        this.$slots.default?.()
      ),
      h(NDropdown, {
        ...this.$props,
        trigger: "manual",
        x: this.x,
        y: this.y,
        show: this.show,
        options: this.options,
        onClickoutside: this.outside,
        onSelect: this.select,
      }),
    ]);
  },
});
