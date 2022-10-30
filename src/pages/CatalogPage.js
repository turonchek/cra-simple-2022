import React,{ useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Filters } from "../components/Filters";
import { Loader } from "../components/Loader";
import { ProductsList } from "../components/ProductsList";

export function CatalogPage() {

    const [status, setStatus] = useState('initial');
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [priceFilter, setPriceFilter] = useState([0,1000]);
    const [ratingFilter, setRatingFilter] = useState([0,100]);
    const [isNewFilter, setIsNewFilter] = useState(false);
    const [isSaleFilter, setIsSaleFilter] = useState(false);
    const [isInStockFilter, setIsInStockFilter] = useState(false);

    const onSearch = useCallback((newSearch) => {
        setSearch(newSearch)
    },[setSearch])

    const onPriceChange = useCallback((newPrice) => {
        setPriceFilter(newPrice);
    },[setPriceFilter])

    const onRatingChange = useCallback((newRating) => {
        setRatingFilter(newRating);
    },[setRatingFilter])

    const onIsNewChange = useCallback((newValue) => {
        setIsNewFilter(newValue)
    },[setIsNewFilter])

    const onIsSaleChange = useCallback((newValue) => {
        setIsSaleFilter(newValue)
    },[setIsSaleFilter])

    const onIsInStockChange = useCallback((newValue) => {
        setIsInStockFilter(newValue)
    },[setIsInStockFilter])

    // const fetchData = () => {

    //     const source = axios.CancelToken.source();

        

    //     setStatus('loading');
    //     setError(null)
    //     setCategories([]);
    //     setProducts([]);
    //     const categoriesUrl = 'https://61f5558a62f1e300173c40f3.mockapi.io/categories';
    //     const productsUrl = 'https://61f5558a62f1e300173c40f3.mockapi.io/products';

    //     const getCategories = axios.get(categoriesUrl,{ cancelToken: source.token});
    //     const getProducts = axios.get(productsUrl,{ cancelToken: source.token});

    //     axios.all([getCategories,getProducts]).then(axios.spread((...allData) => {
    //             const allCategoriesData = allData[0].data;
    //             const allProductsData = allData[1].data;

    //             setStatus('success')
    //             setCategories(allCategoriesData);
    //             setProducts(allProductsData);
    //             setError(null)
    //         })
    //     )
    //     .catch(error => {
    //         setCategories(null);
    //         setProducts(null);
    //         setStatus(error)
    //         setError(error.message)
    //     })
    // }

    useEffect( () => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        setError(null)
        setCategories([]);
        setProducts([]);
        const categoriesUrl = 'https://61f5558a62f1e300173c40f3.mockapi.io/categories';
        const productsUrl = 'https://61f5558a62f1e300173c40f3.mockapi.io/products';

        const getCategories = axios.get(categoriesUrl,{ cancelToken: source.token});
        const getProducts = axios.get(productsUrl,{ cancelToken: source.token});

        axios.all([getCategories,getProducts]).then(axios.spread((...allData) => {
                const allCategoriesData = allData[0].data;
                const allProductsData = allData[1].data;

                setStatus('success')
                setCategories(allCategoriesData);
                setProducts(allProductsData);
                setError(null)
            })
        )
        .catch(error => {
            setCategories(null);
            setProducts(null);
            setStatus(error)
            setError(error.message)
        })
        return () => {
            source.cancel();
        };
    },[])

    const filtredItems = products.filter(el => {
        // console.log(el.id)
                if(el.price <= priceFilter[0] || el.price >= priceFilter[1]) return false; 
                if(el.rating <= ratingFilter[0] || el.rating >= ratingFilter[1]) return false; 
                if(!el.isNew && isNewFilter) return false; 
                if(!el.isSale && isSaleFilter) return false; 
                if(!el.isInStock && isInStockFilter) return false; 
                if(el.title.toLowerCase().indexOf(search.toLowerCase())<0) return false;
                return true;
            })

    // const fetchData = async (mountState) => {
    //     setStatus('loading')
    //     setError(null)
    //     setData([])

    //     try{
    //         const response = await fetch(`https://61f5558a62f1e300173c40f3.mockapi.io/products`);
    //         const json = await response.json();
    //         if(mountState.isMount){
    //             console.log(json)
    //             setStatus('success')
    //             setData(json)
    //             setError(null)
    //         }
    //     } catch (error){
    //         if(mountState.isMount){
    //             setStatus(error)
    //             setError(error.message)
    //         }
            
    //     }
    // };

    // useEffect(() => {
    //     let mountState = {
    //         isMount:true,
    //     };
    //     fetchData(mountState);
    //     return ()=>{
    //         mountState.isMount = false;
    //     }
    // }, []);

    return(
        <>
        {status === 'loading' || status === 'initial' ? (
                // <Loader/>
                <div>Loading</div>
            ) : (
                <>
                    {error===null ? (
                            <>
                            <Filters 
                                search={search} 
                                onSearch={onSearch}
                                priceFilter={priceFilter}
                                onPriceChange={onPriceChange}  
                                ratingFilter={ratingFilter}
                                onRatingChange={onRatingChange}
                                isNewFilter={isNewFilter}
                                onIsNewChange={onIsNewChange}
                                isSaleFilter={isSaleFilter}
                                onIsSaleChange={onIsSaleChange}
                                isInStockFilter={isInStockFilter}
                                onIsInStockChange={onIsInStockChange}
                                products={products} 
                                categories={categories}/>
                            <ProductsList 
                                status={status} 
                                error={error} 
                                products={filtredItems} />
                            </>
                        
                    ) : (
                        <span style={{ color: 'red' }}>{error}</span>
                    )}
                </>
            )}
            
        </>
    )
}