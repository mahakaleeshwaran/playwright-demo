// import{test,expect} from "@playwright/test"
//  test("myfirst",async({page})=>{
//   await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=815461303151&hvpos=&hvnetw=g&hvrand=10791620059027186514&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061895&hvtargid=kwd-10573980&hydadcr=14453_2462831&mcid=4c22dcdee2bf3a71b0b832c5c4ba9c17&hvocijid=10791620059027186514--&hvexpln=nav&gad_source=1")

// 


 
//   await expect(page).toHaveTitle("Amazon.in")
//  await expect(page).toHaveURL("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=815461303151&hvpos=&hvnetw=g&hvrand=10791620059027186514&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061895&hvtargid=kwd-10573980&hydadcr=14453_2462831&mcid=4c22dcdee2bf3a71b0b832c5c4ba9c17&hvocijid=10791620059027186514--&hvexpln=nav&gad_source=1")

// const title = await page.title()
// console.log(title);

// const url = await page.url()
// console.log(url);

// await page.waitForTimeout(5000)
// })


// import{test,expect} from "@playwright/test"
// test("myfirst",async({page})=>{
//     await page.goto("https://demoblaze.com/")
//     await page.locator('a[id="login2"]').click()
//     await page.locator('input[id="loginusername"]').fill("skill@123")
//     await page.locator('input[id="loginpassword"]').fill("skill@123")
//     await page.locator('//button[text()="Log in"]').click()
//     await expect(page.locator('a[id="nameofuser"]')).toHaveText("Welcome skill@123")

//     await page.waitForTimeout(5000)

// })

// import{test,expect} from "@playwright/test"
// test("myfirst",async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.locator('input[name="username"]').fill("Admin")
//     await page.locator('input[type="password"]').fill("admin123")
//     await page.locator('button[type="submit"]').click()


//     await page.waitForTimeout(7000)
// })


//  import{test,expect} from "@playwright/test"
// import { log } from "node:console"
// import { title } from "node:process"
//    test("myfirst",async({page})=>{
//    await page.goto("https://www.amazon.in/?tag=amazonitt15-21&gad_source=1")
//    const product = page.locator('li[class="nav-li"]')
//    await expect(product).toHaveCount(32)
   
//    const count = await product.count()
//     console.log(count);

//     const products = await product.all()

//     for(const item of products){
        
//      console.log(await item.textContent());   
//     }
//    })

// import{test,expect} from "@playwright/test"
//     test("myfirst",async({page})=>{
//        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//        const logo=await page.getByAltText("company-branding")
//         await expect(logo).toBeVisible()

//        await page.getByPlaceholder("Username").fill("Admin")
//        await page.getByPlaceholder("Password").fill("admin123")

//        await page.getByRole("Button",{type:"submit"}).click()

//        await expect(page.getByText("Test 12 test")).toBeVisible()
//     })

// import{test,expect} from "@playwright/test"
//     test("myfirst",async({page})=>{

//         await page.goto("https://testautomationpractice.blogspot.com/")

//         await page.locator("//input[@value=option2']").check()
//          await page.locator("//input[@value=option2']").tobeChecked()
//     })

// Datepicker

// import{test,expect}from "@playwright/test"
// test("datepicker",async({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     await page.locator('//input[@id="datepicker"]').click()

//     const date= '10'
//     const month='march'
//     const year='2030'

//     while(true){
//        const currentmonth = await page.locator('//span[@class="ui-datepicker-month"]').textContent()
//         const currentyear = await page.locator('//span[@class="ui-datepicker-year"]').textContent()
//         if(currentmonth == month && currentyear == year){
//             break
//         }
//         await page.locator('//a[@title="Next"]').click()
//     }
//     await page.locator(`//a[@class="ui-state-default"][text()=${date}]`).click()

//     await page.waitForTimeout(3000)
// })


//mouse
// import{test,expect}from "@playwright/test"
// test('mouse',async({page})=>{


// await page.goto('https://www.browserstack.com/')
// const product = await page.locator('//button[@id="products-dd-toggle"]')
// const webtesting = await page.locator('//span[text()="Web Testing"]')
// const mobile = await page.locator('//button[@id="products-dd-tab-3"]/span')
// const access = await page.locator('//span[text()="Accessibility"]')

// // await page.waitforTimeout(3000)

// await product.hover()
// await page.waitForTimeout(3000)

// await webtesting.hover()
// await page.waitForTimeout(3000)

// await mobile.hover()
// await page.waitForTimeout(3000)

// await access.hover()
// await page.waitForTimeout(3000)


// await page.locator('//span[text()="Linter"]').click()
// await page.waitForTimeout(3000)
// })


//right click

// import{test,expect}from "@playwright/test"
// test('button',async({page})=>{

//     await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
//    const button = await page.locator('//span[text()="right click me"]')
//     await button.click({button:"right"});

//     await page.waitForTimeout(3000)
// })


// simple alert
// import{test,expect}from "@playwright/test"
// test('alert',async({page})=>{
//  await page.goto("https://testautomationpractice.blogspot.com/")
//  page.on('dialog',async dialog=>{
//    expect(dialog.type()).toBe('alert')
//    expect(dialog.message()).toBe('I am an alert box!')
//    await dialog.accept()
//  })
// await page.locator('button[id="alertBtn"] ').click()
// })

// confirmation alert
// import{test,expect}from "@playwright/test"
// test('alert',async({page})=>{
//  await page.goto("https://testautomationpractice.blogspot.com/")
//  page.on('dialog',async dialog=>{
//    expect(dialog.type()).toBe('confirm')
//    expect(dialog.message()).toBe('Press a button!')
//    await dialog.dismiss()
//  })
// await page.locator('button[id="confirmBtn"]').click()
// await expect(page.locator('p[id="demo"]')).toHaveText('You pressed Cancel!')
// })

//prompt alert
// import{test,expect}from "@playwright/test"
// test('alert',async({page})=>{
//  await page.goto("https://testautomationpractice.blogspot.com/")
//  page.on('dialog',async dialog=>{
//    expect(dialog.type()).toBe('prompt')
//    expect(dialog.message()).toBe('Please enter your name:')
//    await dialog.accept('surya')
//  })
// await page.locator('button[id="promptBtn"]').click()
// await expect(page.locator('p[id="demo"]')).toContainText('Hello surya! How are you today?')
// })

//Tables

// import{test,expect}from"@playwright/test"
// test('table',async({page})=>{
// await page.goto("https://testautomationpractice.blogspot.com/")
// const row = await page.locator('//table[@id="taskTable"]//tbody//tr[td[text()="Chrome"]]')
//  const rowcount = await row.count();

//  for(let i=0; i<rowcount;i++){
//    const rowtext = await row.nth(i).locator("td").allTextContents();
// //  console.log("chrome :", await rowtext);

//  for (let j=0;j<rowtext.length;j++){
//    const values = await rowtext[j].trim()
//    if (values.includes("MB") &&!values.includes("MB/s")){
//       console.log("chrome:",values);
//       break;
//    }
//  }
//  }
// })



// Stack
// import{test,expect}from "@playwright/test"
//       test("trade",async({page})=>{
//          await page.goto("https://www.tradingview.com/screener/")
//         const row = await page.locator('//table[@class="table-NI7L99jP"]//tbody//tr[@data-rowkey="NASDAQ:NVDA"]')
//           const rowcount=await row.count()
         
//          for(let i=0;i<rowcount;i++){
//             const rowtext=await row.nth(i).innerText()
//             console.log("NVDA:",rowtext);
//          } 

//       })


// Datepickerdropdownspan
// import{test,expect}from "@playwright/test"
// test('Datedrop',async({page})=>{
//   await page.goto("https://testautomationpractice.blogspot.com/")
//   await page.locator('input[id="txtDate"]').click()
//   await page.locator('select[class="ui-datepicker-month"]').click()

//   const month= await page.locator('option[value="10"]').selectOption('Nov')
//   const year = await page.locator('option[value="2001"]').selectOption('2001')

//   await page.waitForTimeout(3000)
// })


// import{test,expect}from "@playwright/test"
// test('Datedrop',async({page})=>{
//   await page.goto("https://testautomationpractice.blogspot.com/")
//   await page.locator('input[id="datepicker"]').click()
//   const date ='29'
//   const month ='February'
//   const year ='2024'

//   while(true){
//   const currentmonth = await page.locator('.ui-datepicker-month').textContent()
//   const currentyear = await page.locator('.ui-datepicker-year').textContent()
//   if(currentmonth == month && currentyear == year){
//    break;
//   }
//   await page.locator('.ui-datepicker-prev').click()

// }
// await page.locator(`//a[@class="ui-state-default"][text()=${date}]`).click()
// await page.waitForTimeout(3000)
// })

// import{test,expect}from "@playwright/test"
//       test('Datedrop',async({page})=>{
//        await page.goto("https://testautomationpractice.blogspot.com/")
//        const first = await page.locator('//div[@id="slider-range"]//span[@style="left: 15%;"]')
//        const firstmove = await page.locator('//div[@id="slider-range"]//span[@style="left: 30%;"]')

//        const second = await page.locator('//div[@id="slider-range"]//span[@style="left: 60%;"]')
//        const secondmove = await page.locator('//div[@id="slider-range"]//span[@style="left: 80%;"]')

//         // await first.hover()
//         // await page.mouse.down()
//         // await firstmove.hover()
//         //  await page.mouse.up()
//        await first.dragTo(firstmove)
//         await second.dragTo(secondmove)

//        await page.waitForTimeout(3000)

//       })

// //Drag and drop
//       import{test,expect}from "@playwright/test"
//       test('Datedrop',async({page})=>{
//        await page.goto("https://testautomationpractice.blogspot.com/")
//        const first = await page.locator('div[id="draggable"]')
//        const second = await page.locator('div[id="droppable"]')

//        await first.dragTo(second)
//        await page.waitForTimeout(3000)
//       })


//doubleclick
import{test,expect}from "@playwright/test"
       test('Datedrop',async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/")
        const run = await page.locator('button[ondblclick="myFunction1()"]')
        await run.dblclick()
        await page.waitForTimeout(2000)
  
       })


//  import{test,expect}from "@playwright/test"
//       test('Datedrop',async({page})=>{
//         await page.goto("https://testautomationpractice.blogspot.com/")

//      const filein = await page.locator('input[type="file"][multiple]')
//      await filein.scrollIntoViewIfNeeded();
//   const expectedFiles = await filein.setInputFiles(["C:/Users/kalee/Downloads/MahakaleeshwaranA_InternshalaResume.pdf","C:/Users/kalee/Downloads/MAHAKALEESHWARAN_SDET_Playwright.pdf"]);
   
//       const uploadedFiles = await filein.evaluate((input) => {
//       return Array.from(input.files || []).map(file => file.name);
//         });

//          expect(uploadedFiles).toEqual([ "MahakaleeshwaranA_InternshalaResume.pdf","MAHAKALEESHWARAN_SDET_Playwright.pdf"
//           ]);
//          console.log("Uploaded files:", uploadedFiles);
//           console.log("Files uploaded successfully and matched!");

//          await page.waitForTimeout(3000)
//       })

//screenshot

// import {test,expect}from "@playwright/test"
// test('screenshot',async({page})=>{
// await page.goto('https://testautomationpractice.blogspot.com/')
// // await expect(page.locator('input[placeholder="Enter Name"]').toHaveText('surya'))
// // await page.screenshot({path:'/Users/kalee/OneDrive/Desktop/Playwright/screenshots'+Date.now()+'fullpage.png',fullpage:true})
// await page.screenshot({path:'/Users/kalee/OneDrive/Desktop/Playwright/screenshots'+Date.now()+'Element.png'})



// await page.waitForTimeout(3000)
// })


// const {expect}= require('@playwright/test');
// class loginPage{
//      constructor (page){
//         this.page=page;
        
//         this.username = page.locator('input[name="username"]');
//         this.password = page.locator('input[name="password"]');
//         this.loginButton = page.locator('Button[type="submit"]')
//     }
//     async openLoginpage(){
//         await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     }
//     async login(user,pass){
//         await this.username.fill(user);
//         await this.password.fill(pass);
//         await this.loginpageButton
//     }
// }
