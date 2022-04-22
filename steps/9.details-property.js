/**
 * Allez dans les pages et créez un nouveau dossier: property,
 * Dans Next.js nous avons quelque chose connu sous le nom de routage basé sur
 * les fichiers;
 * Le composant de fonction search.js  ou cette page que nous avons créée va
 * être chargé lorsque nous allons à la recherche de barre oblique:
 * http://localhost:3000/search
 *
 * Nous avons la même situation est avec le dossier property qui va s'afficher
 * lorsque nous allons à /property.
 *  mais maintenant nous devons avoir quelque chose de dynamique, ce qui signifie
 * que nous pouvons créer un nouveau fichier en utilisant des crochets :[id].js
 *
 * Maintenant cette page va être rendue chaque fois que nous allons à :
 * http://localhost:3000/property/123, http://localhost:3000/property/1223, etc..
 */

// ! 1. create the component inside [id].js

//! 2.Import dependencies from

import {FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

//! 3. Fetch api

import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import {FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';


import { baseUrl, fetchApi } from '../../utils/fetchApi';

//! 4. Implement the component function PropertyDetails

import { baseUrl, fetchApi } from '../../utils/fetchApi';

const PropertyDetails = ({ propertyDetails }) => (
  <Box maxWidth="1000px" margin="auto" p="4">

  </Box>

)

// Params coming from the url
export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data
    }
  }
}

// On peut récupérer chaque propriété ainsi:

const PropertyDetails = ({ propertyDetails }) => (
  <Box maxWidth="1000px" margin="auto" p="4">
    {propertyDetails.price}
    {propertyDetails.rooms}
    {propertyDetails.baths}
    // etc...
  </Box>

)

// Une meilleure alternative est de déstructurer les properties

const PropertyDetails = ({ propertyDetails: {price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos  } }) => (
  <Box maxWidth="1000px" margin="auto" p="4">

  </Box>

)

//....
export default PropertyDetails;


// now we have all of the properties and we can freely use them inside of our
// component propertyDetails.

import { baseUrl, fetchApi } from '../../utils/fetchApi';

const PropertyDetails = ({ propertyDetails: {price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos  } }) => (
  <Box maxWidth="1000px" margin="auto" p="4">
    {photos && <ImageScrollbar data={photos} />}
  </Box>

)

///***** Implementation of ImageScrollbar component  */
//! Create now the component components/ImageScrollbar.jsx component

// * First, Import dependencies

import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, ArrowAltCircleRight } from 'react-icons/fa';


//* Now, Create the function component

  // this is just how we're using the react horizontal scrolling menu
const LeftArrow = () => {
  const { scrollPreview } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={scrollPrev}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  )
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={scrollNext}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  )
}

const ImageScrollbar = ({ data }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overfow: 'hidden'} }>
   {data.map((item) =>  (
     <Box key={item.id} width="910px" itemId={item.id} overflow="hidden">
       <Image
          alt="property"
          placeholder="blur"
          blurDataUrl={item.url}
          src={item.url}
          width={1000}
          height={500}
          sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
      />
     </Box>
   ))}
  </ScrollMenu>
)

export default ImageScrollbar;


// !Import ImageScrollbar component in [id].js


//* TEST THE BROWSER
