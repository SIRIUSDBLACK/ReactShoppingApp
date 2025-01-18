import React from 'react'
import products from '../data/products'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import useCartStore from '../Store/useCartStore'
import useProductStore from '../Store/useProductStore'
import Empty from "../assets/Empty.svg"

const CartSection = () => {
    const {carts} = useCartStore();
    const {products} = useProductStore();

    const total = carts.reduce((pv,cv) =>{
        const cost = cv.quantity * products.find(({id}) => id === cv.productId).price;
        return pv + cost
    },0 )

    const tax = total * 0.05;

    const netTotal = tax + total;
  return (
    <>
    <section className=' flex flex-col gap-[150px] justify-between'>

    <div className='px-5 md:px-0'>
    

    {carts.length === 0 ? (
        <div className='flex flex-col justify-center items-center'   >
        <img src={Empty} className='w-[250px]  mx-auto' alt="" />
        <p className='text-xl font-semibold'>There is no items in the cart</p>
        </div>
    ):(
        carts.map((cart) => (
            <Cart key={cart.id} cart={cart}/>
       ))
    )}

    </div>

    <div className='border-t border-black flex items-end flex-col gap-5'>

        <div className='flex gap-14 justify-end'>
            <div>
                <p className='text-gray-600 text-sm'>Total ($)</p>
                <p className='font-bold text-lg '>{total.toFixed(2)}</p>
            </div>

            <div>
                <p className='text-gray-600 text-sm'>Tax (5%)</p>
                <p className='font-bold text-lg '>{tax.toFixed(2)}</p>
            </div>

            <div>
                <p className='text-gray-600 text-sm'>Net Total ($)</p>
                <p className='font-bold text-3xl '>{netTotal.toFixed(2)}</p>
            </div> 
            
        </div>

        <button  className="border relative border-black px-9 py-2">
            Order Now       
        </button>
    </div>
    </section>
    </>
    
  )
}

export default CartSection