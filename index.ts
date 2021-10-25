import './style.css';

import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

/**
 * call get service
 * map users return new user
 * Catcherror
 */
const obs$ = ajax(`https://api.github.com/users?per_page=5`).pipe(
  map((userResponse: any) => {
    return userResponse.response.map((user) => {
      return {
        login: user.login,
        avatar_url: user.avatar_url,
      };
    });
  }),
  catchError((error) => {
    console.log('error1: ', error);
    return of(error);
  })
);

obs$.subscribe((resp) => {
  console.log(resp);
});
