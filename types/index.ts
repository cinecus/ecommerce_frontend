export type ResponseType = {
    statusCode:number,
    message:string,
    result:any
}

export type signinBodyType = {
    email: string
    password: string
}

export type signupBodyType = {
    firstName: string
    lastName: string
    email: string
    password:string
    repassword:string
}

export type productType = {
    _id: string,
    name: string,
    price: number,
    image: string,
    tags: ["new" | "bestseller" | "suggest"],
    createAt: string
}

export type cartItemType = {
    key:number,
    _id:string,
    product?:productType,
    productID?:productType,
    userID:string,
    qty:number,
    createdAt:string
}