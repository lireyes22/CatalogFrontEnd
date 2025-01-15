import { useQuery } from "@tanstack/vue-query";
import { getProducts } from "@services/productService";


const useCatalogoPrincipal = () => {
    const categories = ['Collares', 'Pulseras', 'Anillos', 'Aretes', 'Conjuntos'];
    const { isLoading, isError, data:products, error, isFetching } = useQuery({
        queryKey: ['catalogo-principal'],
        queryFn: getProducts,
        retry: 1,
        retryDelay: 1000,
    });

    return {
        isLoading,
        isError,
        products,
        error,
        isFetching,
        categories
    };
};

export default useCatalogoPrincipal;