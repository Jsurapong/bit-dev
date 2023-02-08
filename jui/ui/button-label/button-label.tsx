import React, { ReactNode } from 'react';
import { Button } from '@jsurapong/jui.ui.button';

export type ButtonLabelProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function ButtonLabel({ children }: ButtonLabelProps) {
  return (
    <>
      Label : <Button>{children}</Button> : Label
    </>
  );
}
