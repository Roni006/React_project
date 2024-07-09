import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayouts from "./RootLayout/RootLayouts"
import Home from "./pages/Home"
import Notes from "./pages/Notes"
import Contact from "./pages/Contact"


function App() {
   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayouts/>}>
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/notes" element={<Notes/>}>Notes</Route>
          <Route path="/contact" element={<Contact/>}>Home</Route>
        </Route>
      </Route>
    )
   )
  

  return (
    <>

      <RouterProvider router={router}/>
    </>
  )
}

export default App
