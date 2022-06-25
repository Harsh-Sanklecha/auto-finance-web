import { ErrorHandler, Injectable, Injector, NgZone } from "@angular/core";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private injector: Injector, private zone: NgZone) { }

    handleError(error: any) {
        // do something with the exception
        console.error(error);
    }
}