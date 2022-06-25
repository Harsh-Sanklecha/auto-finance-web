import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseJson } from "src/app/shared/models/model";
import { BaseService } from "src/app/shared/services/base.service";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class DriverService extends BaseService {
    apiUrl = environment.apiUrl + '/driver'

    constructor(protected override http: HttpClient) {
        super(http);
    }

    createDriverAndEMI(data: any): Observable<ResponseJson<any>> {
        return this.post(this.apiUrl + '/create', {data})
    }

    getLender(id: string): Observable<ResponseJson<any>> {
        return this.get(this.apiUrl + '/' + id)
    }
}