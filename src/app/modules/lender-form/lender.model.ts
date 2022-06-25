export interface ILenderDetails {
    name: string,
    number: number,
    autoNumber: string,
    address: string,
    aadharNumber: string,
    licenseNumber: string
}

export interface IGuarantor {
    name: string,
    number: number
}

export interface ILender {
    company: string
    name: string
    autoNumber: string
    address?: string
    aadharNumber?: string
    licenseNumber?: string
    guarantor?: IGuarantor
}

export interface ILenderAccount {
    loanAmount: number
    interest: number
    months: number
}