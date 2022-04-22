//**************** FUNCTION COMPONENT PROPERTY ******* */

// !Create the function component Property
// ! Create a new folder named components in the root of the directory
// ! Create a file Property.js
// ! First, import the dependencies
import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import {FaBed, FaBeth } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

// Where we get this externalID from ? From the props property
const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
  <Link href={`/property/${externalID}`} passHref>
    {title}
  </Link>
)

export default Property;

// Show real contents ans check it out in the browser
//...
import DefaultImage from '../assets/images/house.jpg';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
      <Box>
        <Image src={coverPhoto ? coverPhoto.url : DefaultImage } width={400} height={260} alt="house" />
      </Box>
    </Flex>
  </Link>
)

export default Property;
)


//... ADD MORE CONTENT **//
// Add an icon
import DefaultImage from '../assets/images/house.jpg';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
      <Box>
        <Image src={coverPhoto ? coverPhoto.url : DefaultImage } width={400} height={260} alt="house" />
      </Box>
      <Box w="full">
        <Flex paddingTop="2" alignItems="center" justify-content="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  </Link>
)

export default Property;

//**** ADding price */
const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
      <Box>
        <Image src={coverPhoto ? coverPhoto.url : DefaultImage } width={400} height={260} alt="house" />
      </Box>
      <Box w="full">
        <Flex paddingTop="2" alignItems="center" justify-content="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3" color="green.400">{isVerified && <GoVerified />}</Box>
            <Text fontWeight="bold" fontSize="lg">AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
          </Flex>
        </Flex>
        <Box>
          <Avatar size="sm" src={agency?.logo?.url} />
        </Box>
      </Box>
    </Flex>
  </Link>
)

//***************** IMPLEMENT THE ROUTING ************** */

//! In _app.js:
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp


/**
 *
 * CREATE Layout.js
 * components/layout.js
 * We're gonna render our footer our navigation bar and our content in the middle
 *
*/
import Header from 'next/head';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
  <>
    <Head>
      <title>Real Estate</title>
    </Head>
    <Box maxWidth="1280px" m="auto">
      <header>
        Navbar
      </header>
      <main>
        {children}
      </main>
      <footer>
        Footer
      </footer>
    </Box>
  </>
}


export default Layout;

//******************************************************** */
// !Import the Layout component inside _app.js
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
    )
}

export default MyApp


