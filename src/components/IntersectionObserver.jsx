//import React from "react"
import { useEffect, useState } from "react";
import Header from "./Header"
import { useInView } from 'react-intersection-observer'

const IntersectionObserver = () => {

    const PAGE_NUMBER = 1;
    const LIMIT = 10;

    const { ref, inView } = useInView()
    const [coinData, setCoinData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNum, setPageNum] = useState(PAGE_NUMBER);

    useEffect(() => {
        getCoinData(pageNum)
    }, [pageNum])

    const getCoinData = async (pageNum) => {
        const api_key = import.meta.env.VITE_ACCESS_KEY;
        //console.log(api_key)
        const response = await fetch("https://api.unsplash.com/photos/?client_id="+ api_key +"&per_page=" + LIMIT + "&page=" + pageNum);
        const data = await response.json()
        setCoinData([...coinData, ...data]);
        //console.log("coinData===", coinData)
        setLoading(true)

    }

    //console.log("coinData==", coinData)

    const loadMore = () => {
        setPageNum(prevPageNum => prevPageNum + 1)
    }

    //const pageEnd = useRef()  //import useRef at top
    //let num = 1;
    useEffect(() => {

        /*if (loading) {
        const observer = new IntersectionObserver(entries => {
            
            if (entries[0].isIntersecting) {
                num++
                loadMore();
                 if( num > 10){
                     observer.unobserve(pageEnd.current)
                 }
            }
        }, { threshold: 1 })
        observer.observe(pageEnd.current)
        }*/

        if (inView) {
            //console.log(inView)
            loadMore();
        }
    }, [inView])  //[loading]

    return (
        <div className=" bg-gray-900  h-screen w-screen object-cover overflow-auto text-white">
            <Header />
            <div className="flex flex-col m-auto w-1/2 h-24" >
                {
                    coinData && coinData.map(coin => <div className="border border-gray-600 p-2 my-2" key={coin.user.id}>
                        <img src={coin.urls.small} alt="" className="h-24 w-24" />
                        <h1 className="float-right -mt-16 pr-9">{coin.user.first_name + " " + coin.user.last_name}</h1>
                    </div>)

                }
                <button className="py-4" onClick={loadMore} ref={ref}>{loading && "Loading..."}</button>
            </div>
        </div>
    )
}

export default IntersectionObserver