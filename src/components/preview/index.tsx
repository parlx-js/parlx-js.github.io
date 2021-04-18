import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import * as S from './preview.styles';

type Props = {
  readonly title: string;
  readonly icon?: IconProp;
};

const Preview: React.FC<Props> = ({ title, icon, children }) => (
  <S.Body>
    <S.Title>
      <FontAwesomeIcon icon={icon} />

      {title}
    </S.Title>

    <S.Content>{children}</S.Content>
  </S.Body>
);

export default Preview;
