import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {Tabs, Tab, TabList, TabPanel, TabPanels, Button, Flex, ListItem, UnorderedList, 
  Text, Input } from "@chakra-ui/react";
import { useState } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
    const handleOnChange=(event:any)=>{
      console.log("Onchange")
      setItem(event.target.value)
    }
    const [tasks,setTasks] = useState(['1','2','3']);
    const [Item,setItem] = useState('');
    function removeItem(taskName: string){
      setTasks(tasks.filter((task)=>{
        return task !=taskName;
      })
      );
    }
    function addItem(){
      let temp = tasks;
      temp.push(Item);
      setTasks(temp)
      setItem("");
      }
  return (

    <>
      <Flex w={'100%'} h='100vh'>
      <Flex w={'100%'} flexDirection='column' ml={'20%'} mt='5%' mr={'20%'} color='black'>
        <Text fontWeight={'700'} fontSize='30'>Tasks</Text>
       <form>
       <Flex mt={'2%'}>
          <Input value={Item} onChange={handleOnChange} variant={'flushed'} placeholder='Add Task' w={'50%'} />
          <Button onClick={addItem} ml={'5'} bg='blue.400'>
            Add Task 
          </Button>
        </Flex>
       </form>
        <Tabs mt={'2'} w='100%'>
          <TabList>
            <Tab>Completed Task</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text>Completed task will go here</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <UnorderedList>
          {tasks.map((task)=>{
              return (
              <ListItem key={task}>
                {task}
                <Button colorScheme={'blue'} ml={10} onClick={()=>{
                  removeItem(task);
                }}>
                  Remove Item
                </Button> 
              </ListItem>)
          })}
        </UnorderedList>
      </Flex>
    </Flex>
    </>
  )
  }
