import classNames from 'classnames';
import React, { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';

type ComponentProp<C extends ElementType> = {
  component?: C;
}

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
};

type PropsToOmit<C extends ElementType, P> = keyof (ComponentProp<C> & P);

type PolymorphicComponentProps<C extends ElementType, Props = {}> =
  PropsWithChildren<Props & ComponentProp<C>>
  & Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export const Button = <C extends ElementType = 'button'>({
                                                           component,
                                                           variant = 'primary',
                                                           size = 'medium',
                                                           children,
                                                           className,
                                                           ...rest
                                                         }: PolymorphicComponentProps<C, ButtonProps>) => {

  const classes = {
    base: 'inline-flex items-center focus:ring-4 focus:outline-none uppercase',
    small: 'px-3 py-2 rounded text-xs font-medium',
    medium: 'px-4.5 py-2.5 rounded-md text-sm font-medium',
    large: 'px-6 py-3 rounded-lg text-md font-medium',
    primary: 'bg-sky-700 dark:bg-sky-600 dark:hover:bg-sky-700 border-0 hover:bg-sky-800 text-white focus:ring-sky-300 dark:focus:ring-sky-800',
    secondary: 'bg-slate-700 dark:bg-slate-600 dark:hover:bg-slate-700 border-0 hover:bg-slate-800 text-white focus:ring-slate-300 dark:focus:ring-slate-800'
  };

  const Component = component || 'button';

  return (
    <Component className={classNames(classes['base'], classes[variant], classes[size], className)} {...rest}>
      {children}
    </Component>
  );
};
