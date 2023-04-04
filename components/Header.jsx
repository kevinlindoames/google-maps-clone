import { Flex } from '@chakra-ui/react'
import React from 'react'

const Header = ({ seType, setRatings, setCoordinates }) => {
  return (
    <Flex
      position={"absolute"}
      top={0}
      left={0}
      width={"full"}
      px={4}
      py={2}
      zIndex={101}
    >


    </Flex>
  );
};

export default Header;