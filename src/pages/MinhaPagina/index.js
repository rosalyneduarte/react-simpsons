import React, {useState, useEffect} from 'react'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import CharacterGrid from '../../components/Characters/CharacterGrid'
import Search from '../../components/ui/Search'
import Header from '../../components/ui/Header'

import Axios from 'axios'
import './styles.css'

function MinhaPagina (){
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')
  
    useEffect(() => {
      const fetchItems = async () => {
        setIsLoading(true)
        const result = await Axios(
          `https://www.breakingbadapi.com/api/characters?name=${query}`
        )
  
        console.log(result.data)
  
        setItems(result.data)
        setIsLoading(false)
      }
  
      fetchItems()
    }, [query])

    return (
        <>
        <Menu />

        <div className='container'>
        <Header />
            <Search getQuery={(q) => setQuery(q)} />
            <CharacterGrid isLoading={isLoading} items={items} />
        </div>

        <Footer />
        </>
    )

}

export default MinhaPagina