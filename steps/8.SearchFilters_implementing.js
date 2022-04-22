//***************** IMPLEMENTING SEARCHFILTERS    ************/

//! 1. create a new state:
const [filters, setFilters] = useState({});

//! 2. Implement the jsx

const SearchFilters = () => {
  const [filters, setFilters] = useState({});
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">

    </Flex>
  )
}

// ! 3. Create a file utils/filterData.js
/** We set up our filters here. ce sera un énorme fichier de
 * données brutes de base et rien de plus,et comme vous
 * pouvez le voir, il n'y a aucune logique ici, ce sont
 * principalement des données que nous peut filtrer par exemple
 * nous pouvons choisir entre acheter et louer rent et buy) et
 * ils vont avoir des valeurs et aussi un plceHolder alors nous pourrons
 * choisir une fréquence de location des éléments les prix
 * filtrent également du plus bas au plus haut et ainsi de suite
 * tout est ici formé comme des données pures et rien de plus
 * maintenant que nous avons ces données de filtre.
 *
 */

//! 4. Import filterData.js in SearchFilters

import {useState, useEffect } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';

import Image from 'next/image';
import { filterData, getFilterValues } from '../utils/filterData';

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">

    </Flex>
  )
}

export default SearchFilters


//! Now we can loop through this filters
//...
const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
        {filters.map((filter) => (
          <Box key={filter.queryName}>
              <Select onChange={(e) => searchProperties()}>

              </Select>
          </Box>
        ))}
    </Flex>
  )
}
//...

// ! Now, create the function searchProperty()

// what do we specifically have to pass as filterValues ?
 const searchProperties = (filterValues) => {

  }

  // we can see it better and inside of the searchProperties we
  // want to pass in an object.
  // so that means that we're only working on a specific filter
  // at the moment we're gonna have a lot of different select
  const SearchFilters = () => {
  //...
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
        {filters.map((filter) => (
          <Box key={filter.queryName}>
              <Select
                placeholder={filter.placeholder}
                w="fit-content"
                p="2"
                onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}>
              </Select>
          </Box>
        ))}
    </Flex>
  )
}

export default SearchFilters

//* now let's go ahead and render out all of the filter items
//!  opening a new dynamic block inside of the filter

//...
const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);

  // The values of the Select have to change the value of the state variable
 // so once we pass the value in the <select> we have to update
 // the state right here and we'll do that by updating the
 // url : http://localhost:3000/search?purpose=for-sale

 // We can do that with:
 // const path = router.pathname;
 // We get the query from the router
 //const { query } = router;
  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;
  }
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
        {filters.map((filter) => (
          <Box key={filter.queryName}>
              <Select
                placeholder={filter.placeholder}
                w="fit-content"
                p="2"
                onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
              >
                {filter?.items?.map((item) => (
                  <option value={item.value} key={item.value}>{item.name}</option>
                ))}
              </Select>
          </Box>
        ))}
    </Flex>
  )
}
export default SearchFilters;

