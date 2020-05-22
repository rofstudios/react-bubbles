import React, { useState, useEffect } from "react";
import { axiosWithAuth } from './utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  let [trigger, setTrigger] = useState(0)
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
    .get('/api/colors')
    .then(res => {
      // console.log(res, '.getRequest')
      setColorList(res.data)
    })
  }, [trigger])

  return (
    <>
      <ColorList colors={colorList} trigger={setTrigger} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
