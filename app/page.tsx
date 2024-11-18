'use client';

import { useEffect, useState } from 'react';

import Navbar from './components/navbar';

import Home from './pageComponents/Home';
import About from './pageComponents/About';

export default function Main() {
  const [index, setIndex] = useState(0);

  const pages = [
    <Home/>,
    <About/>
  ]

  return (
    <div className="flex flex-row h-svh max-h-svh overflow-crop">
      <Navbar setIndex={setIndex}/>
      {pages[index]}
    </div> 
  );
}
