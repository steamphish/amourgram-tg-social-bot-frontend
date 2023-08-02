import LoginPage from '../features/auth/components/login-page/login-page';
import PageLayout from '../common/components/page-layout/page-layout';
import UserList from '../features/user/list/user-list';
import UserItem from '../features/user/item/user-item';
import EventList from '../features/event/list/event-list';
import EventItem from '../features/event/item/event-item';

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
    private: true,
    element: (
      <PageLayout>
        <UserList />
      </PageLayout>
    ),
  },
  user: {
    path: '/users/:userId',
    private: true,
    element: (
      <PageLayout>
        <UserItem />
      </PageLayout>
    ),
  },
  events: {
    path: '/events',
    private: true,
    element: (
      <PageLayout>
        <EventList />
      </PageLayout>
    ),
  },
  event: {
    path: '/events/:eventId',
    private: true,
    element: (
      <PageLayout>
        <EventItem />
      </PageLayout>
    ),
  },
};
