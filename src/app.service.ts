import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from "rxjs";

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  // findAll(): Observable<any> {
  //   return this.httpService
  //     .get('http://localhost:3001/callback', { validateStatus: null })
  //     .pipe(
  //       mergeMap((val) => {
  //         if (val.status >= 400) {
  //           return throwError(`${val.status} returned from http call`);
  //         }
  //         console.log(val.status);
  //         return of(val.data);
  //       }),
  //       retry(2),
  //       catchError(err => {
  //         return of(err);
  //       }),
  //     );
  // }
}
