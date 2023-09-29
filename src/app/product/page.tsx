import { products } from "@/data/product";
export default function product(){
  return (
    <main style={{ 
      backgroundImage: `url("bgg.jpg")` 
    }}>
      <section className="container mx-auto">
        <div className="grid grid-cols-4 p-2 gap-2"> {
          products.map((item)=>(
            <div key={item.id} className="flex flex-col border border-cyan-500 p-2">
            <img className="" src={item.img} alt="prod"/>
            <div className="">
            <h2 className="p-2 text-lg font-semibold">Cloth = {item.productName}</h2>
            <h1>Rate {item.price}</h1>
            </div>
            <div className="text-sm bg-indigo-500 p-2 text-center text-white cursor-pointer capitalize">add to cart</div>
          </div>
          ))}
        </div>
      </section>
    </main>
  )
}