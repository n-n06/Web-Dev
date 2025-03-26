import { Category } from "../../components/category/category.enum";

export interface Product {
    id: number,
    name: string,
    image_url: string,
    price: number,
    is_active : boolean,
    count : number,
    description: string,
    rating: number,
    link: string,
    category: number,
    number_of_likes: number
}

export interface ProductFront extends Product {
    category: Category
}