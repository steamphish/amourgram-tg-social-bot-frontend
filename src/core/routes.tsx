import LoginPage from '../features/auth/components/login-page/login-page';
import PageLayout from '../common/components/page-layout/page-layout';
import UserList from '../features/user/list/user-list';
import UserItem from '../features/user/item/user-item';

interface RouteItem {
  path: string;
  element: any;
  private?: boolean;
}

export const routes: Record<string, RouteItem> = {
  dashboard: {
    path: '/',
    element: <PageLayout />,
    private: true,
  },
  login: {
    path: '/login',
    element: <LoginPage />,
  },
  users: {
    path: '/users',
    element: (
      <PageLayout>
        <UserList />
      </PageLayout>
    ),
  },
  user: {
    path: '/users/:userId',
    element: (
      <PageLayout>
        <UserItem />
      </PageLayout>
    ),
  },
};
