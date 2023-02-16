//my wallet is a simple ether wallet
//deploy this smart contract today!

var mywalletContract = new web3.eth.Contract([{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]);
var mywallet = mywalletContract.deploy({
     data: '0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610368806100606000396000f3fe6080604052600436106100385760003560e01c806312065fe0146100445780632e1a7d4d1461006f5780638da5cb5b146100985761003f565b3661003f57005b600080fd5b34801561005057600080fd5b506100596100c3565b60405161006691906101e0565b60405180910390f35b34801561007b57600080fd5b506100966004803603810190610091919061022c565b6100cb565b005b3480156100a457600080fd5b506100ad6101a3565b6040516100ba919061029a565b60405180910390f35b600047905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610159576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015090610312565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561019f573d6000803e3d6000fd5b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000819050919050565b6101da816101c7565b82525050565b60006020820190506101f560008301846101d1565b92915050565b600080fd5b610209816101c7565b811461021457600080fd5b50565b60008135905061022681610200565b92915050565b600060208284031215610242576102416101fb565b5b600061025084828501610217565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061028482610259565b9050919050565b61029481610279565b82525050565b60006020820190506102af600083018461028b565b92915050565b600082825260208201905092915050565b7f596f7520617265206e6f7420746865206f776e65720000000000000000000000600082015250565b60006102fc6015836102b5565b9150610307826102c6565b602082019050919050565b6000602082019050818103600083015261032b816102ef565b905091905056fea2646970667358221220a0aa881681d83c3bddbb538bb490eb8db1cb0a15c7d9a379575ad039da57e24a64736f6c63430008110033', 
     arguments: [
     ]
}).send({
     from: web3.eth.accounts[0], 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
