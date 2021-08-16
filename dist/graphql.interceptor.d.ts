import { ExecutionContext } from "@nestjs/common";
import { Scope } from '@sentry/hub';
import { SentryInterceptor } from "./sentry.interceptor";
export declare class GraphqlInterceptor extends SentryInterceptor {
    protected captureException(context: ExecutionContext, scope: Scope, exception: any): void;
    private captureGraphqlException;
}
