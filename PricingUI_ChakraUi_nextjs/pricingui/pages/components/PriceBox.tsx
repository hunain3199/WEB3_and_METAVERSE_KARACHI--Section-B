import {
    Box,
    Stack,
    HStack,
    Text,
    Heading,
    Divider,
    List,
    ListIcon,
    ListItem,
    Button,
    Flex,
    Spacer
  } from "@chakra-ui/react";
import { ArrowForwardIcon, CheckCircleIcon } from "@chakra-ui/icons";
  




  const PriceBox = () => {
    return (
        <>
        <Stack
        spacing={2}
        border="3px solid"
        borderColor={ "red.500"}
        borderRadius="0.7rem"
        p={4}
        h="350px"
        backgroundColor="white"
        position="relative"
      >
        
          <Box
            position="absolute"
            top="0"
            right="0"
            backgroundColor="red.500"
            color="white"
            paddingX={2}
            paddingY={1}
            borderRadius="0 0 0 0.7rem"
            fontSize="0.8rem"
          >
            Free</Box>
        
        <Text textTransform="uppercase">Start</Text>
        <HStack>
          <Heading>Free</Heading>
          
            <Box as="span" color="gray.600" fontSize="sm">
              
            </Box>
        
        </HStack>
        <Divider borderColor="blackAlpha.500" />
        <List flex="1">
          
            <ListItem >
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Lorem ipstsum color
            </ListItem>
            <ListItem >
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Lorem ipstsum color
            </ListItem>
            <ListItem >
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Lorem ipstsum color
            </ListItem>
          
        </List>
        <Box>
          <Button
            variant="solid"
            size="sm"
            width="100%"
            rightIcon={<ArrowForwardIcon />}
            borderRadius={0}
            display="flex"
            justifyContent="space-between"
            backgroundColor={"red.500"}
            _hover={{
              backgroundColor: "gray.300"
            }}
            color="white"
          >
            Buy
          </Button>
          <Text fontSize="xs">Fusce purus tellus, tristique quis libero sit amet...</Text>
        </Box>
      </Stack>

        
        <Stack
        spacing={2}
        border="3px solid"
        borderColor={ "red.500"}
        borderRadius="0.7rem"
        p={4}
        h="350px"
        backgroundColor="white"
        position="relative"
      >
        
          <Box
            position="absolute"
            top="0"
            right="0"
            backgroundColor="red.500"
            color="white"
            paddingX={2}
            paddingY={1}
            borderRadius="0 0 0 0.7rem"
            fontSize="0.8rem"
          >
            Popular</Box>
        
        <Text textTransform="uppercase">Pro</Text>
        <HStack>
          <Heading>$12</Heading>
          
            <Box as="span" color="gray.600" fontSize="sm">
              / mo
            </Box>
        
        </HStack>
        <Divider borderColor="blackAlpha.500" />
        <List flex="1">
          
            <ListItem >
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Lorem ipstsum color
            </ListItem>
            <ListItem >
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Lorem ipstsum color
            </ListItem>
            <ListItem >
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Lorem ipstsum color
            </ListItem>
          
        </List>
        <Box>
          <Button
            variant="solid"
            size="sm"
            width="100%"
            rightIcon={<ArrowForwardIcon />}
            borderRadius={0}
            display="flex"
            justifyContent="space-between"
            backgroundColor={"red.500"}
            _hover={{
              backgroundColor: "gray.300"
            }}
            color="white"
          >
            Buy
          </Button>
          <Text fontSize="xs">Fusce purus tellus, tristique quis libero sit amet...</Text>
        </Box>
      </Stack>

            {/* Bunsiness model */}
            


        <Stack
        spacing={2}
        border="3px solid"
        borderColor={ "red.500"}
        borderRadius="0.7rem"
        p={4}
        h="350px"
        backgroundColor="white"
        position="relative"
      >
        
          <Box
            position="absolute"
            top="0"
            right="0"
            backgroundColor="red.500"
            color="white"
            paddingX={2}
            paddingY={1}
            borderRadius="0 0 0 0.7rem"
            fontSize="0.8rem"
          >
            Business</Box>
        
        <Text textTransform="uppercase">BUSINESS</Text>
        <HStack>
          <Heading>$32</Heading>
          
            <Box as="span" color="gray.600" fontSize="sm">
              / mo
            </Box>
        
        </HStack>
        <Divider borderColor="blackAlpha.500" />
        <List flex="1">
          
            <ListItem >
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Lorem ipstsum color
            </ListItem>
            <ListItem >
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Lorem ipstsum color
            </ListItem>
            <ListItem >
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Lorem ipstsum color
            </ListItem>
            <ListItem >
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Lorem ipstsum color
            </ListItem>
          
        </List>
        <Box>
          <Button
            variant="solid"
            size="sm"
            width="100%"
            rightIcon={<ArrowForwardIcon />}
            borderRadius={0}
            display="flex"
            justifyContent="space-between"
            backgroundColor={"red.500"}
            _hover={{
              backgroundColor: "gray.300"
            }}
            color="white"
          >
            Buy
          </Button>
          <Text fontSize="xs">Fusce purus tellus, tristique quis libero sit amet...</Text>
        </Box>
      </Stack>


            {/* special model */}

        <Stack
        spacing={2}
        border="3px solid"
        borderColor={ "red.500"}
        borderRadius="0.7rem"
        p={4}
        h="350px"
        backgroundColor="white"
        position="relative"
      >
        
          <Box
            position="absolute"
            top="0"
            right="0"
            backgroundColor="red.500"
            color="white"
            paddingX={2}
            paddingY={1}
            borderRadius="0 0 0 0.7rem"
            fontSize="0.8rem"
          >
            Special</Box>
        
        <Text textTransform="uppercase">SPECIAL</Text>
        <HStack>
          <Heading>$180</Heading>
          
            <Box as="span" color="gray.600" fontSize="sm">
              / mo
            </Box>
        
        </HStack>
        <Divider borderColor="blackAlpha.500" />
        <List flex="1">
          
            <ListItem >
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Lorem ipstsum color
            </ListItem>
            <ListItem >
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Lorem ipstsum color
            </ListItem>
            <ListItem >
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Lorem ipstsum color
            </ListItem>
            <ListItem >
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Lorem ipstsum color
            </ListItem>
            <ListItem >
              <ListIcon as={CheckCircleIcon} color="red.500" />
              Lorem ipstsum color
            </ListItem>
          
        </List>
        <Box>
          <Button
            variant="solid"
            size="sm"
            width="100%"
            rightIcon={<ArrowForwardIcon />}
            borderRadius={0}
            display="flex"
            justifyContent="space-between"
            backgroundColor={"red.500"}
            _hover={{
              backgroundColor: "gray.300"
            }}
            color="white"
          >
            Buy
          </Button>
          <Text fontSize="xs">Fusce purus tellus, tristique quis libero sit amet...</Text>
        </Box>
      </Stack>
      
      </>
    )
}

  
  
  export default PriceBox
  