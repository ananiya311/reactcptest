import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <>
    <div>About us page welcome we are in About page and i have got {Math.random()}</div>
    <Link to="/">Home page</Link>
    </>
  )
}
