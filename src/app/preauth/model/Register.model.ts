export interface IRegister {
    "name": string,
    "email": string,
    "phone": number,
    "state": string,
    "pincode": number,
    "password": string
}

export interface IRegisterResponse {
    message: string
    name: string
    nextHandler: string
    userid: string
}