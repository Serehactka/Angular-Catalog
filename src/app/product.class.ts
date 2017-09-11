export class Product {
    id: number;
    sizes: Array<string>;
    colors: Array<string>;
    name: string;
    price: number;
    image: string;
    focused_size: boolean = false;
    size_text: string = "size";
    have_sizes: boolean = true;
    type: string;
}