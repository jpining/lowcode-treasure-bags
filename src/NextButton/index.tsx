/*
 * @Descripttion:
 * @version:
 * @LastEditors: jp
 * @Date: 2023-03-14 13:50:55
 * @LastEditTime: 2023-04-23 16:38:42
 */
import { Button } from 'antd';
import classNames from 'classnames';
import { LowComponentPropsWrap } from 'lowcode-treasuer-bags/types/componentsProps';
import React from 'react';
import './index.less';

interface NextButtonProps {
  className?: string;
  currentNodeId?: string;
  text?: string;
}
const NextButton: LowComponentPropsWrap<NextButtonProps> = ({
  className,
  currentNodeId,
  ...props
}) => {
  return (
    <Button className={classNames('nextButton', className)} {...props}>
      {props.children || props.text || currentNodeId}
    </Button>
  );
};

// 组件需要的
NextButton.register = (option: object) => {
  return {
    componentName: 'button', // 对应到设计组件名称
    props: {
      text: '默认按钮',
      type: 'primary',
      style: {
        marginRight: 8,
        marginBottom: 8,
      },
    }, // 默认属性
    transferAttributes: {
      style: {
        display: 'inline-block',
        width: 'auto',
      },
    }, // 附加到包裹的属性
    actionItem: {
      // 可以操作的项目（attribute：属性，style：样式）
      attribute: 'button',
      style: true,
    },
    // 对外显示类型
    externalType: '按钮',
    ...option,
  };
};

export default NextButton;
