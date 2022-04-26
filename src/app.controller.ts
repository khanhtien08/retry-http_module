import { Controller, Get, HttpService } from '@nestjs/common';
import { mergeMap, of, retry, throwError } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly http: HttpService) {}
  @Get()
  findAll(url = 'http://localhost:3000') {
    const res = this.http.get(url, { validateStatus: null }).pipe(
      mergeMap((value) => {
        if (value.status >= 500) {
          return throwError(`${value.status} tra ve ne`);
        }
        return of(value.data);
      }),
      retry({ count: 5, delay: 1000 }),
    );

    const subscribe = res.subscribe({
      next: (re) => console.log(`data: ${re}`),
      error: (re) => console.log(`${re}: dung retry nua em met roi`),
    });

    return res;
  }
}
