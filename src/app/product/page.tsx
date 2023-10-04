import { products } from "../data/product"
export default function product() {
  return (
    <main className="bg-black" style={{
      backgroundImage: `url("bgg.jpg")`
    }}>
      <section className="container  mx-auto">
        <div className="grid p-8 md:grid-cols-4 gap-2"> {
          products.map((item) => (
            <div key={item.id} className="flex flex-col border overflow-hidden  border-cyan-500 p-2">
              <img className="hover:scale-125 hover:rotate-180 hover:rounded-full transition-all duration-700 " src={item.img} alt="prod" />
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