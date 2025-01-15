import type { ProductSectionInterface } from "../interfaces";
import { productsService } from "./index";

export async function getBestProducts(): Promise<ProductSectionInterface[]> {

    try {
        const data = await productsService.get("/");
        return data.data;
    } catch (error: any) {
        throw new Error(`Error: ${error}`);
    }
}