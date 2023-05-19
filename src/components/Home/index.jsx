import React, { useState } from 'react'

const Home = () => {
  const [showData, setShowData] = useState(false)
  const [dataReq, setDataReq] = useState([])

  //   function handleClick() {
  //     setShowData(prev => !prev)
  //     import(/* webpackChunkName: "dataOfUser" */ '../../data.js').then(
  //       ({ data }) => {
  //         setDataReq(data)
  //       }
  //     )
  //   }

  async function handleClick() {
     // imports basically return the module object through which we can access the imported data
    setShowData(prev => !prev)
    const dataOfUser = (
      await import('../../data' /* webpackChunkName: "userData"*/)
    ).data
    setDataReq(dataOfUser)
  }

  return (
    <div>
      <button onClick={handleClick}>
        {showData ? 'Click to hide data' : 'Click to show data'}
      </button>
      {showData && <pre>{JSON.stringify(dataReq, null, 2)}</pre>}
    </div>
  )
}

export default Home
