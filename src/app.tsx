import React, { FC } from 'react';
import './app.scss';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './features/auth/components/login-page/login-page';
import PageLayout from './common/components/page-layout/page-layout';

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
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
