export interface IAuth{
    email:string;
    password:string
}

export interface ILoginResponse{
    token:string,
    email:string,
    userid:string;
}