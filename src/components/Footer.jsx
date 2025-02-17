import React from 'react';
import {contact} from '../constants/index';

export default function Footer() {
  return (
    <div className="py-4" id="contact">
      <div className="contact container mx-auto flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h3 className="font-bold">Contact us on instagram</h3>
          <p>@allnightfederation</p>
          <p>@vin.a.yak06</p>
        </div>
        <div className="border-l border-white h-16 mx-8"></div>
        <div className="flex flex-col items-center">
          <h3 className="font-bold">Developers</h3>
          <p>@lil_toxx_</p>
          <p>@karthikeyan14.s</p>
          <p>@_nikz._07</p>
        </div>
      </div>
    </div>
  );
}
