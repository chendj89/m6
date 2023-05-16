import { NSpin } from 'naive-ui'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'UIosWidget',
  props: {
    bg1: {
      type: String,
      default: '#fb5971'
    },
    bg2: {
      type: String,
      default: '#ec3f52'
    },
    width: {
      type: Number,
      default: 280
    },
    padding: {
      type: Number,
      default: 10
    },
    radius: {
      type: Number,
      default: 8
    },
    iconRadius: {
      type: Number,
      default: 8
    },
    gap: {
      type: Number,
      default: 10
    },
    color: {
      type: String,
      default: '#fff'
    },
    cols: {
      type: Number,
      default: 6
    }
  },
  setup() {
    const data: any = ref({
      info: {
        icon: 'https://avatars.githubusercontent.com/u/105529957',
        title: 'bilibili',
        desc: '弹幕网站、活跃的ACG氛围、沙雕视频',
        url: 'https://www.bilibili.com',
        badge: {
          url: 'https://space.bilibili.com/352318038/fans/follow',
          icon: 'https://api.iconify.design/fa6-brands:bilibili.svg?color=%23ffffff'
        }
      },
      children: []
    })
    fetch(
      'https://api.bilibili.com/x/relation/followings?vmid=352318038&pn=1&ps=20&order=desc&order_type=attention'
    )
      .then((res) => res.json())
      .then((result: any) => {
        data.value.children = result.data.list.slice(0,10)
      })
    return {
      data
    }
  },
  render() {
    return h(
      'div',
      {
        class: 'ios',
        style: `
      --width:${this.$props.width}px;
      --padding:${this.$props.padding}px;
      --radius:${this.$props.radius}px;
      --iconRadius:${this.$props.iconRadius}px;
      --gap:${this.$props.gap}px;
      --bg1:${this.$props.bg1};
      --bg2:${this.$props.bg2};
      --color:${this.$props.color};
      --iconWidth:${
        (this.$props.width - this.$props.padding * (this.$props.cols + 1)) /
        this.$props.cols
      }px;
      display:inline-block;
      line-height:1;
      font-size: 20px;
      width:var(--width);
      color:var(--color);
      `
      },
      [
        h(
          'div',
          {
            class: 'ios-content',
            style: `position: relative;`
          },
          [
            h(
              'div',
              {
                class: 'ios-info',
                style: `
                display: flex;
                padding: var(--padding);
                background: var(--bg1);
                border-radius: var(--radius) var(--radius) 0 0;
              `
              },
              [
                h(
                  'a',
                  {
                    href: this.data.info.url,
                    target: '_blank',
                    style: 'display:inline-flex'
                  },
                  [
                    h('img', {
                      class: 'ios-info-icon',
                      style: `
                    display: inline-block;
                    width: calc(var(--width) / ${this.$props.cols - 1});
                    height: calc(var(--width) / ${this.$props.cols - 1});
                    border-radius: var(--iconRadius);
                    `,
                      src: this.data.info.icon
                    })
                  ]
                ),
                h(
                  'div',
                  {
                    class: 'ios-info-title',
                    style: `margin-left: var(--padding);`
                  },
                  [
                    h('div', {}, this.data.info.title),
                    h(
                      'div',
                      {
                        class: 'ios-info-desc',
                        style: `
                          font-size: 12px;
                          line-height: 1.5;
                          margin-top: calc(var(--padding) / 2);
                      `
                      },
                      this.data.info.desc
                    )
                  ]
                )
              ]
            ),
            h(
              'div',
              {
                class: 'ios-list',
                style: `
                  display: flex;
                  flex-wrap: wrap;
                  gap: var(--padding);
                  padding: var(--padding);
                  background: var(--bg2);
                  border-radius: 0 0 var(--radius) var(--radius);
                `
              },
              [
                this.data.children.length
                  ? this.data.children.map((item: any) =>
                      h(
                        'a',
                        {
                          class: 'ios-list-icon',
                          href: `https://space.bilibili.com/${item.mid}`,
                          target: '_blank',
                          style: `
                      display: inline-block;
                      width: var(--iconWidth);
                      height: var(--iconWidth);
                `
                        },
                        [
                          h('img', {
                            style: `
                        border-radius: calc(var(--radius) /2);
                        display: block;
                        width: 100%;
                        height: 100%;
                  `,
                            src: item.face
                          })
                        ]
                      )
                    )
                  : h(
                      'div',
                      {
                        style: `
                        height:calc(var(--iconWidth)*2 + var(--gap));
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        width: 100%;`
                      },
                      h(NSpin, null)
                    )
              ]
            ),
            h(
              'a',
              {
                href: this.data.info.badge.url,
                target: '_blank',
                style: `
                position: absolute;
                right: var(--padding);
                top: var(--padding);
              `
              },
              [
                h('img', {
                  src: this.data.info.badge.icon
                })
              ]
            )
          ]
        )
      ]
    )
  }
})
