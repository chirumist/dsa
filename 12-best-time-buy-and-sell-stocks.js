(function(){
	/**
	 * @param {number[]} prices
	 * @return {number}
	 * prices = [7,1,5,3,6,4]
	 */
	var val = [7,1,5,3,6,4]
	var maxProfit = function (prices) {
		let min = prices[0]
		let maxProfit = 0
		for (var i = 1; i < prices.length; i++) {
			if(prices[i] < min) {
				min = prices[i]
			}
			if(maxProfit < (prices[i] - min)) {
				maxProfit = prices[i] - min
			}
		}
		return maxProfit
	}
	
	console.log(maxProfit(val))
})()