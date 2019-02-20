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
		this.transferFrom = function(sender, recipient, tokens) {
			if (this.balances[sender] < tokens) {
				console.log('error');
			} else {
				this.balances[sender] -= tokens;
				this.balances[recipient] += tokens;
			}
		}
		this.owners = function() {
			for (let key in this.balances) {
				if (this.balances[key] !== this.owner.pk) {
				console.log("Owner: " + key, this.balances[key], this.symbol)
				}
			}
		}
		this.totalTokensSold = function() {
			console.log("Total de asistentes: ", this.totalSupply - (this.balances[this.owner.pk]));
		}
		this.payable = function(recipient, ezi) {
			let tickets = ezi / 5;
			if (ezi / 5 < 1) {
				console.log("Morty no paga suficientes EZI por una entrada" + "\n => sigue teniendo 5 entradas: ")
			} else {
				this.balances[recipient] += tickets;
				this.balances[this.owner.pk] -= tickets;
				this.owner.balance += 10;
			}
		}
	}
}

module.exports = TokenContract;