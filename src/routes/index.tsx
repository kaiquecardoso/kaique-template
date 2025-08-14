import React from 'react';
import { createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import App from '../App';
import LandingPage from '../pages/public/landing';
import LoginPage from '../pages/public/login';
import HomePage from '../pages/auth/home';
import UsuariosPage from '../pages/auth/usuarios';
import ConfiguracaoPage from '../pages/auth/configuracao';

// Root Route
const rootRoute = createRootRoute({
  component: App,
});

// Public Routes
const landingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LandingPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
});

// Auth Routes
const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth',
  component: () => <Outlet />,
});

const homeRoute = createRoute({
  getParentRoute: () => authRoute,
  path: '/home',
  component: HomePage,
});

const usuariosRoute = createRoute({
  getParentRoute: () => authRoute,
  path: '/usuarios',
  component: UsuariosPage,
});

const configuracaoRoute = createRoute({
  getParentRoute: () => authRoute,
  path: '/configuracao',
  component: ConfiguracaoPage,
});

// Route Tree
const routeTree = rootRoute.addChildren([
  landingRoute,
  loginRoute,
  authRoute.addChildren([
    homeRoute,
    usuariosRoute,
    configuracaoRoute,
  ]),
]);

// Router Instance
export const router = createRouter({ routeTree });

// Type declarations
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default router;
