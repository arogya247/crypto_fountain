import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { CoinTable } from './CoinTable';

export const Dashboard = ({data, setData}) => {

  useEffect(() => {
    callCoinApi();
  }, [])

  // function to call the coin api and set the data 
  const callCoinApi = async() => {
    let response = await axios.get("https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2/coins", {
      headers: {
        "x-access-token": "coinranking59a71d03a1dacbb4a3b3d98d94c1e13bdc2530eecca31291"
      }
    })

    setData(response.data.data)
  }

  console.log("data", data)

  const tableData = data.coins;

  const tableColumns = [
    {
      Header: "S.No.",
      id: "row",
      Cell: (props) => {
        return <>{props.row.index + 1}</>
      },
      disableSortBy: true
    },
    {
      Header: "Rank",
      accessor: "rank"
    },
    {
      Header: "Name",
      accessor: "name",
      width: 200
    },
    {
      Header: "Symbol",
      accessor: "symbol",
      disableSortBy: true
    },
    {
      Header: "Price",
      accessor: "price",
      width: 250
    },
    {
      Header: "Price Change",
      accessor: "change",
      disableSortBy: true,
      width: 200
    }
  ]

  return (
    <div style={{margin: '0 auto', width: '80%'}}>
      {data.length!==0 && <CoinTable tableData={tableData} tableColumns={tableColumns} />}
    </div>
  )
}
