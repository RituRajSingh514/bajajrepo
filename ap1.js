const axios = require('axios');

async function createInvestmentAccount() {
    const url = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount';
    const headers = {
        'Content-Type': 'application/json'
    };
    const body = {
        name: 'Your Full Name',
        email: 'your_colle@example.com',
        rollNumber: 'YourRollNumber', 
        phone: 'YourPhoneNumber' 
    };

    try {
        const response = await axios.post(url, body, { headers });
        const accountData = response.data;
        const accountNumber = accountData.accountNumber;
        console.log(`Virtual investment account created. Account number: ${accountNumber}`);
        return accountNumber;
    } catch (error) {
        console.error('Error creating account. Check your input data or API response.');
    }
}
