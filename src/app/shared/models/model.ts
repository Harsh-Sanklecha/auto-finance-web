export interface ResponseJson<T> {
    data: T;
    success: boolean;
    message: string;
    showPopUp: boolean;
    code: number;
    responseType: string;
}

export interface IUser {
    email: string,
    is_active: boolean,
    name: string,
    phoneNumber: number,
    _id: string,
    token: string
}

export interface ICompany{
    name: string,
    financer: string,
    _id: string
}