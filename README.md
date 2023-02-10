# mferbuilderdao-sdk

> the `mferbuilderdao-sdk` is a TypeScript library that provides type safe interactions and data fetching for the mferbuilderDAO contracts.

_this is an mferbuilderDAO-scoped fork of the [builder-sdk](https://github.com/neokry/builder-sdk) by [neokry](https://github.com/neokry)._

## getting started

add the package with your package manager of choice | [npm registry page](https://www.npmjs.com/package/mferbuilderdao-sdk)

```bash
yarn add mferbuilderdao-sdk

# or

npm install mferbuilderdao-sdk
```

## quick example

```ts
import { MferBuilderDAO } from 'mferbuilderdao-sdk'

const { auction, token } = MferBuilderDAO.connect({
  signerOrProvider: your_provider_here,
})

const auctionContract = auction()
const tokenContract = token()

const auctionData = await auctionContract.auction()
const tokenURI = await tokenContract.tokenURI(auctionData.tokenId)
```

## more examples

there are more in-depth examples in the `examples` folder:

- `with-react`
- `with-node`

## run the React client example

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

\*_you can use the same steps as above to run the `node-example`._

## local development

to make changes to the `mferbuilderdao-sdk`, you can edit the files in `package` directory.

**_important!_**

> run `yarn build` in the `package` directory after updating files to reflect the changes in the `examples`.
