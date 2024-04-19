import { chain } from '@/app/chain'
import { client } from '@/app/client'
import { getContract } from 'thirdweb'

const contractAddress = '0xB2A01BDc3853815bdA225484070Fd91838f2B9aE'

export const contract = getContract({
  client: client,
  chain: chain,
  address: contractAddress,
})
