import { ComponentType, LazyExoticComponent, ReactNode } from 'react';

export interface IRoute {
  // Path, like in basic prop
  path: string;
  // Exact, like in basic prop
  exact: boolean;
  // Preloader for lazy loading
  fallback: NonNullable<ReactNode> | null;
  // Lazy Loaded component
  component?: LazyExoticComponent<ComponentType<any>>;
  // Sub routes
  routes?: IRoute[];
  // Redirect path
  redirect?: string;
  // If router is private, this is going to be true
  private?: boolean;
}
