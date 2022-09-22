import { ReactElement } from 'react';
import classNames from 'classnames';

type C = {
  className?: string;
  children?: ReactElement | string;
};

export default function Container({}: C) {
  return <div>hi</div>;
}
