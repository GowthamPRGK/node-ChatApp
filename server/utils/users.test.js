const expect  = require('expect');
const {Users} = require('./users');

describe('Users',()=>{

    var users;
    beforeEach(()=>{
        users = new Users();
        users.users = [{
            id:'1',
            name:'Gowtham',
            room:'A'
        },{
            id:'2',
            name:'Darshan',
            room:'A'
        },{
            id:'3',
            name:'Boopathi',
            room:'B'
        }]
    });

    it('should add new user',()=>{
        var users = new Users();
        var user = {
            id: '123abc',
            name: 'Gowtham',
            room: 'A'
        };
        var resUser = users.addUser(user.id,user.name,user.room);
        expect(users.users).toEqual([user]);

    });

    it('should remove the user',()=>{
        var user =users.removeUser('2');
        expect(user).toInclude({id:'2',name:'Darshan',room:'A'});
        expect(users.users.length).toBe(2);
    });

    it('should not remove the user for invalid id',()=>{
        var user = users.removeUser('5');
        expect(users.users.length).toBe(3);
    });

    it('should find the user',()=>{
        var user = users.getUser('2');
        expect(user).toInclude(users.users[1]);
    });

    it('should not find the user',()=>{
        var user = users.getUser('7');
        expect(user.length).toBe(0);
    });

    it('should return the name for A',()=>{
        var userList = users.getUserList('A');
        expect(userList).toEqual(['Gowtham','Darshan']);
        
    });

    it('should return the name for B',()=>{
        var userList = users.getUserList('B');
        expect(userList).toEqual(['Boopathi']);
    });

});