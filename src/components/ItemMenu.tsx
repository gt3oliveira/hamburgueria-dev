import { FaCartPlus } from "react-icons/fa"

interface Props {
  src: string
  alt: string
  name: string
  price: string
  description?: string
  addItem: (name: string, price: string) => void
  checkOpenDelivery: boolean
}

export function ItemMenu({ src, alt, name, description, price, addItem, checkOpenDelivery }: Props) {
  return (
    <div className='flex gap-2 my-2'>
      <img src={src} alt={alt}
        className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"
      />

      <div className="flex-1">
        <p className="font-bold">{name}</p>
        <p className="text-sm">{description}</p>

        <div className="flex items-center gap-2 justify-between mt-3">
          <p className="font-bold text-lg">R$ {price}</p>
          <button
            onClick={() => addItem(name, price)}
            hidden={checkOpenDelivery}
            className={"bg-gray-900 px-4 py-1 rounded hover:bg-gray-700"}
          >
            <FaCartPlus size={24} color="#FFF " />
          </button>
        </div>
      </div>
    </div>
  )
}
