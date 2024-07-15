import { useState } from "react"

interface Props {
  setOpenModal: (value: boolean) => void
  openModal: boolean
  dataItems: {
    name: string
    price: string
    count: number
  }[],
  removeItem: (index: number) => void
  finallyCart: () => void
}

export function ModalItems({ setOpenModal, openModal, dataItems, removeItem, finallyCart }: Props) {
  const [address, setAddress] = useState("")
  const [errorAddress, setErrorAddress] = useState(false)

  function handleFinished() {
    if (address === "") {
      return setErrorAddress(true)
    }

    setOpenModal(false)

    alert(`Pedido realizado!
    Endereço de entrega:
    ${address}`)

    finallyCart()
  }

  const totalPriceItem = (valor: number) => {
    valor.toFixed(2)
    return valor.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' })
  }


  let total = 0
  dataItems.forEach((item) => {
    total += (parseFloat(item.price) * item.count)
    total.toFixed(2)
  })

  return (
    <div className="bg-black/70 flex justify-center items-center w-full h-full fixed top-0 z-20">
      <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]">
        <h2 className="text-center font-bold text-2xl mb-4">Meu carrinho</h2>

        {dataItems.map((item, index) => (
          <div key={index} className="flex w-full border-b border-gray-400 py-1">
            <div className="flex flex-col w-full">
              <span className="font-semibold">
                {item.name}
              </span>
              <span>{item.count}x - {totalPriceItem(parseFloat(item.price))}</span>
            </div>
            <button onClick={() => removeItem(index)}>
              <span className="text-red-500">Remover</span>
            </button>
          </div>
        ))}

        <div className="flex justify-between mb-2 flex-col mt-4">
          <p className="font-bold">Total: {total.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' })}</p>

          <p className="font-bold mt-4">Endereço de entrega:</p>
          <input type="text"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Informe seu endereço completo..."
            className="w-full border-2 p-1 rounded my-1"
          />
          {errorAddress && (
            <p className="text-red-500">Digite seu endereço completo!</p>
          )}

          <div className="flex w-full items-center justify-between mt-4">
            <button
              className="text-red-500 px-4 py-1"
              onClick={() => setOpenModal(!openModal)}
            >
              Fechar
            </button>
            <button
              className="text-white px-4 py-1 rounded bg-green-500"
              onClick={handleFinished}
            >
              Finalizar pedido
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
