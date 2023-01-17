import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {Button, Flex, ListItem, UnorderedList, 
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
  function removeItem(taskName:any){
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
      <Flex
      justifyContent={'center'}
      alignItems = 'center'
      width={'100%'}
      height = ' 100%'
      flexDirection={'column'}
      >
        <UnorderedList>
          {tasks.map((task:any)=>{
              return (
              <ListItem key={task.index}>
                {task}
                <Button colorScheme={'blue'} ml={10} onClick={()=>{
                  removeItem(task);
                }}>
                  Remove Item
                </Button> 
              </ListItem>)
          })}
        </UnorderedList>
        <Input placeholder='Item Name' value={Item} onChange={handleOnChange}></Input>
          <Button
          colorScheme={'blue'}
          onClick={addItem}
          >Add Item</Button>
      </Flex>
      )
}
