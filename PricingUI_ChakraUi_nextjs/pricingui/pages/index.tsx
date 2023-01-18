import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {Tabs, Grid, Box, Heading, Stack, VStack, Tab, TabList, TabPanel, TabPanels, Button, Flex, ListItem, UnorderedList, 
  Text, Input } from "@chakra-ui/react";


import PriceBox from './components/PriceBox';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Flex 
     alignItems={'center'}
     justifyContent ='center'
     w={'full'}
     backgroundColor = 'red.200'
     minH="100vh"
     direction="column"
     >
      <Stack
      spacing={'5'}
      my='5'
      paddingX={[5, 0]}
      alignItems={'center'}
      justifyContent ='flex-start'
      w={'full'}
      maxWidth="1200px"
      >
        <VStack
        alignItems={'center'}
        w='full'
        >
          <Heading color={'red.500'}>Pricing</Heading>
          <Text textAlign={'center'} mb='5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatem recusandae commodi quae labore, nulla consequatur odit temporibus delectus nobis?</Text>
        </VStack>
        <Stack isInline
        border={'1px solid'}
        borderRadius='4px'
        justifyContent={'center'}
        alignItems='stretch'
        display={'flex'}
        width='fit-content'
        backgroundColor="white"
        borderColor={'red.500'}
        mb={'3'}
        spacing={0}
        >
          <Box backgroundColor={'red.500'} color='white' p=".3rem 1rem">
           Monthly
          </Box>
          <Box p=".3rem 1rem">Annually</Box>
        </Stack>
        <Grid
         w="full"
         gap={5}
         justifyContent="center"
         templateColumns={{
           base: "inherit",
           md: "repeat( auto-fit, 250px )"
         }}
        >
        <PriceBox />
          
        </Grid>
      </Stack>
     </Flex>
    </>
  )
}
