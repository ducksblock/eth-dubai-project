import { createThirdwebClient } from 'thirdweb'

const clientID = process.env.NEXT_PUBLIC_CLIENT_ID as string

export const client = createThirdwebClient({
  clientId: clientID,
})
