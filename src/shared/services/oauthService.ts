import getToken from '@/shared/helpers/getToken';
import axios from 'axios'
import type { MainUser } from '../interfaces/MainUser';

const oauthService = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/oauth/client',
    headers: {
        'Accept': 'application/json'
    },
});

export async function auth(phoneNumber: string | null): Promise<MainUser> {
    try {
        //Obtenemos el token
        const token = await getToken();
        oauthService.defaults.headers['Authorization'] = `Bearer ${token}`;
        //Hacemos la petición
        const response = await oauthService.post('', { Phone_Number: phoneNumber });
        const item = response.data.data;
        const data: MainUser = {
            User: {
                User_ID: item.user._id,
                ...item.user,
            },
            Client: {
                Client_ID: item.client._id,
                ...item.client,
            }
        };
        return data;
    } catch (error:any) {
        throw new Error(error);
    }
}