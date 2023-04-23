/*
 * @Descripttion:
 * @version:
 * @LastEditors: jp
 * @Date: 2023-03-14 13:50:55
 * @LastEditTime: 2023-04-23 16:08:58
 */
import React, { FC, PropsWithChildren } from 'react';
import './index.less';

export interface NextPageProps {
  /**
   * @description 属性描述
   * @default "默认值"
   */
  style?: React.CSSProperties;
}
const NextPage: FC<PropsWithChildren<NextPageProps>> = (props) => {
  return (
    <main id="nextPage" className="nextpage" {...props}>
      {props.children}
    </main>
  );
};
export default NextPage;
