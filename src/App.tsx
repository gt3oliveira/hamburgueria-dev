import { ItemMenu } from './components/ItemMenu'
import { FaShoppingCart } from 'react-icons/fa'

import logoBurger from './assets/hamb-1.png'
import hamb1 from './assets/hamb-1.png'
import hamb2 from './assets/hamb-2.png'
import hamb3 from './assets/hamb-3.png'
import hamb4 from './assets/hamb-4.png'
import hamb5 from './assets/hamb-5.png'
import hamb6 from './assets/hamb-6.png'
import hamb7 from './assets/hamb-7.png'
import hamb8 from './assets/hamb-8.png'
import cocaCola from './assets/refri-1.png'
import guarana from './assets/refri-2.png'
import { useEffect, useState } from 'react'
import { ModalItems } from './components/ModalItems'

type Props = {
  name: string
  price: string
  count: number
}

export default function App() {
  const [openModal, setOpenModal] = useState(false)
  const [dados, setDados] = useState<Props[]>([])
  const [cartCounter, setCartCounter] = useState(0)
  const [checkOpen, setCheckOpen] = useState(true)

  function handleModalItems() {
    setOpenModal(true)
  }

  function handleFinallyCart() {
    setCartCounter(0)
    setDados([])
  }

  function handleAddItem(name: string, price: string) {
    const existingItem = dados.find(item => item.name === name)

    if (existingItem) {
      setCartCounter(cartCounter + 1)
      return existingItem.count += 1
    }

    setDados(oldProps => {
      return [{ name, price, count: 1 }, ...oldProps]
    })
    setCartCounter(cartCounter + 1)
  }

  function handleRemoveItem(index: number) {
    if (index !== -1) {
      const item = dados[index]

      if (item.count > 1) {
        item.count -= 1

        const name = item.name
        const price = item.price
        const count = item.count

        setCartCounter(cartCounter - 1)

        dados.splice(index, 1)
        return setDados(oldProps => {
          return [{ name, price, count }, ...oldProps]
        })
      }

      setCartCounter(cartCounter - 1)
      dados.splice(index, 1)
    }

    if (dados.length === 0) {
      setDados([])
      setOpenModal(false)
    }
  }

  function checkOpenDelivery() {
    const data = new Date()
    const hour = data.getHours()

    if (hour >= 18 && hour < 22) {
      setCheckOpen(false)
    }
  }

  useEffect(() => {
    checkOpenDelivery()
  }, [])

  return (
    <div>
      <header className='w-full h-[420px] bg-zinc-900 bg-home bg-cover bg-center'>
        <div className='flex flex-col w-full h-full justify-center items-center'>
          <img src={logoBurger} alt="Image Header"
            width={128}
            height={128}
            className=' rounded-full shadow-lg hover:scale-110 duration-200'
          />

          <h1 className='text-white text-4xl mt-4 mb-2 font-bold'>Dev Burguer</h1>
          <span className='text-white px-2 text-center'>
            Av. Santa Leopoldina, 2300, Coqueiral de Itaparica, Vila Velha, ES
          </span>

          {checkOpen ? (
            <div className={`bg-red-500 py-2 px-4 rounded-lg mt-5`}>
              <span className="text-white font-medium">Seg a Dom - 18:00 às 22:00</span>
            </div>
          ) : (
            <div className={`bg-hoursDiv py-2 px-4 rounded-lg mt-5`}>
              <span className="text-white font-medium">Seg a Dom - 18:00 às 22:00</span>
            </div>
          )}
        </div>
      </header>

      <h2 className='text-2xl font-bold text-center my-8 md:text-3xl'>
        Conheça nosso menu
      </h2>

      <section className='grid grid-cols-1 gap-7 mx-4 mb-16 md:gap-10 md:grid-cols-2 lg:mx-auto lg:max-w-5xl'>
        <ItemMenu
          src={hamb1}
          alt='Hamburguer Smash'
          checkOpenDelivery={checkOpen}
          name='Hamburguer Smash'
          description='Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.'
          price='18.90'
          addItem={(name: string, price: string) =>
            handleAddItem(name, price)
          }
        />
        <ItemMenu
          src={hamb2}
          alt='Cheese Burger Duplo'
          checkOpenDelivery={checkOpen}
          name='Cheese Burger Duplo'
          description='Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.'
          price='32.90'
          addItem={(name: string, price: string) =>
            handleAddItem(name, price)
          }
        />
        <ItemMenu
          src={hamb3}
          alt='Cheese Burger'
          checkOpenDelivery={checkOpen}
          name='Cheese Burger'
          description='Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.'
          price='19.90'
          addItem={(name: string, price: string) =>
            handleAddItem(name, price)
          }
        />
        <ItemMenu
          src={hamb4}
          alt='Chicken Burger'
          checkOpenDelivery={checkOpen}
          name='Chicken Burger'
          description='Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.'
          price='22.90'
          addItem={(name: string, price: string) =>
            handleAddItem(name, price)
          }
        />
        <ItemMenu
          src={hamb5}
          alt='X-TUDO'
          checkOpenDelivery={checkOpen}
          name='X-TUDO'
          description='Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.'
          price='22.90'
          addItem={(name: string, price: string) =>
            handleAddItem(name, price)
          }
        />
        <ItemMenu
          src={hamb6}
          alt='Gourmet Burguer'
          checkOpenDelivery={checkOpen}
          name='Gourmet Burguer'
          description='Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.'
          price='20.90'
          addItem={(name: string, price: string) =>
            handleAddItem(name, price)
          }
        />
        <ItemMenu
          src={hamb7}
          alt='Costela Prime'
          checkOpenDelivery={checkOpen}
          name='Costela Prime'
          description='Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.'
          price='20.90'
          addItem={(name: string, price: string) =>
            handleAddItem(name, price)
          }
        />
        <ItemMenu
          src={hamb8}
          alt='Burguer Salada'
          checkOpenDelivery={checkOpen}
          name='Burguer Salada'
          description='Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.'
          price='20.90'
          addItem={(name: string, price: string) =>
            handleAddItem(name, price)
          }
        />
      </section>

      <div className='mx-4 mb-16 md:gap-10 md:grid-cols-2 lg:mx-auto lg:max-w-5xl'>
        <h2 className='font-bold text-3xl'>
          Bebidas
        </h2>
      </div>

      <section className='grid grid-cols-1 gap-7 mx-4 mb-16 md:gap-10 md:grid-cols-2 lg:mx-auto lg:max-w-5xl'>
        <ItemMenu
          src={cocaCola}
          alt='Coca-Cola'
          checkOpenDelivery={checkOpen}
          name="Coca-Cola"
          price="3.50"
          addItem={(name: string, price: string) =>
            handleAddItem(name, price)
          }
        />
        <ItemMenu
          src={guarana}
          alt='Guaraná Antartica'
          checkOpenDelivery={checkOpen}
          name="Guaraná Antartica"
          price="3.50"
          addItem={(name: string, price: string) =>
            handleAddItem(name, price)
          }
        />
      </section>

      {!checkOpen ? (
        <footer className='bg-footer flex w-full fixed bottom-0 z-10 h-14'>
          {cartCounter > 0 ? (
            <button
              onClick={() => handleModalItems()}
              className='flex w-full items-center justify-center gap-2 buttonCart'
            >
              <span className='text-white font-medium'>({cartCounter}) Veja seu carrinho</span>
              <FaShoppingCart size={24} color='#4ade80' />
            </button>
          ) : (
            <div className='flex w-full items-center justify-center gap-2'>
              <span className='text-white font-medium'>Seu carrinho está vazio!</span>
              <FaShoppingCart size={24} color='#a1a1aa' />
            </div>
          )}
        </footer>
      ) : (
        <div></div>
      )}

      {openModal &&
        <ModalItems
          openModal={openModal}
          setOpenModal={setOpenModal}
          dataItems={dados}
          removeItem={(index: number) => handleRemoveItem(index)}
          finallyCart={handleFinallyCart}
        />
      }
    </div>
  )
}
