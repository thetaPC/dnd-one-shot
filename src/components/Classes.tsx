import {
  Text,
  Grid,
  GridItem,
  CircularProgress,
  Center,
} from '@chakra-ui/react';
import useSWR from 'swr';
import axios from 'axios';
import ClassCard from '@/components/ClassCard';

const Classes = () => {
  const fetcher = (url: string) =>
    axios.get(url).then((res: { [key: string]: any }) => {
      const playableClasses = ['barbarian', 'fighter', 'monk'];
      const classesData = res.data.results.filter(
        (item: { [key: string]: any }) => playableClasses.includes(item.index)
      );
      return {
        count: classesData.length,
        results: classesData,
      };
    });
  const {
    data: classes,
    error,
    isLoading,
  } = useSWR('https://www.dnd5eapi.co/api/classes', fetcher);

  return (
    <>
      {isLoading && (
        <Center>
          <CircularProgress isIndeterminate color="red.300" size="10rem" />
        </Center>
      )}
      {classes && (
        <>
          <Center>
            <Text fontSize={'2xl'} mb="1em">
              Choose your class
            </Text>
          </Center>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {classes.results.map((item: { [key: string]: any }) => {
              return (
                <GridItem key={item.name}>
                  <ClassCard name={item.name} apiUrl={item.url} />
                </GridItem>
              );
            })}
          </Grid>
        </>
      )}
    </>
  );
};

export default Classes;
