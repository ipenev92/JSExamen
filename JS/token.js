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
	}
}