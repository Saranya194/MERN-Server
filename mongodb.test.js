const mongoose = require('mongoose');
describe('MongoDB connected',()=>{
    beforeAll(async()=>{
        const url='mongodb+srv://Saranyadurga09:22761A05A9@cluster0.lbbkbek.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        await mongoose.connect(url)
    });
    test('MongoDB connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1);
    })
})
