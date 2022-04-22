// ! 7. Create a Banner component

/**
 *
 * @param {*} props
 *  {purpose} come from props
 */
const Banner = (props) => {
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    {purpose}
  </Flex>
}

// We can destructure the props like that:
const Banner = ({ purpose }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    {purpose}
  </Flex>
)


// Use the Banner: index.js:

export default function Home() {
export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Banner purpose={'For Sale'} />
      <Banner purpose={'For Rent'} />
    </div>
  )
}


// Add an image and other properties
//...
const Banner = ({ purpose, title1, title1, desc1, desc2, buttonText, linkName, imageUrl }) => (
<Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={500} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)
//...

// In order to show images we need to configure next-config.js.
// Add domain for image:
//  domains: ['bayut-production.s3.eu-central-1.amazonaws.com']
// this is going to be the api for rental properties that we're going to use:
// bayut-production.s3.eu-central-1.amazonaws.com

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bayut-production.s3.eu-central-1.amazonaws.com']
  }
}

module.exports = nextConfig


// At this step, stop the terminal and run it again.


// Add Two Banner components:
export default function Home() {
  return (
    <Box>
        <Banner
          purpose='RENT A HOME'
          title1='Rental Homes for'
          title2='Everyone'
          desc1=' Explore from Apartments, builder floors, villas'
          desc2='and more'
          buttonText='Explore Renting'
          linkName='/search?purpose=for-rent'
          imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        />

        <Banner
          purpose='BUY A HOME'
          title1=' Find, Buy & Own Your'
          title2='Dream Home'
          desc1=' Explore from Apartments, land, builder floors,'
          desc2=' villas and more'
          buttonText='Explore Buying'
          linkName='/search?purpose=for-sale'
          imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
        />
    </Box>
  )
}
