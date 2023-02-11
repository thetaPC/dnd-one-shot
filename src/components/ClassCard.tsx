'use client';

import {
  Text,
  Image,
  Grid,
  GridItem,
  Button,
  VisuallyHidden,
  Center,
  VStack,
} from '@chakra-ui/react';

type ClassCardProps = {
  name: string;
  apiUrl: string;
};

const ClassCard = (props: ClassCardProps) => {
  const { name, apiUrl } = props;
  return (
    <VStack>
      <Image
        height="10rem"
        src={`/classes/${name.toLowerCase()}1.png`}
        alt={name}
      />
      <Text fontSize={'2xl'}>{name}</Text>
      <Button colorScheme="red">
        Choose<VisuallyHidden>{` ${name}`}</VisuallyHidden>
      </Button>
    </VStack>
  );
};

export default ClassCard;
