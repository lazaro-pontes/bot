const puppeteer = require('puppeteer');
var readlineSync = require('readline-sync');

console.log("> robo que converte moeda")

async function robo() {
    const moedaBase = readlineSync.question('> qual a moeda base? ') || 'dolar';
    const moedaFinal = readlineSync.question('> qual a moeda final? ') || 'real';
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto(`https://www.google.com/search?sxsrf=ALeKk01C6pwPcv2ab3BYS4WCFWmd2_FT6A%3A1599936834458&ei=QhldX5nVG9675OUPufeVyAQ&q=${moedaBase}+para+${moedaFinal}&oq=dolar+para&gs_lcp=CgZwc3ktYWIQARgAMgoIABCxAxBGEIICMgIIADIFCAAQsQMyAggAMgIIADICCAAyBQgAELEDMgIIADICCAAyAggAOgQIABBHOgQIABBDUO2bwgFYhqXCAWD3s8IBaABwAXgAgAG6AYgB9AaSAQMwLjWYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab`);
    
    const result = await page.evaluate(() => {
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value
    });
    console.log(`> ${moedaBase} convertido em ${moedaFinal} é ${result}$`)


    await browser.close();
}

robo()