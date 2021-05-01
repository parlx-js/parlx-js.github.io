import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import * as S from './docs.styles';

type Props = {
  readonly title: string;
  readonly icon?: IconProp;
};

const Docs: React.FC<Props> = ({ title, icon, children }) => (
  <S.Body>
    <S.Title>
      <S.Icon icon={icon} />

      {title}
    </S.Title>

    <S.Content>{children}</S.Content>
  </S.Body>
);

export default Docs;
