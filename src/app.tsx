import React, { FC } from 'react';
import './app.scss';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import { router, routes } from './core/routes';
import { PrivateRoute } from './features/auth/components/private-route/private-route.component';

interface AppProps {}

export const App: FC<AppProps> = () => {
  return <RouterProvider router={router} />;
  // return (
  //   <>
  //     <Routes>
  //       {Object.values(routes).map((route) => {
  //         if (route.private) {
  //           return (
  //             <Route
  //               key={`route-${route.path}`}
  //               path={route.path}
  //               element={
  //                 <PrivateRoute>
  //                   <route.Element />
  //                 </PrivateRoute>
  //               }
  //             />
  //           );
  //         }
  //
  //         return <Route key={`route-${route.path}`} path={route.path} element={<route.Element />} />;
  //       })}
  //     </Routes>
  //   </>
  // );
};
export default App;
