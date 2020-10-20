
var customerDetails = { 
    cif:"12345",
   customerCategory:["EMPLOYEE","WEALTH"], 
    usedCodes:
      [
      {
          codeType:"P",
          codeName:"KOTAKFIRST",
          usedCount:"1"
      },
      {
          codeType:"D",
          codeName:"STUDENT",
          usedCount:"2"
      }
      ]              
}

var transactionDetails={
  requestID:"1",
  transDate:"01-05-2020",
  transTypeCode:"SVC-R",
  currency:"USD",
  amount:"1500",
  promoCode:"KOTAKFIRST",
  channel: "PORTAL",
  rate:"77.31",
  ibr:"75.31",
  cardRate:"77.31",
  perUnit:"1",
  codeName:"STUDENT",
  buySellSign:"-1",
  orgCharges:"100",
  lcyAmount:"115965"
  }

var selectedOfferCode={
  codeType:"D",
  validFor:"RC",
  codeName:"STUDENT",
 channel: "PORTAL",
 customerCategory:["EMPLOYEE","WEALTH"],
  description:"DISCOUNT FOR EDUCATIONAL SEASON- CHARGES Rs 100 OFF, 50 PAISE DISCOUNT ON CARD RATE",
  startDateTime:"01-04-2020 00:00:00",
  endDateTime:"01-07-2020 00:00:00",
  minMaxAmountType:"LCY",
  minimumLCYAmount:"115964",
  maximumLCYAmount:"115966",
  minAmount:"115961",
  maxAmount:"115969",
  minimumINRAmount:"1000",
  maximumINRAmount:"1000000",
  maximumTotalUsage:"100000",
  maximumUsagePerCustomer:"1",
  rateApplyType:"GBL",
  applicableRateMargin:"50",
  chargesDiscount: {
          chargeDiscountType:"F",
          chargeDiscount:"100"
  },
  rateDiscount: {
      rateDiscountType:"F",
          rateDiscountOn:"IBR",
          rateDiscountOrMargin:"50"
      },
      termsFilter:{
          channel:["branch","mobile"],
          transTypeCode:["CN-SALE","SVC-S","SVC-R","TT-SALE","DD-SALE"],
          customerCategory:["STUDENT","WEALTH"],
          currency: [
              {
                  currCode:"USD",
                  minAmount:"",
                  maxAmount:"",
                  discount:""
              },
              {
                  currCode:"EUR",
                  minAmount:"",
                  maxAmount:"",
                  discount:""
              },
              {
                  currCode:"GBP",
                  minAmount:"",
                  maxAmount:"",
                  discount:""
              }
          ]
      }
}

 var x = function isCodeApplicable(one,two,three){
  var resp = {}
  var currentDate = new Date(two.transDate)
  var minDate = new Date(three.startDateTime)
  var maxDate = new Date(three.endDateTime)

  
    if(two.channel in two == three.channel in three)
      {
        if(two.transTypeCode in two == three.transTypeCode in three)
        {
            if(one.customerCategory in one == three.customerCategory in three)
            {
                if(two.currency in two == three.termsFilter.currency[0].currCode in three)
              {  
                if(three.minMaxAmountType == "LCY"  && three.minimumLCYAmount <= two.lcyAmount <= three.maximumLCYAmount)
                {

                    if((three.minMaxAmountType == "FCY"  && three.minAmount <= two.lcyAmount) <= three.maxAmount)
                    {
                        if(currentDate>minDate&&currentDate<maxDate)
                        {
                            if(one.usedCodes[0].usedCount == three.maximumUsagePerCustomer )
                            {
                                resp.requestID = two.requestID
                                resp.codeType = three.codeType
                                resp.validFor = three.validFor
                                resp.codeName = three.codeName
                                resp.applicable = 'N'
                                resp.message = '""'
                             }}}}}}}}
            //                 }
            //                 else{
            //                     resp.requestID = two.requestID 
            //                     resp.codeType = three.codeType
            //                     resp.validFor = three.validFor
            //                     resp.codeName = three.codeame
            //                     resp.applicable = 'N'
            //                     resp.message = 'Customer has already used  maximim no of usages  (selectedOfferCode.maximumUsagePerCustomer) available for offer code <selectedOfferCode.codeName>"}'
            //                 }
            //             }
            //                 else {
            //                     resp.requestID = two.requestID 
            //                     resp.codeType = three.codeType
            //                     resp.validFor = three.validFor
            //                     resp.codeName = three.codeame
            //                     resp.applicable = 'N'
            //                     resp.message = 'Transaction Date 1/03/2020 is Not Within Range Student Range is form 01-05-2020 00:00:00 to 01-07-2020 00:00:00 '
            //                   }
            //                 }
            //                   else{
            //                     resp.requestID = two.requestID 
            //                     resp.codeType = three.codeType
            //                     resp.validFor = three.validFor
            //                     resp.codeName = three.codeame
            //                     resp.applicable = 'N'
            //                     resp.message = 'FCY Amount'
            //                 }
            //             }
            //             else{
            //                 resp.requestID = two.requestID 
            //                 resp.codeType = three.codeType
            //                 resp.validFor = three.validFor
            //                 resp.codeName = three.codeame
            //                 resp.applicable = 'N'
            //                 resp.message = 'LCY Amount 115965 is Not with in Range STUDENT Range is form 1000'
            //             }
            //         }
            //         else {
            //             resp.requestID = two.requestID 
            //             resp.codeType = three.codeType
            //             resp.validFor = three.validFor
            //             resp.codeName = three.codeame
            //             resp.applicable = 'N'
            //             resp.message = 'Customer Category "["EMPLOYEE","WEALTH"]" is Not Applicable Student Available Customer Categories'

            //         }
            //     }
            //     else {
            //         resp.requestID = two.requestID 
            //         resp.codeType = three.codeType
            //         resp.validFor = three.validFor
            //         resp.codeName = three.codeName
            //         resp.applicable = 'N'
            //         resp.message = 'Customer Category ["EMPLOYEE","WEALTH"]" is Not Applicable Student Available Customer categories'
            //         }
            //     }
            //     else {
            //         resp.requestID = two.requestID 
            //         resp.codeType = three.codeType
            //         resp.validFor = three.validFor
            //         resp.codeName = three.codeName
            //         resp.applicable = 'N'
            //         resp.message = 'Transaction Type SVC-R is not Applicable for STUDENT, Available Transaction Types "["CN-SALE","SVC-S","TT-SALE","DD-SALE"]'
            //     }
            // }
            // else {
            //     resp.requestID = two.requestID 
            //     resp.codeType = three.codeType
            //     resp.validFor = three.validFor
            //     resp.codeName = three.codeName
            //     resp.applicable = 'N'
            //     resp.message = "Channel 'PORTAL' is Not Applicable for STUDENT,  Aviailable Channels ['branch','mobile']"
            // }

            return resp
        }
console.log(x(customerDetails,transactionDetails,selectedOfferCode))
module.exports = {
    first_case: x,
    one: customerDetails,
    two : transactionDetails,
    three: selectedOfferCode,
    
} 
  
                             






















        
         
      
      
      
   



    
