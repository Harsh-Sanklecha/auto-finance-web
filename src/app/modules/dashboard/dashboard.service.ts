import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseJson } from "src/app/shared/models/model";
import { BaseService } from "src/app/shared/services/base.service";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class DashboardService extends BaseService {
    apiUrl = environment.apiUrl + '/financer'

    constructor(protected override http: HttpClient) {
        super(http);
    }

    getAllFinancerCompanies(): Observable<ResponseJson<any>> {
        return this.get(this.apiUrl + '/companies')
    }
}