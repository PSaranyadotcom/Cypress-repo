describe("handling tables",()=>{
    // it("this test is for handling table",()=>{
    //      cy.visit('https://demoapps.qspiders.com/ui/table?scenario=1')
    //      cy.get('table[class="w-full text-sm text-left text-gray-500 "] tbody tr').should("have.length",4)
    //      cy.get('table[class="w-full text-sm text-left text-gray-500 "] thead tr th').should("have.length",5)
    //       cy.get('table[class="w-full text-sm text-left text-gray-500 "] thead tr:nth-child(1) th:nth-child(2').should("have.text","Rating")
    //        cy.get('table[class="w-full text-sm text-left text-gray-500 "] tbody tr').each(($row, index, $rows)=>{
    //         cy.wrap($row).within(()=>{
    //             cy.get("td").each(($col, index, $cols)=>{
    //                 cy.log($col.text())

    //             })

    //         })
    //        })
               it.only("pagenations",()=>{

cy.visit("https://demoapps.qspiders.com/ui/table/tablePagination")
// if we watnt to get the total number of tables present inside the page suppose the text present inside the page is like this (showing 1 to 10 of (559 pages)) then we can do in the 
// following way
//cy.get(".clo-sm-6.text-end").then((e)=>{

    //let mytext=e.text()
    //totalpages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("pages")-1)
    //})
//cy,log("total number of pages", +totalpages)
let totalpages=3
for(let p=1;p<=totalpages;p++){
if(totalpages>1){
    cy.log("active page",+p)
    cy.get('div.mt-4.flex.justify-center ul.flex.space-x-2 li:nth-child('+p+')').click({force:true})
  

    cy.wait(3000)
      cy.get('table[class="w-full text-sm text-left text-gray-500 "] tbody tr').each(($el,index,$rows)=>{
cy.wrap($el).within(()=>{

cy.get("td:nth-child(3)").then((e)=>{
   cy.log( e.text())
})
})
      })
}
}
 
               })

            })
        