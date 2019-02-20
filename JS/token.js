class TokenContract {
	constructor(owner) {
		this.owner = owner;
		this.balances = {};
		this.setName = function(name) {
			this.name = name;
		}
		this.setSymbol = function(symbol) {
			this.symbol = symbol;
		}
		this.setTotalSupply = function(totalSupply) {
			this.totalSupply = totalSupply;
		}
		this.info = function() {
			console.log("name = ", this.name);
			console.log("symbol = ", this.symbol);
			console.log("totalSupply = ", this.totalSupply);
			console.log("owner PK = ", this.owner.pk);
		}
		this.addOwner = function(pk, tokens) {
			this.balances[pk] = tokens;
		}
	}
}