'use client';

import { useState } from 'react';

import Navbar from './components/navbar';

import Home from './pageComponents/Home';
import About from './pageComponents/About';

export default function Main() {
  const [index, setIndex] = useState(0);

  const pages = [
    <Home key="0"/>,
    <About key="1"/>
  ]

  return (
    <div className="flex flex-row h-svh max-h-svh overflow-crop">
      <Navbar currentIndex={index} setIndex={setIndex}/>
      {pages[index]}
    </div> 
  );
}
