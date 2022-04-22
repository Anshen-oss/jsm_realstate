/**
 * To start creating our search we're going to create a new functional component
 * more specifically we're going to create a page because a search is going to be a
 * specific page a specific url that we can go to to visit of course the search
 */

//! 1. Creat a new file called pages/search.js

//! 2. Import dependencies
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';


//! 3. Create Search function component
const Search = () => {
  const [searchFilters, setSearchFilters] = useState(false);
}

//! 4. Declare the router
//...
const Search = () => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
      ></Flex>
    </Box>
  )
}

export default Search;


//! 5. Continue to implement Search component
/**
 *
 * that means that if we are currently filtering something then once we click it
 * we want to stop filtering and vice versa :
 * onClick={() => setSearchFilters((prevFilters) => !prevFilters)}

 */
const Search = () => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
      >
        <Text>Search Property by Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />

      </Flex>
    </Box>
  )
}

export default Search;

//! 6. Add props onClick
//...
const Search = () => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
      >
        <Text>Search Property by Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
    </Box>
  )
}

export default Search;


// Create components/SearchFilters component
//! 1. Import dependencies
import {useState, useEffect } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';

import Image from 'next/image';

//****************************** */
// ! 2. Create the function component
import {useState, useEffect } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';

import Image from 'next/image';


const SearchFilters = () => {
  return (
    <div>
        SearchFilters
    </div>
  )
}

export default SearchFilters
//************************** */

//! Import this component SearchFilters in Search component

//! Then test the SearchFilters component in the web browser


/**
 * Il est temps que nous implémentions réellement le component
 * searchFilters. Il y a deux façons de procéder:
 * + la première méthode consiste à afficher les propriétés d'abord,
 * + puis ensuite plus tard réaliser la mise en œuvre des filtres de
 * recherche. je pense que cela fait juste un peu plus de sens car
 * nous devons savoir ce que nous filtrons donc nous allons laisser
 * cela ici pour le moment et nous continuerons à mettre en œuvre
 * la recherche.
 *
 * we can do that by adding one more text ins Search component
 *  {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Properties
  </Text>
 *
 * the key thing why did we have to import the router:
 * const router = useRouter();
 * because router contains the url. If we go to the menu
 * in the Browser, for example when we click on "Buy Property" we
 * have this url:
 * http://localhost:3000/search?purpose=for-sale
 *
 * So, we can get to that value like that:
 * Properties {router.query.purpose } // Properties for-sale
  </Text>
 *
 */
const Search = ( { properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
      >
        <Text>Search Property by Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Properties {router.query.purpose }
      </Text>
    </Box>
  )
}

// Add more content in Search.js always

/**
 * We're mapping over all of our properties which we are yet to
 * fetch and then displaying a Property component we have already
 * created for each one of these properties.
 */
 <Flex flexWrap="wrap">
  {[].map((property) => <Property property={property} key={property.id} />)}
</Flex>


// Continue to implement
{/* we want to loop over all of our properties */}
  //...
  import noresult from '../assets/images/noresult.svg';
  //...
  <Flex flexWrap="wrap">
    {[].map((property) => <Property property={property} key={property.id} />)}
  </Flex>
  {/* If properties === 0 - No properties, in that case return
       a new Flex container*/}
  {[].length=== 0 && (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      marginTop="5"
      marginBottom="5"
    >
      <Image alt="no result" src={noresult} />
      <Text fontSize="2xl" marginTop="3">No result found</Text>
      )}
    </Flex>

/**
 * The real question where are we going to get our properties ?
 * Let's first replace the empty array([]) with properties:
 */
//...
 {properties.length=== 0 && (
  <Flex
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    marginTop="5"
    marginBottom="5"
  >
    <Image alt="no result" src={noresult} />
    <Text fontSize="2xl" marginTop="3">No result found</Text>
  </Flex>
)}

 //right here and we're going to get properties through props
 // const Search = ( { properties }) => { //... }

 //! The question is how are we going to populate the props ?
 // well remember what we did before if we go to our index you
 // can see that we populated the value through getStaticProps()

 // ! In pages/index.js copy this code:
 export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }

  // ! And paste it in Search component, like that after cleaning the code


  //...
  export default Search;

  export async function getStaticProps() {
    const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);

    return {
      props: {
        propertiesForSale: propertyForSale?.hits,
      }
    }

/**
 * so to filter all these properties:
 * const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);

 *  we'll have to create a lot  of different variables variables
 * that we want to filter them.
 *
 * Si vous exportez une fonction appelée getServerSideProps
 * (Server-Side Rendering) à partir d'une page, Next.js
 * pré-rendra cette page à chaque requête en utilisant les
 * données renvoyées par getServerSideProps.
*/
export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

  return {
    props: {
      properties: data?.hits,
    },
  };
}

export default Search;
