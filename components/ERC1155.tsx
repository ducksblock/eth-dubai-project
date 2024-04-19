'use client'
import { client } from '@/app/client'
import { contract } from '@/utils/contract'
import { claimTo, getNFTs, getOwnedNFTs } from 'thirdweb/extensions/erc1155'
import {
  MediaRenderer,
  TransactionButton,
  useActiveAccount,
  useReadContract,
} from 'thirdweb/react'

const ERC1155 = () => {
  const account = useActiveAccount()
  const { data: nfts } = useReadContract(getNFTs, {
    contract: contract,
  })

  const { data: ownedNFTs, refetch: refetchOwnedNFTs } = useReadContract(
    getOwnedNFTs,
    {
      contract: contract,
      address: account?.address || '',
    },
  )

  return (
    <div>
      {account && (
        <>
          <div className='flex flex-row'>
            {nfts && nfts.length > 0 ? (
              nfts.map((nft) => (
                <div
                  className='flex flex-col bg-neutral-800 rounded-md p-3 m-3 max-w-[30%]'
                  key={nft.id}
                >
                  <MediaRenderer
                    client={client}
                    src={nft.metadata.image}
                    className='w-full h-auto'
                  />
                  <TransactionButton
                    transaction={() =>
                      claimTo({
                        contract: contract,
                        to: account?.address || '',
                        tokenId: nft.id,
                        quantity: BigInt(1),
                      })
                    }
                    onTransactionConfirmed={() => {
                      alert(`${nft.metadata.name} has been claimed`)
                      refetchOwnedNFTs()
                    }}
                  >
                    Claim NFT
                  </TransactionButton>
                </div>
              ))
            ) : (
              <p>No NFTs found!</p>
            )}
          </div>
          <div className='m-2'>
            <p className='text-center'>Owned NFTs</p>
            <div className='flex justify-center'>
              {ownedNFTs && ownedNFTs.length > 0 ? (
                ownedNFTs.map((nft) => (
                  <div
                    className='bg-neutral-800 rounded-md p-3 my-3 mx-2'
                    key={nft.id}
                  >
                    <p>Token ID: {nft.id.toString()}</p>
                    <p>Quantity: {nft.quantityOwned.toString()}</p>
                  </div>
                ))
              ) : (
                <p>No Owned NFTs found!</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ERC1155
