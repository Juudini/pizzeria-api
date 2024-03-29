//import { CategoryProps, ProductImageProps } from "../types";

export class ProductEntity {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public price: number,
        public inStock: number,
        public product_images?: object[],
        public categories?: string[]
    ) {}
}
