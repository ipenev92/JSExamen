class Address {
	constructor() {
		this.pk = generateKey(1000000, 9999999);
		this.sk = generateKey(1000000, 9999999);
		this.balance = 0;
		this.symbol = "EZI";
		this.addEZI = function(ezi) {
			this.balance += ezi;
			console.log("Balance increased by", ezi, "new balance:", this.balance);
		}
		this.info = function() {
			console.log("PK = ", this.pk);
			console.log("Balance = ", this.balance, "EZI");
		}
		this.send = function(contract, ezi) {
			contract.payable(this.pk, ezi);
			this.balance -= ezi;
		}
	}
}

const generateKey = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

module.exports = Address;