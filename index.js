const puppeteer = require("puppeteer");

try {
    (async () => {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        
        // Go to website
        await page.goto("https://www.walmart.com/ip/Microsoft-Xbox-One-S-1TB-All-Digital-Edition-Console-with-Xbox-One-Wireless-Controller-Renewed/604685632");

        // Add to cart
        await page.click('button.prod-ProductCTA--primary')
        await page.waitForSelector('.Cart-PACModal-ItemInfoContainer')

        // Checkout process
        await page.click('button.checkoutBtn')

        // Here we are checking out without an account
        
        await page.click('#new-guest-continue-button')

        
    
    })();
} catch (err) {
    console.log(err);
}