# mferbuilder-SDK

> the easiest way to build on [mferbuilderDAO](https://mferbuilderdao.org)

the `mferbuilder-SDK` is a Typescript library that provides type safe interactions and data fetching for the mferbuilderDAO contracts.

## getting started

```bash
yarn add mferbuilder-sdk
```

## quick example

```ts
import { MferBuilderSDK } from 'mferbuilder-sdk'

const { auction, token } = MferBuilderSDK.connect({
  signerOrProvider: your_provider_here,
})

const auctionContract = auction()
const tokenContract = token()

const auctionData = await auctionContract.auction()
const tokenURI = await tokenContract.tokenURI(auctionData.tokenId)
```

## more examples

there are more in-depth examples in the `examples` folder:

- `with-node`
- `with-react`

## run the clientside example

install dependencies

```bash
yarn
```

navigate to the `with-react` example directory

```bash
cd examples/with-react
```

install the dependencies

```bash
yarn
```

run the local server

```bash
yarn dev
```

**you can use the same steps as above to run the `node-example`.*

## local development
to make changes to the `mferbuilder-sdk`, you can edit the files in `package` directory.

***important!***  
> run `yarn sdk:build` after saving files in `package` to reflect the changes for the apps in `examples`.
