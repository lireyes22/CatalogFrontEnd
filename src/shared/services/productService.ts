import getToken from '@helpers/getToken';
import axios from 'axios'
import type { Product } from '../interfaces/Product';


const productsService = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/products',
    headers: {
        'Accept': 'application/json'
    },
});

export async function getProducts(): Promise<Product[]> {
    //Obtenemos el token
    const token = await getToken();
    productsService.defaults.headers['Authorization'] = `Bearer ${token}`;
    //Hacemos la petición
    return productsService.get('').then(res => res.data.data);
}

export async function getSlugProduct(slug:string): Promise<Product> {
    //Obtenemos el token
    const token = await getToken();
    productsService.defaults.headers['Authorization'] = `Bearer ${token}`;
    //Hacemos la petición
    return productsService.get(`/slug/${slug}`).then(res => res.data.data);
}

export async function addProduct(product: Product): Promise<Product> {
    //Obtenemos el token
    const token = await getToken();
    productsService.defaults.headers['Authorization'] = `Bearer ${token}`;
    //Hacemos la petición
    return productsService.post('', product).then(res => res.data.data);
}