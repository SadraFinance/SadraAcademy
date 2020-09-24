import React from 'react';
import logo from "./sadra-mini-logo-highres.png";

export default function Logo(props) {
  return (
    <>
    <img src={logo} width={34} height={34} viewBox="0 0 180 34" fill="none" {...props}/>
    <h3 style={{padding:10}}> آکادمی صدرا </h3>

    </>
  );
}
