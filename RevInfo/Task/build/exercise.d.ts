import { SupportedProvider } from "@0x/web3-wrapper";
import { ERC20TokenContract } from "./misc";
/**
 * Performs a trade by requesting a quote from the 0x API, and filling that quote on the blockchain
 * @param buyToken the token address to buy
 * @param sellToken the token address to sell
 * @param amountToSellUnitAmount the token amount to sell
 * @param fromAddress the address that will perform the transaction
 * @param client the Web3Wrapper client
 */
export declare function performSwapAsync(buyTokenWrapper: ERC20TokenContract, sellTokenWrapper: ERC20TokenContract, amountToSellUnitAmount: number, fromAddress: string, provider: SupportedProvider): Promise<void>;
//# sourceMappingURL=exercise.d.ts.map