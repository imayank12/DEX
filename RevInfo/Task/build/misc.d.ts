import { BigNumber } from "@0x/utils";
import { SignedOrder } from "@0x/types";
import { SupportedProvider } from "@0x/web3-wrapper";
export { DummyERC20TokenContract as ERC20TokenContract } from "@0x/contracts-erc20";
export declare const FAKE_DAI = "0x48178164eB4769BB919414Adc980b659a634703E";
export declare const FAKE_USDC = "0x5a719Cf3E02c17c876F6d294aDb5CB7C6eB47e2F";
export declare const DEFAULT_MINT_AMOUNT: BigNumber;
export declare const INFINITE_ALLOWANCE: BigNumber;
export declare const IN_A_YEAR: BigNumber;
export declare const ZERO: BigNumber;
export declare const DEFAULT_GAS_PRICE: BigNumber;
export declare const KOVAN_0x_API = "https://kovan.api.0x.org";
export declare const INFURA_RPC_URL = "https://kovan.infura.io/v3/f98b693fe61e41ada1a82dab93a3a888";
export declare const MAP_TOKEN_TO_NAME: {
    [key: string]: string;
};
export interface MetamaskWindow {
    web3?: {
        currentProvider: SupportedProvider;
    };
    ethereum?: {
        enable(): Promise<[string]>;
        on(event: string, callback: () => void): void;
    };
}
interface GetSwapQuoteResponseLiquiditySource {
    name: string;
    proportion: BigNumber;
}
export interface GetSwapQuoteResponse {
    price: number;
    guaranteedPrice: number;
    to: string;
    data: string;
    gasPrice: number;
    protocolFee: number;
    orders: SignedOrder[];
    buyAmount: number;
    sellAmount: number;
    buyTokenAddress: string;
    sellTokenAddress: string;
    value: number;
    sources: GetSwapQuoteResponseLiquiditySource[];
    gas: number;
    from: string;
}
export interface ZeroExSwapAPIParams {
    buyToken: string;
    sellToken: string;
    sellAmount: string;
    takerAddress: string;
}
/**
 * Links the `onclick` event of a button denoted by ID to a callback
 * @param buttonId the button ID as a string, must be unique
 * @param callback a JS function callback that is triggered with the button is pressed
 */
export declare function linkBtnToCallback(buttonId: string, callback: (...args: any[]) => any): void;
/**
 * A simple utility to set text on to a ID
 * @param buttonId the button ID as a string, must be unique
 * @param text a string to set
 */
export declare function setTextOnDOMElement(buttonId: string, text: string): void;
/**
 * A simple utility that can be used to mint tokens. The dummy ERC20Token contract exposes a special
 * `mint()` function that can be used to create tokens out of thin air!
 *
 * @param fromAddress the address receiving the tokens
 * @param tokenAddress the address of the ERC20 token
 * @param provider the Web3 provider
 * @param mintAmount the amount to mint, this can be a maximum of 10,000
 */
export declare function mintTokens(fromAddress: string, tokenAddress: string, provider: SupportedProvider, mintAmount?: BigNumber): Promise<string>;
//# sourceMappingURL=misc.d.ts.map