import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { MferBuilderDAO } from 'mferbuilderdao-sdk'
import { Auction, AuctionResult, Token } from './interfaces'

// to prevent TypeScript error on undefined `window.ethereum`
declare var window: any

function App() {
  const [auction, setAuction] = useState<Auction | undefined>()
  const [token, setTokenURI] = useState<Token | undefined>()

  // Fetch data for current mferbuilderDAO auction
  useEffect(() => {
    if (window.ethereum) {
      // connect to the MferBuilderDAO with an Ethers.js provider (or signer)
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const sdk = MferBuilderDAO.connect({ signerOrProvider: provider })

      // use the SDK to connect to the auction and token contracts
      const auctionContract = sdk.auction()
      const tokenContract = sdk.token()

      // fetch & store the latest onchain auction data in state
      auctionContract
        .auction()
        .then((auctionResult: AuctionResult) => {
          const {
            endTime,
            highestBid,
            highestBidder,
            settled,
            startTime,
            tokenId,
          } = auctionResult

          setAuction({
            endTime,
            highestBid,
            highestBidder,
            settled,
            startTime,
            tokenId,
          } as Auction)

          // use the tokenId from the auction data to fetch details for the current mferbuilderDAO NFT on auction
          tokenContract
            .tokenURI(tokenId)
            .then((tokenURIResult: string) => {
              // convert tokenURI string from base64 to JSON & set in state
              const tokenData = atob(tokenURIResult.split(',')[1])
              setTokenURI(JSON.parse(tokenData) as Token)
            })
            .catch((error: Error) => {
              console.error(error)
              alert('error fetching Token data - check browser console')
            })
        })
        .catch((error: Error) => {
          console.error(error)
          alert('error fetching Auction data - check browser console')
        })
    }
  }, [])

  console.log(token?.image)

  return (
    <>
      <h1>MferBuilderDAO with React</h1>
      <hr />
      <h3>current auction data:</h3>
      <div
        style={{
          width: '12rem',
          outline: '0.15rem solid white',
          textAlign: 'center',
          padding: '0.25rem 0 1rem 0',
        }}>
        <p>{token?.name}</p>
        <img style={{ width: '10rem' }} src={token?.image} />
      </div>
      <pre>{JSON.stringify({ auction, token }, null, 2)}</pre>
    </>
  )
}

export default App
