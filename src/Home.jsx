import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
    <div>Home, welcome</div>
    <Link to="/about">About us page</Link>
    </>
  )
}
