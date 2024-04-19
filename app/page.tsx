import { ConnectButton } from '@/app/helper'
import { client } from './client'
import { chain } from './chain'
import ERC1155 from '@/components/ERC1155'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-5'>
      <p className='text-xl my-5'>Welcome to the project, ETHDubai!</p>
      <ConnectButton client={client} chain={chain} />
      <ERC1155 />
    </main>
  )
}
