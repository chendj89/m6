import type { BadgeProps } from 'naive-ui'
/**
 * 用户信息
 */
export interface userInfo {
  key: string
  label?: string
  type?: string
  render?: () => any
}

export type IMenu = Array<'menu' | 'tools' | 'help'>
export interface IUserMsg {
  menu: IMenu
}

export type Features = Record<string, any>

export interface IUserDataItem {
  name: string
  desc: string
  url: string
  icon: string
  badge?: BadgeProps,
  features?:Features
}

export interface IUserData extends IUserDataItem {
  info?: IUserMsg
  children?:IUserDataItem[]
}
