import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home';
import About from '../../pages/about';
import Contact from '../../pages/contact';
import Courses from '../../pages/courses';
import Mentors from '../../pages/mentors';
import CourseDetail from '../../pages/courses/pages/CourseDetail';

export const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/courses',
    element: <Courses />
  },
  {
    path: '/courses/:id',
    element: <CourseDetail />
  },
  {
    path: '/mentors',
    element: <Mentors/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
];

function RootRoute() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default RootRoute;