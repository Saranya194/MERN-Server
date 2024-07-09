jest.mock('./test/utils',()=>(
   {
    getData:jest.fn(),
    getRaw:jest.fn()
   }
))
const {getData, getRaw}=require('./test/utils');
const {processData,processRaw}=require('./test/processData');

test('Mocked the process data',()=>{
    getData.mockReturnValue('Mocked Data');
    expect(processData()).toBe('Processed:Mocked Data')
})

test('Mocked Raw Data',()=>{
    getRaw.mockReturnValue(true);
    expect(processRaw()).toBe(true);
})
