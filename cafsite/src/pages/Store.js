import { useEffect, useState } from 'react'
import ApiHandler from '../api/index'

import '../assets/scss/pages/store.scss'

import StoreCard from '../components/StoreCard';

const Store = () => {
  const [store, setStore] = useState([]);

  useEffect(() => {
    async function getStore() {
      let apiHandler = new ApiHandler();
      let data = apiHandler.getStore();
      setStore(data);
    }
    getStore();
  }, []);

  return (
    <div className='store_page'>
      <div className='store_page--title'>
        <h1>Caf Store</h1>
      </div>
      <div className='store_page--content'>
        <StoreCard title={"Gray Hoodie"} description={"Gray hoodie by caf originals."} price={1400} image={"url"}/>
        <StoreCard title={"Black Hoodie"} description={"Black hoodie by caf originals."} price={1400} image={"url"}/>
        <StoreCard title={"Home Jersey 2022"} description={"Current CAF jersey "} price={1100} image={"url"}/>
        <StoreCard title={"Home Jersey 2021"} description={"Previous CAF jersey (Genex*s)"} price={900} image={"url"}/>
        <StoreCard title={"Training T-Shirt"} description={"Monocromatic training shirt"} price={1400} image={"url"}/>
        <StoreCard title={"La que mas te duele"} description={"Whith this one we kicked sanmarino off"} price={2000} image={"url"}/>
      </div>
    </div>
  )
}

export default Store;