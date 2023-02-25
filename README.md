# mferbuilderdao-sdk

> the `mferbuilderdao-sdk` is a TypeScript library that provides type safe interactions and data fetching for the mferbuilderDAO contracts.

_this is an mferbuilderDAO-scoped fork of the [builder-sdk](https://github.com/neokry/builder-sdk) by [neokry](https://github.com/neokry)._

## just getting started

add the package with your package manager of choice | [npm registry page](https://www.npmjs.com/package/mferbuilderdao-sdk)

```bash
yarn add mferbuilderdao-sdk

# or

npm install mferbuilderdao-sdk
```

## quick example

```ts
import { ethers } from 'ethers'
import { MferBuilderDAO } from 'mferbuilderdao-sdk'

// grab your Ethers provider of choice!
const provider = ethers.getDefaultProvider('mainnet')

// connect to the mferbuilderDAO SDK
const { auction, token } = MferBuilderDAO.connect({
  signerOrProvider: provider,
})

// access to the DAO's Auction and Token contracts
const auctionContract = auction()
const tokenContract = token()

// grab that data, mfer! all contract functions & events are available
const auctionData = await auctionContract.auction()
const tokenURI = await tokenContract.tokenURI(auctionData.tokenId)
```

## more examples

there are more in-depth examples in the `examples` folder:

- `with-react`
- `with-node`

## develop locally using the examples

install dependencies

```bash
yarn
```

### with React

setup the local environment and run the React app

```bash
yarn dev:react
```

### with Node

setup the local Node environment

```bash
yarn dev:node
```

navigate to the `with-node` example directory

```bash
cd examples/with-node
```

run the script!

```bash
yarn dev
```

### development workflow

you can edit the files in `package` directory then run the following command at the root of the project to have the changes reflect in the examples

```bash
yarn build
```
