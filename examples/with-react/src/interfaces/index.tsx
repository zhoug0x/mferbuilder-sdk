import type { BigNumber } from 'ethers'

export interface Auction {
  endTime: number
  highestBid: BigNumber
  highestBidder: string
  settled: boolean
  startTime: number
  tokenId: BigNumber
}

export interface AuctionResult extends Auction {
  0: BigNumber
  1: BigNumber
  2: string
  3: number
  4: number
  5: boolean
}

export interface Token {
  name: string
  description: string
  image: string
  properties: {
    bg: string
    head: string
    headphones: string
    smoke: string
  }
}
