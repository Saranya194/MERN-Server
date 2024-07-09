//test casesfor one unit fun sum
const sum=require('./test/sum')

//jest test cases
//test function to test

test('1+2=3',()=>{
   expect(sum(1,2)).toBe(3)  //toBe--Exactly equal
})

test('Object in array',()=>{
    const data={one:1}
    data['two']=2;
    expect(data).toEqual({one:1,two:2});
})

test('Value is Null',()=>{
    const n=null;
    expect(n).toBeNull();
})

test('Value is Defined',()=>{
    const a=null;
    expect(a).toBeDefined();
})

test('Value is Truth',()=>{
    const bool=true;
    expect(bool).toBeTruthy();
})

test('Value is Falsy',()=>{
    const bool=false;
    expect(bool).toBeFalsy();
})