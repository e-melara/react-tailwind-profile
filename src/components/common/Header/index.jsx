import { useState } from "react"

import Profile from "./Profile"
import Navigation from "./Navigation"
import NavigationMobile from "./NavigationMobile"

const Header = () => {
  const [menu] = useState([
    { name: "Home", url: "#" },
    { name: "About", url: "#" },
    { name: "Blog", url: "#" },
    { name: "Contact", url: "#" }
  ])

  return (
    <header className={"bg-white px-6 shadow"}>
      <div className={"flex max-w-6xl mx-auto justify-between h-16 items-center"}>
        <button
          className={"rounded p-1 focus:ring-2 focus:ring-slate-200 text-slate-500 transition-colors hover:bg-sky-500 hover:text-slate-100 "}>
          <img className={"w-6 h-6"} src="/imgs/icons/burguen.svg" alt="icon de menu burgues" />
        </button>
        <Navigation items={menu} />
        <Profile />
      </div>
      <NavigationMobile items={menu} />
    </header>
  )
}

export default Header