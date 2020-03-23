import React from "react"

import { Global } from "./global"

import Header from "../containers/header"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      <Global />
    </>
  )
}

export default Layout
