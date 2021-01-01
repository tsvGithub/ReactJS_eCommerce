//6-------------
import React, { useContext } from "react";
//{getClass} for grid layout:----
import { getClass } from "../utils";
//------------------------
import Image from "../components/Image";
import { Context } from "../Context";

function Photos() {
  //get the [appPhotos] from ConextProvider in Context.js
  const { allPhotos } = useContext(Context);
  // console.log(allPhotos);
  //-----------------------------

  //map over [allPhotos], creating <Image /> component
  //props to Image Component => img, className (!!!)
  const imageElements = allPhotos.map((img, i) => <Image key={img.id} img={img} className={getClass(i)} />);

  return <main className="photos">{imageElements}</main>;
}

export default Photos;
