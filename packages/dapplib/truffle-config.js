require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember exchange hope knife fresh skate'; 
let testAccounts = [
"0xa802c59d90fb0e904fd092299d8da52180ebd98be94c1d4454f2ba38758cea37",
"0x80aa33bf601511924aaa862f1d1606d0369a7ccac665181ed9a4bc928db0ee16",
"0xc3113cc66ec569381176415abfc0058ede2d78c6ed7ef23b66f2ebcd899b4e2a",
"0x6399595c95a4fda81bd75ec6b95d8af903a5ab0e93e5c94419731c976c7f3b89",
"0xb12808a528010392ed818fc39aab35022e251120b5b1a8c3069fb21a333428e3",
"0x697a43e8ade269b5fe6b7404d9a76bebda778546ea0050a0db8a2c842d6c8ac9",
"0xc2f23f1f0d6d8960def5c2c4232aa3db14975ed5eccdf3d37e514a38611aabb5",
"0x081000407dacee83a85d43e4d922e54febbe489d113e0e153c3b3bed09b672f5",
"0xb69b6db169e68a5da38145a2c43fab657254255b2b0bb10c04d4994a14da367c",
"0x9c85fae57ea6e8c355e95463370c23a9268069cf20ff70e939f8cf03d00feb0b"
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

