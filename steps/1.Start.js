// PROJECT WIT NEXT.JS

// ! 1. Create a file .babelrc with this code
{
  "presets": ["next/babel"],
  "plugins": []

}

// ! 2.
npm run dev

// ! 3. install dependences:

// ! 4.
npm install @chakra-ui/react @emotion/react @emotion/react @emotion/styled axios framer-motion millify nprogress react-horizontal-scrolling-menu react-icons

// !5. in pages/index.js delete all the HTML code :

export default function Home() {
  return (
    <div className={styles.container}>

    </div>
  )
}

// ! 6. Import dependencies
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
// ...

// https://chakra-ui.com/guides/first-steps
