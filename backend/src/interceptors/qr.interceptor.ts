import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class QueryResultInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        
        const ctx = context.switchToHttp();
        const res = ctx.getResponse();

        return next.handle().pipe(
            map(flow => {
                if(flow && flow.count && flow.result) {
                    res.header('X-Total-Count', flow.count);
                    flow = flow.result
                }
                return flow;
            }),
        );
        
    }
}