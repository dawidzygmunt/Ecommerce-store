import { useRouter } from "next/navigation"
import { MouseEventHandler } from "react"
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/use-cart"


import { Product } from '@/types'
import Currency from './ui/currency';
import Button from './ui/button';
import { ShoppingCart } from 'lucide-react';
import AddToCartButton from "@/app/(routes)/product/[productId]/components/add-to-cart-button"

interface InfoProps {
  data: Product;
}



export const Info: React.FC<InfoProps> = ({
  data,
}) => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-900'>{data.name}</h1>
      <div className='mt-3 flex items-end justify-between'>
        <p className='text-2xl text-gray-900'>
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className='my-4' />
      <div className='flex flex-col gap-y-6'>
        <div className="flex flexitems-center gap-x-4">
          <h3 className='font-semibold text-black'>Size:</h3>
          <div>
            {data?.size?.name}
          </div>
        </div>
        <div className="flex flexitems-center gap-x-4">
          <h3 className='font-semibold text-black'>Color:</h3>
          <div className='h-6 w-6 rounded-full border border-gray-600' style={{ backgroundColor: data?.color?.value }} />
        </div>
        <div className='mt-10 flex items-center gap-x-3'>
          <AddToCartButton data={data}/>
        </div>
      </div>
    </div>
  )
}
