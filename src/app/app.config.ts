import { ApplicationConfig, inject, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import {provideHighlightOptions} from 'ngx-highlightjs';

import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { provideRedux } from '@reduxjs/angular-redux';
import { store } from './store';
import {provideHttpClient} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideRedux({ store }),
    provideApollo(() => {
      const httpLink: HttpLink = inject(HttpLink);
      const apiUrl = environment.apiUrl;
      return {
        link: httpLink.create({uri: apiUrl, withCredentials: true}),
        cache: new InMemoryCache({
          addTypename: false
        })
      }
    }, {
      useMutationLoading: true
    }),
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js')
    })
]
};
