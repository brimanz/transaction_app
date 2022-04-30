require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/YyKVWuueHQYLkqnoipPAmO6nXALA_iVc',
      accounts: ['8dd2f14b736a386ba606736238c3394109cdf3aaceebeba13425918a8790b470']
    }
  }
}