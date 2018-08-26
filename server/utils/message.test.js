var expect = require('expect');
var {generateMessage}=require('./message')
describe('generateMessage',()=>{
    it('Should generate correct message',()=>{
        var from="gowtham@gmail.com";
        var text="testing";
        var res = generateMessage(from,text);
        expect(res).toInclude({from,text});
        expect(res.creadtedAt).toBeA('number');
    });
});