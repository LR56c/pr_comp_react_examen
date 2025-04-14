import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from "react-bootstrap"
import { AddProduct } from "./components/add_product"
import { ProductsList } from "./components/products_list"
function App() {

  return (
    <>
      <div className="h-dvh flex flex-col">
        <Button>Bootstrap</Button>
        <AddProduct></AddProduct>
        <ProductsList></ProductsList>
      </div>
    </>
  )
}

export default App
