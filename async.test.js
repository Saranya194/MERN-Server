const {fetchData,Mydata} =require('./test/async');

test('Callback Data',done=>{
    function callback(data){
        try{
            expect(data).toBe('admin');
            done();
        }catch(error){
            done(error);
        }
    }
    fetchData(callback);

})

test('Callback My Data',done=>{
    function callback(data){
        try{
            expect(data).toEqual({id:10001});
            done();
        }catch(error){
            done(error);
        }
    }
    Mydata(callback);

})

//mock function
test('Mocking callback function',done=>{
    const MockFunction = jest.fn(data=>{
        expect(data).toBe('admin');
        console.log('Mock Function');
        done();
    })
    fetchData(MockFunction);
})


