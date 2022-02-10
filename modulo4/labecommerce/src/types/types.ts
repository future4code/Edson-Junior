export type User = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type Purchase = {
    id: string,
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
}