import React, { useEffect, useState } from 'react';
import cs from 'classnames';
import styles from './index.less';
import { Cascader, Input, Tooltip } from 'antd';
import Iconfont from '@/components/Iconfont';
import CascaderDB from '@/components/CascaderDB';

interface IProps {
  className?: string;
}

function AiChatInput(props: IProps) {
  const { className } = props;

  return (
    <div className={cs(styles.aiChatInput, className)}>
      <div className={styles.inputTools}>
        <CascaderDB
          onChange={(v) => {
            console.log(v);
          }}
        />
      </div>
      <div className={styles.inputContent}>
        <Input.TextArea
          placeholder="书写...."
          bordered={false}
          maxLength={4090}
          autoSize={{
            minRows: 1,
            maxRows: 4,
          }}
        />
        <Iconfont code="&#x100bd;" className={styles.sendBtn} />
      </div>
    </div>
  );
}

export default AiChatInput;
