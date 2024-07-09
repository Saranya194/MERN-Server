let dataSets=[];
//execute my env before all
beforeAll(()=>{
    dataSets=['saranya','suji','teja'];
})

beforeEach(()=>{
    console.log('Before Each setup is called');
})

afterEach(()=>{
    console.log('After Each setup is called');
})

afterAll(()=>{
    dataSets=[];
})

test('Test case',()=>{
    expect(dataSets.length).toBe(3);
})
test('Data set contains',()=>{
    expect(dataSets).toContain('teja');
})
test('Data set contains',()=>{
    expect(dataSets).toContain('suji');
})