import { Signer, providers } from 'ethers'
import { getContract, GetContractResult } from '@wagmi/core'
import {
  TokenABI,
  AuctionABI,
  GovernorABI,
  TreasuryABI,
  MetadataABI,
} from './abis'

import {
  TokenAddress,
  AuctionAddress,
  GovernorAddress,
  TreasuryAddress,
  MetadataAddress,
} from './addresses'

export type SDKOptions = {
  signerOrProvider: Signer | providers.Provider
}

export class MferBuilderSDK {
  static connect({ signerOrProvider }: SDKOptions) {
    const token = (): GetContractResult<typeof TokenABI> => {
      return getContract({
        address: TokenAddress,
        abi: TokenABI,
        signerOrProvider,
      })
    }

    const auction = (): GetContractResult<typeof AuctionABI> => {
      return getContract({
        address: AuctionAddress,
        abi: AuctionABI,
        signerOrProvider,
      })
    }

    const governor = (): GetContractResult<typeof GovernorABI> => {
      return getContract({
        address: GovernorAddress,
        abi: GovernorABI,
        signerOrProvider,
      })
    }

    const treasury = (): GetContractResult<typeof TreasuryABI> => {
      return getContract({
        address: TreasuryAddress,
        abi: TreasuryABI,
        signerOrProvider,
      })
    }

    const metadata = (): GetContractResult<typeof MetadataABI> => {
      return getContract({
        address: MetadataAddress,
        abi: MetadataABI,
        signerOrProvider,
      })
    }

    return {
      token,
      auction,
      governor,
      treasury,
      metadata,
    }
  }
}
