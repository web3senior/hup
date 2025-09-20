import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { lukso, luksoTestnet, defineChain } from '@reown/appkit/networks'

// Get projectId from https://dashboard.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || `1babf4525ab37ef01c97aec81b4cdc35`

if (!projectId) throw new Error('Project ID is not defined')

// Define the custom network
export const somniaNetwork = defineChain({
  id: 50312,
  caipNetworkId: 'eip155:50312',
  chainNamespace: 'eip155',
  name: 'Somnia Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: 'https://dream-rpc.somnia.network',
  blockExplorers: {
    default: { name: 'Explorer', url: 'shannon-explorer.somnia.network' },
  },
  contracts: {
    // Add the contracts here
  },
})

export const networks = [somniaNetwork]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  ssr: true,
  projectId,
  networks,
})

export const config = wagmiAdapter.wagmiConfig
