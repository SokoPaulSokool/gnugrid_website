import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import AppPageWrapper from './components/general/AppPageWrapper/AppPageWrapper';
import AboutPage from './pages/AboutPage/AboutPage';
import TeamPage from './pages/TeamPage/TeamPage';
import ContactPage from './pages/ContactPage/ContactPage';
 function AppRouter() {


  const router = createBrowserRouter([
    {
      path: '/',
      // element: <Navigate to="/home" />,
      element: <AppPageWrapper  />,
      children:[
        {
          path: '',
          element: (
            <HomePage/>
          ),
        },
        {
          path: '/home',
          element: (
            <HomePage/>
          ),
        },
        {
          path: '/about',
          element: (
            <AboutPage/>
          ),
        },
        {
          path: '/team',
          element: (
            <TeamPage/>
          ),
        },
        {
          path: '/contact_us',
          element: (
            <ContactPage/>
          ),
        },
      ]
    },
    {
      path: '*',
      element: <Navigate to="/home" />,
    },
  
  ]);

  return (
    <div className="w-full ">
    
      <RouterProvider router={router} />
    </div>
  );
}

export default AppRouter;
