import { Category } from "../../components/category/category.enum";

export interface Product {
    id: number,
    name: string,
    imageUrl: string,
    price: number,
    description: string[],
    rating: number,
    link: string,
    category: Category,
    likes: number
}