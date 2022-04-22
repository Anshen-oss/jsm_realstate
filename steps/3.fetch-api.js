//************************************************************************************************ */
// FETCH FROM THE API

//* Go to : https://rapidapi.com/apidojo/api/bayut/

// ! Copy the Headers from this API:
headers: {
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    'X-RapidAPI-Key': 'd1a17673ccmshca48fc0216a87f7p196597jsn7809459b45a2'
  }

// ! create a new folder, utils, in the root of the App

// ! Create a new file fetchApi.js and paste the headers into it
import axios from 'axios';

const baseUrl = 'https://ayut.p.rapidapi.com'

  export const fetchApi = async(url) => {
    const response = await axios.get((url), {
      headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': 'd1a17673ccmshca48fc0216a87f7p196597jsn7809459b45a2'
      }
    })
  }

/* Destructure the response
 *  baseUrl is going to be used in all of the other files so we can simply go
 * ahead and export it:
 * export const baseUrl = 'https://ayut.p.rapidapi.com'
*/
import axios from 'axios';

export const baseUrl = 'https://ayut.p.rapidapi.com'

  export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
      headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': 'd1a17673ccmshca48fc0216a87f7p196597jsn7809459b45a2'
      }
    })
  }

// ! Go back to index.js to see how to fetch this datas
/**
 * You might be wondering where are we going to fetch this data is it going to
 * be instead of the useEffect as it is in React, inNext.js we're doing something different
 * Next.js allows you to create a special function just at the bottom of your component.
 * Si vous exportez une fonction appelée getStaticProps(Static Site Generation)
 * à partir d'une page, Next.js pré-rendra cette page au moment du rendu
 * à l'aide des props renvoyés par getStaticProps.
*/
import { baseUrl, fetchApi } from '../utils/fetchApi';

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);
}

// Go to tos ee the documentation for the properties above : https://rapidapi.com/apidojo/api/bayut/
// we have there a properties list query: properties/list
// and to that we can pass a few required parameters and 5002 is the first required parameter
// locationExternalIDs : 5002,6020
// then we also have optional parameters like hits per page page number sort rent


// ! PASS THE DATA FROM BAYUT API IN OUR COMPONENT
/** Inside of our application  how can we actually pass this to our component */
// In returning an object in page/index.js:
export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIds=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIds=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }
}

// If you fo to fetchApi.js, you vill see a message if you rollover the terme data :
// 'data' est déclaré mais sa valeur n'est jamais lue.
// So you have to return the data
import axios from 'axios';

export const baseUrl = 'https://ayut.p.rapidapi.com'

  export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
      headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': 'd1a17673ccmshca48fc0216a87f7p196597jsn7809459b45a2'
      }
    })
    return data;
  }
//******************************************************** */

/**
 * What nexjs does is it automatically adds these to the props of our component
 * Destructrure the properties propertiesForSale and propertiesForRent
 */
//...
export default function Home({ propertiesForSale, propertiesForRent }) {
  console.log(propertiesForSale, propertiesForRent);
  //...
}

// Map over propertiesForRent : index.json
 <Flex flexWrap="wrap">
   {propertiesForRent.map((property) => <Property propert={property} /> )}
 </Flex>

 <Flex flexWrap="wrap">
   {propertiesForSale.map((property) => <Property propert={property} /> )}
 </Flex>

