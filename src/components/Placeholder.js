// @flow
import React, { type Node } from 'react';

import { className } from '../utils';
import { colors, spacing } from '../theme';
import { Div } from '../primitives';
import { marginHorizontal } from '../mixins';
import { type PropsWithStyles } from '../types';

type Props = PropsWithStyles & {
  children: Node,
};

export const css = () => ({
  ...marginHorizontal(spacing.baseUnit / 2),
  color: colors.neutral60,
  position: 'absolute',
});

const Placeholder = (props: Props) => {
  const { children, getStyles } = props;
  return (
    <Div
      className={className('placeholder')}
      css={getStyles('placeholder', props)}
    >
      {children}
    </Div>
  );
};

export default Placeholder;