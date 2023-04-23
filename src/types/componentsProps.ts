/*
 * @Descripttion:
 * @version:
 * @LastEditors: jp
 * @Date: 2023-04-23 16:30:40
 * @LastEditTime: 2023-04-23 16:37:13
 */
import { FC } from 'react';

type RegisterFun = (option: object) => object;
export type ComponentPropsWrap<P> = FC<React.PropsWithChildren<P>>;
export interface LowComponentPropsWrap<T> extends ComponentPropsWrap<T> {
  register: RegisterFun;
}
