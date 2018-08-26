var expect = require('expect');
var {generateMessage,generateLocationMessage}=require('./message')
describe('generateMessage',()=>{
    it('Should generate correct message',()=>{
        var from="gowtham@gmail.com";
        var text="testing";
        var res = generateMessage(from,text);
        expect(res).toInclude({from,text});
        expect(res.creadtedAt).toBeA('number');
    });
});

describe('genarateLocationMessage',()=>{
    it('should generate correct location url',()=>{
        var from='Admin';
        var lat = 1;
        var long = 1;
        var res = generateLocationMessage(from,lat,long);
        expect(res.from).toBe(from);
        expect(res.url).toBe(`https://www.google.com/maps?q=${lat},${long}`);
    });
});