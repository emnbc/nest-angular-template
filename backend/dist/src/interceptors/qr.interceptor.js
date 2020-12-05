"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryResultInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let QueryResultInterceptor = (() => {
    let QueryResultInterceptor = class QueryResultInterceptor {
        intercept(context, next) {
            const ctx = context.switchToHttp();
            const res = ctx.getResponse();
            return next.handle().pipe(operators_1.map(flow => {
                if (flow && flow.count && flow.result) {
                    res.header('X-Total-Count', flow.count);
                    flow = flow.result;
                }
                return flow;
            }));
        }
    };
    QueryResultInterceptor = __decorate([
        common_1.Injectable()
    ], QueryResultInterceptor);
    return QueryResultInterceptor;
})();
exports.QueryResultInterceptor = QueryResultInterceptor;
//# sourceMappingURL=qr.interceptor.js.map