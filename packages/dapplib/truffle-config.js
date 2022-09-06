require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space strong cruise office pulp hockey knife fortune student'; 
let testAccounts = [
"0x08829b9df3cec1c8df41cc086f0dc3d35d5178073099d618fbc3d165973f418f",
"0x9d5582fff3eb365a9a91a38812da2fb8e8cf5fe62fdd7dd3c321f80d70583a34",
"0x1fd578dd1ef0b130dea61d22a98f3aaf77b2ce705de00d129098e5f2781eb5d7",
"0xf54addd6f1994f385819e14103211e2fc8db248180792a8719d778df5957c0ad",
"0xe35fe7217c195bc13c0a3abfd6e176db490fab5872c677dad09919a918b4df5a",
"0xbf36e7c3be3896f3cbe00b953460bb55b8cd23416ffc057af1712404a2047206",
"0x44557372aa50b9d0226d33bfe4c583d7af9eb96a7dcd2fb2a0b3037d5a632c2a",
"0x8ad74719d7ab9e0979a9fa0d6d08271d9b9f5dec10bb4f68c4cd1cc80952f833",
"0x7ea8b3df80158a29886a490ec19c895de917388a9c0d0423a81581a35b794f8f",
"0x82a519dc7653e3555de510d296f72b0fd3784a35779b6974cac0c56648b126e3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

