import React,{ useState, useEffect, useCallback, useMemo, useReducer } from "react";
import axios from "axios";
import { Filters } from "../components/Filters";
import { ProductsList } from "../components/ProductsList";
import { Pagination } from "../components/Pagination/Pagination";



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
    const [checkedCategories, setCheckedCategories] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);            
    const [itemOffset, setItemOffset] = useState(0);            
    const itemsPerPage = 6;            

    const categoriesData = useMemo(() => {
            return categories.filter(category => {
                return checkedCategories.includes(category.name);
            }).map( item => item.id )
    },[categories,checkedCategories])

    

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

    const onChangeCategories = useCallback((newCategory) => {
            setCheckedCategories(newCategory)
    },[setCheckedCategories])

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

    // useEffect( () => {
    //     console.log({checkedCategories,priceFilter,ratingFilter,isNewFilter,isSaleFilter,isInStockFilter,search})
    //     console.log(filtredProducts)
    //     const filtredItems = products.filter(el => {
    //     // console.log(el.id)
    //             if(el.price <= priceFilter[0] || el.price >= priceFilter[1]) return false; 
    //             if(el.rating <= ratingFilter[0] || el.rating >= ratingFilter[1]) return false; 
    //             if(!el.isNew && isNewFilter) return false; 
    //             if(!el.isSale && isSaleFilter) return false; 
    //             if(!el.isInStock && isInStockFilter) return false; 
    //             if(!(el.categories.some(item => categoriesData.includes(item)))) return false; 
    //             if(el.title.toLowerCase().indexOf(search.toLowerCase())<0) return false;
    //             return true;
    //         })
    //     if(checkedCategories.length === 0) {
    //         setFiltredProducts(products)
    //     }else if(search.length === 0){
    //         setFiltredProducts(products)
    //     }else {
    //         setFiltredProducts(filtredItems)
    //     }
        
    // },[checkedCategories,priceFilter,ratingFilter,isNewFilter,isSaleFilter,isInStockFilter,search])

    // useEffect( () => {
    //     const CancelToken = axios.CancelToken;
    //     const source = CancelToken.source();
    //     dispatch({ type: ACTION_TYPES.FETCH_START });
    //     const categoriesUrl = 'https://61f5558a62f1e300173c40f3.mockapi.io/categories';
    //     const productsUrl = 'https://61f5558a62f1e300173c40f3.mockapi.io/products';

    //     const getCategories = axios.get(categoriesUrl,{ cancelToken: source.token});
    //     const getProducts = axios.get(productsUrl,{ cancelToken: source.token});

    //     axios.all([getCategories,getProducts]).then(axios.spread((...allData) => {
    //         dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: allData });
    //         })
    //     )
    //     .catch(error => {
    //         dispatch({ type: ACTION_TYPES.FETCH_ERROR });
    //     })
    //     return () => {
    //         source.cancel();
    //     };
    // },[])

    const filtredItems = useMemo(()=> {
            return products.filter(el => {
                if(el.price <= priceFilter[0] || el.price >= priceFilter[1]) return false; 
                if(el.rating <= ratingFilter[0] || el.rating >= ratingFilter[1]) return false; 
                if(!el.isNew && isNewFilter) return false; 
                if(!el.isSale && isSaleFilter) return false; 
                if(!el.isInStock && isInStockFilter) return false; 
                if(!(el.categories.some(item => categoriesData.includes(item))) && categoriesData.length!==0) return false; 
                if(el.title.toLowerCase().indexOf(search.toLowerCase())<0) return false;
                return true;
            })
    },[products,priceFilter,ratingFilter,isNewFilter,isSaleFilter,categoriesData,search,isInStockFilter])

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(filtredItems.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filtredItems.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, filtredItems])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % filtredItems.length;
        setItemOffset(newOffset);
    }

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
        {status==='loading' || status==='initial' ? (
                // <Loader/>
                <div>Loading</div>
            ) : (
                <>
                    {!error ? (
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
                                categories={categories}
                                checkedCategories={checkedCategories}
                                onChangeCategories={onChangeCategories}/>
                            <ProductsList 
                                status={status} 
                                error={error} 
                                products={currentItems} />
                            </>
                        
                    ) : (
                        <span style={{ color: 'red' }}>{error}</span>
                    )}
                </>
            )}
            <Pagination 
                handlePageClick={handlePageClick}
                pageCount={pageCount}
            />
        </>
    )
}