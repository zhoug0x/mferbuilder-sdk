import { ethers } from 'ethers'
import { MferBuilderDAO } from 'mferbuilderdao-sdk'

const main = async () => {
  const provider = ethers.getDefaultProvider('mainnet')

  const { auction, token, governor, treasury, metadata } =
    MferBuilderDAO.connect({
      signerOrProvider: provider,
    })

  const tokenContract = token()
  const auctionContract = auction()
  const governorContract = governor()
  const treasuryContract = treasury()
  const metadataContract = metadata()

  // test auction
  const auctionData = await auctionContract.auction()
  console.log('auction data', auctionData)

  // test token uri
  const tokenURI = await tokenContract.tokenURI(auctionData.tokenId)
  console.log('tokenURI', tokenURI)

  // test token supply
  const totalSupply = await tokenContract.totalSupply()
  console.log('totalSupply', totalSupply)

  // test governor
  const quorum = await governorContract.quorum()
  console.log('quorum', quorum)

  // test treasury
  const delay = await treasuryContract.delay()
  console.log('delay', delay)

  // test metadata
  const description = await metadataContract.description()
  console.log('description', description)
}

main().then(() => process.exit())
