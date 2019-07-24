var DappToken = artifacts.require ("./DappToken.sol");
contract('DappToken', function(accounts){

	it('sets the total supply upon deployment', function(){
		return DappToken.deployed().then(function(instance){
			tokeninstance=instance;
			return tokeninstance.totalsupply();
		}).then(function(totalsupply){

				assert.equal(totalsupply.toNumber(),0,'sets the total supply to 1,000,000');
			});

	});
})