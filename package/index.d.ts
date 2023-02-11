import { Signer, providers } from 'ethers'
import { GetContractResult } from '@wagmi/core'
import {
  TokenABI,
  AuctionABI,
  GovernorABI,
  TreasuryABI,
  MetadataABI,
} from './abis'

export const TokenABI: any
export const AuctionABI: any
export const GovernorABI: any
export const TreasuryABI: any
export const MetadataABI: any

export const TokenAddress: string
export const AuctionAddress: string
export const GovernorAddress: string
export const TreasuryAddress: string
export const MetadataAddress: string

export type SDKOptions = {
  signerOrProvider: Signer | providers.Provider
}

export class MferBuilderDAO {
  static connect({ signerOrProvider }: SDKOptions): {
    token: () => GetContractResult<typeof TokenABI>
    auction: () => GetContractResult<typeof AuctionABI>
    governor: () => GetContractResult<typeof GovernorABI>
    treasury: () => GetContractResult<typeof TreasuryABI>
    metadata: () => GetContractResult<typeof MetadataABI>
  }
}
