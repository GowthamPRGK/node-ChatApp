var generateMessage = (from,text)=>{
    return {
        from,
        text,
        creadtedAt: new Date().getTime()
    }
};

module.exports = {generateMessage};