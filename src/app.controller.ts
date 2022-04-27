import { Controller, Get, HttpService } from '@nestjs/common';
import { mergeMap, of, retry, tap } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly http: HttpService) {}
  @Get()
  retry(url = 'http://localhost:3000') {
    this.http
      .get(url)
      .pipe(
        tap({
          error: (err) => {
            console.log('error: ', err.message);
          },
        }),
        retry({ count: 10, delay: 1000 }),
      )
      .subscribe({
        next: (value) => console.log(value.data),
        error: (err) => console.log('retry nua roi', err.message),
      });
  }
}
