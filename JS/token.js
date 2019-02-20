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
		this.numOwners = function() {
			console.log("Numero de propietarios:", Object.keys(this.balances).length);
		}
		this.balanceOf = function(owner) {
			console.log("Entradas de", owner + ":", this.balances[owner], this.symbol)
		}
		this.transfer = function(recipient, tokens) {
			if (this.balances[this.owner.pk] < tokens) {
				console.log("Rick no tiene", tokens, "entradas => entradas de Morty:", this.balances[recipient], this.symbol)
			} else {
				this.balances[this.owner.pk] -= tokens;
				this.balances[recipient] += tokens;
			}
		}
	}
}

module.exports = TokenContract;