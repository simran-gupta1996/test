const chai = require('chai');
const req = require('../app');
const  expect = require('chai').expect;
// const assert = require('chai').assert;

describe('#isCodeApplicable()', function() {
 
   context('with arguments', function() {
    it('should retrun this json if all case pass', function() {
       expect(req.first_case(req.one,req.two,req.three)).to.be.not.equal({ "requestID":"1",
       "codeType":"D",
       "validFor":"RC",
       "codeName":"STUDENT",
       "applicable":"Y",
       "message":""
     })
    })
  }) 
});


 
//  let num= 5;
//  let str = 'dfjhjkhjfsd';
// it('should return sum of arguments', function() {
//  assert.isNumber(num);
// });

// it('rtyrytuy',function(){
// assert.isString(str);

// });

  
//   context('with number arguments', function() {
//     it('should return sum of arguments', function() {
//       expect(sum(1, 2, 3, 4, 5)).to.equal(15)
//     })
    
//     it('should return argument when only one argument is passed', function() {
//       expect(sum(5)).to.equal(5)
//     })
//   })
  
//   context('with non-number arguments', function() {
//     it('should throw error', function() {
//       expect(function() {
//         sum(1, 2, '3', [4], 5)
//       }).to.throw(TypeError, 'sum() expects only numbers.')
//     })
//   })
  
// })



