const product=[
    {id:1,name:"Bluetooth", category:"electronic",inStock:true, price:1000},
    {id:2,name:"Mobile", category:"electronic" , inStock:false, price:2000},
    {id:3, name:"Shirt", category:"fashion", inStock:true, price:3000},
    {id:4, name:"shoes", category:"fashion", inStock:false, price:4000},
    {id:5, name:"voilate", category:"electronic", inStock:true, price:5000}

]
// javascript method paractice .....................
// const result=product.filter(product=>product.category==="electronic");
// console.log(result)
// export default product;
// map method here parctice ......................
// let result=product.map(p=>p.name + " " +  p.category +" " +  p.id)
// console.log(result)
// filter method practice here .............
// const result = product.filter(p=>p.name=="Bluetooth")
// console.log(result)
// method is find ==it reutrn first matches in a array 
// const result= product.find(p=>p.price>2000)
// console.log(result)
// reduce method =it collapse everything into a single value 
// const result=product.reduce((sum,p)=>sum + p.price,0)
// console.log(result)
// some method is used for does atleast one matches 
// const result= product.some(p=>p.inStock)
// console.log(result)
// every method is give true when every element pase the condition  : everyone must pass the given condition 
// const result = product.every(p=>p.price>7800)
// console.log(result)
//include means it check value is available or not example is this name in guest list or nor it return true or false 
// const result= product.includes("Elecctronis")
// console.log(result)
// sort this method are used to reorder the itmes asending order or desending order 
// const result=product.sort((a, b)=>b.price - a.price)
// console.log(result)
export default product;