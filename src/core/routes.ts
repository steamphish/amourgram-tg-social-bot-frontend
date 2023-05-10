import { FC } from 'react';
import LoginPage from '../features/auth/components/login-page/login-page';
import PageLayout from '../common/components/page-layout/page-layout';

interface RouteItem {
  path: string;
  Element: FC;
  private?: boolean;
}

export const routes: Record<string, RouteItem> = {
  dashboard: {
    path: '/',
    Element: PageLayout,
    private: true,
  },
  login: {
    path: '/login',
    Element: LoginPage,
  },
};
