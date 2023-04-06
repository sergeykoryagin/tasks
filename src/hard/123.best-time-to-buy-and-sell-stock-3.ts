function maxProfit(prices: number[]): number {
    let buy1 = -prices[0];
    let sell1 = 0;
    let buy2 = -prices[0];
    let sell2 = 0;

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];
        buy1 = Math.max(buy1, -price);
        sell1 = Math.max(sell1, buy1 + price);

        buy2 = Math.max(buy2, sell1 - price);
        sell2 = Math.max(sell2, buy2 + price);
    }

    return Math.max(sell1, sell2);
}

const showResult = (prices: number[]) => {
    console.log(prices);
    console.log(maxProfit(prices), '\n');
};

showResult([3, 3, 5, 0, 0, 3, 1, 4]);
showResult([1, 2, 3, 4, 5]);
showResult([7, 6, 4, 3, 1]);
