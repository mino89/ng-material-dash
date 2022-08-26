import { dashSettings } from 'dash-settings'


export const environment = {
  production: true,
  apiUrl: dashSettings['apiUrl'],
  apiPaths: dashSettings['apiPaths']
};
