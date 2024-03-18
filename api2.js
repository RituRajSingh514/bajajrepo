const axios = require('axios');
async function buyStocks(accountNumber) {
    const url = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks';
    const headers = {
        'content-type': 'application/json',
        'bfhl-auth': 'YourRollNumber' 
    };
    const companyName = 'Bajaj Finserv';
    const currentStockPrice = 1598.80; 

    const body = {
        company: companyName,
        currentPrice: currentStockPrice,
        accountNumber: accountNumber
    };

    try {
        const response = await axios.post(url, body, { headers });
        console.log(`Successfully bought ${companyName} stocks for account ${accountNumber}.`);
    } catch (error) {
        console.error('Error buying stocks. Check your input data or API response.');
    }
}

(async () => {
    const accountNum = await createInvestmentAccount();
    await buyStocks(accountNum);
})();
