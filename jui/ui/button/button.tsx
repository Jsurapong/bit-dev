import React, { ReactNode } from 'react';
import { map } from 'lodash';

export type ButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Button({ children }: ButtonProps) {
  console.log(map([1, 2, 3], (n: number) => n * 2));

  return <button style={{ color: 'red' }}>{children}</button>;
}
