import React, { ReactNode } from 'react';

export type ButtonLabelProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function ButtonLabel({ children }: ButtonLabelProps) {
  return (
    <div>
      {children}
    </div>
  );
}
