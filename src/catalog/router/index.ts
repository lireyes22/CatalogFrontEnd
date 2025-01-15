import type { RouteRecordRaw } from "vue-router";
import CatalogoNavBar from '@/catalog/layouts/CatalogoNavBar.vue'
import DetallesProducto from "@/catalog/pages/ProductoDetalles.vue";
import Cookies from "js-cookie";

const ROUTE_NAME = "catalogo";

export const catalogoRoute: RouteRecordRaw = {
    path: `/${ROUTE_NAME}`,
    redirect: {name: 'principal'},
    component: CatalogoNavBar,
    children: [
        {
            path: `/${ROUTE_NAME}/principal`,
            name: 'principal',
            component: () => import('@/catalog/pages/CatalogoPrincipal.vue'),
        },
        {
            path: `/${ROUTE_NAME}/producto/:slug`,
            name: 'producto',
            props: true,
            component: DetallesProducto,
        },
    ],
    beforeEnter: (to, from, next) => {
        if(Cookies.get('isClient') === 'true'){
            next();
        } else {
            next({ name: 'presentation' });
        }
    },
}

export default catalogoRoute;

/**
 * {
        path: '/catalogo',
        name: 'catalogo',
        component: CatalogoNavBar
    },
 */