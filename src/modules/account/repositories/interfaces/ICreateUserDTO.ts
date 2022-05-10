interface ICreateUserDTO {
    id?: string;
    name: string;
    username: string;
    password: string;
    email: string;
    driver_licence: string;
}

export { ICreateUserDTO }