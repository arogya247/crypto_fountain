import axios from 'axios';
import React, {useEffect, useState} from 'react';

export const Dashboard = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    callCoinApi();
  }, [])

  const callCoinApi = async() => {
    let response = await axios.get("https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2/coins", {
      headers: {
        "x-access-token": "coinranking59a71d03a1dacbb4a3b3d98d94c1e13bdc2530eecca31291"
      }
    })

    setData(response.data.data)
  }

  console.log("data", data)

  return (
    <div>
        Hey
    </div>
  )
}
