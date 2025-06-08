"use client";

import React from 'react';
import HeaderIsland from './HeaderIsland';
import MobileHeader from './MobileHeader';

export default function Header() {
  return (
    <>
      <HeaderIsland />
      <MobileHeader />
    </>
  );
}