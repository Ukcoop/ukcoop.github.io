'use client';

import Home from './pageComponents/Home';

export default function Main() {
  return (
    <div className="flex flex-row h-svh max-h-svh overflow-crop">
      {<Home key="0"/>}
    </div> 
  );
}
