import React, { useEffect, useState } from 'react'
import axios from 'axios';
import OrderCard from '../../components/OsCard'

export default function Dash() {
    useEffect(() => { 
        async function getData() {
            const res = await axios.get('http://localhost:3003/orders');
            console.log(res.data);
        }
        getData();
    }, [])

  return (

    <div>
        <OrderCard />
    </div>
  )
}
