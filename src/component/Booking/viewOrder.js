import axios from "axios"
import Header from "../../Header"
import { DisplayOrder } from "./DisplayOrder"
import { useState, useEffect } from "react"

const url = "http://localhost:5000/orders"

export const ViewOrder = () => {
    const [orders, setOrders] = useState()

    let sessionData = sessionStorage.getItem("userInfo")
    console.log(sessionData)
    let data = JSON.parse(sessionData)
    console.log(data)

    useEffect(() => {
        axios.get(`${url}?email=${data.email}`)
            .then((res) => setOrders(res.data))
    }, [])



    return (
        <>
            <Header />
            <DisplayOrder orderData={orders} />
        </>
    )
}