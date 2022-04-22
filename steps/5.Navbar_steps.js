/** IMPLEMENTING THE NAVBAR */

/**
 *
 * @component Navbar
 * @return Navbar
 *
 * @example
 * going to open up the entire menu list
 * <Menu>
    <MenuButton />
  </Menu>
 *
 * The menu in this case we won't have the separate menu for mobile devices and
 * for desktop devices we're just going to have one menu that we can click and then it's
 * going to open up the entire menu list.
 * But a great challenge for you to practice chakra ui a bit would be to implement
 * a separate menu for mobile devices and for desktop devices
 */
import Link  from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p="2" borderBottom="1px" borderColor="gray.100">
    <Box fontSize="3xl" color="blue.400" fontWeight="bold">
      <Link href="/" paddingLeft="2">Realtor</Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />}  variant="outlined" color="red.400" />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
)

export default Navbar;

// Import this component inside Layout component
