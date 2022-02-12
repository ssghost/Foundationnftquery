import { BigInt } from "@graphprotocol/graph-ts"
import {
  Token,
  Approval,
  ApprovalForAll,
  BaseURIUpdated,
  Minted,
  NFTCreatorMigrated,
  NFTMarketUpdated,
  NFTMetadataUpdated,
  NFTOwnerMigrated,
  PaymentAddressMigrated,
  ProxyCallContractUpdated,
  TokenCreatorPaymentAddressSet,
  TokenCreatorUpdated,
  TokenIPFSPathUpdated,
  Transfer
} from "../generated/Token/Token"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.approved = event.params.approved

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.balanceOf(...)
  // - contract.baseURI(...)
  // - contract.getApproved(...)
  // - contract.getFeeBps(...)
  // - contract.getFeeRecipients(...)
  // - contract.getFoundationTreasury(...)
  // - contract.getHasCreatorMintedIPFSHash(...)
  // - contract.getNFTMarket(...)
  // - contract.getNextTokenId(...)
  // - contract.getRoyalties(...)
  // - contract.getTokenCreatorPaymentAddress(...)
  // - contract.getTokenIPFSPath(...)
  // - contract.isApprovedForAll(...)
  // - contract.mint(...)
  // - contract.mintAndApproveMarket(...)
  // - contract.mintWithCreatorPaymentAddress(...)
  // - contract.mintWithCreatorPaymentAddressAndApproveMarket(...)
  // - contract.mintWithCreatorPaymentFactory(...)
  // - contract.mintWithCreatorPaymentFactoryAndApproveMarket(...)
  // - contract.name(...)
  // - contract.ownerOf(...)
  // - contract.proxyCallAddress(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenByIndex(...)
  // - contract.tokenCreator(...)
  // - contract.tokenOfOwnerByIndex(...)
  // - contract.tokenURI(...)
  // - contract.totalSupply(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleBaseURIUpdated(event: BaseURIUpdated): void {}

export function handleMinted(event: Minted): void {}

export function handleNFTCreatorMigrated(event: NFTCreatorMigrated): void {}

export function handleNFTMarketUpdated(event: NFTMarketUpdated): void {}

export function handleNFTMetadataUpdated(event: NFTMetadataUpdated): void {}

export function handleNFTOwnerMigrated(event: NFTOwnerMigrated): void {}

export function handlePaymentAddressMigrated(
  event: PaymentAddressMigrated
): void {}

export function handleProxyCallContractUpdated(
  event: ProxyCallContractUpdated
): void {}

export function handleTokenCreatorPaymentAddressSet(
  event: TokenCreatorPaymentAddressSet
): void {}

export function handleTokenCreatorUpdated(event: TokenCreatorUpdated): void {}

export function handleTokenIPFSPathUpdated(event: TokenIPFSPathUpdated): void {}

export function handleTransfer(event: Transfer): void {}
