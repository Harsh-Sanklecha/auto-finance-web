import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ICompany, IUser, ResponseJson } from "../models/model";
import { BaseService } from "./base.service";
import jwt_decode from "jwt-decode";
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
    user = JSON.parse(localStorage.getItem('user') as string)
    company = JSON.parse(localStorage.getItem('company') as string)

    currentUser: BehaviorSubject<any> = new BehaviorSubject<IUser>(this.user)
    currentCompany: BehaviorSubject<any> = new BehaviorSubject<ICompany>(this.company)

    apiUrl = environment.apiUrl + '/auth'

    constructor(protected override http: HttpClient) {
        super(http);
    }

    getDataFromJWT(jwt: string) {
        return jwt_decode(jwt) as IUser
    }

    setUserData(data: any) {
        const tokenData = data.data.token
        const userData: any = this.getDataFromJWT(tokenData)

        localStorage.setItem('user', JSON.stringify({ ...userData, token: tokenData }));
        localStorage.setItem('company', JSON.stringify(data.data.company[0]))

        this.currentUser.next(userData)
        this.currentCompany.next(data.data.company[0] as ICompany)
        return userData
    }

    createUser(data: any, companyName: string): Observable<ResponseJson<any>> {
        return this.post(this.apiUrl + '/create', { data: data, companyName: companyName }).pipe(map(data => this.setUserData(data)))
    }

    login(data: any): Observable<any> {
        return this.post(this.apiUrl + '/login', { data }).pipe(map(data => this.setUserData(data)))
    }
}