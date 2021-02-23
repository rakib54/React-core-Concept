import React,{useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const names =['Rakib','Tamim','Shakib']
const products =[
  {name: 'Tablet', price:'$200'},
  {name:'Laptop', price: '$400'},
  {name:'Mobile', price: '$100',id:1}
]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <UserDetails></UserDetails>
        <ol>
          {
            names.map(name =><li>{name}</li>)
          }
        </ol>
        {
          products.map(pd => <Product product={pd}></Product>)
        }

        <Profile name= 'Rakibur Rahman' Role='Web Developer'></Profile>
      </header>
    </div>
  );
}

function Counter(){
  const [count ,setCount] = useState(10);
  // const HandleClick =() => setCount(count +1)

  return(
    <div>
      <h1>Count :{count}</h1>
      <button onClick ={() => setCount(count - 1)}>decrease</button>
      <button onClick ={() => setCount(count +1)}>Increase</button>  
    </div>
  )
}
function UserDetails (){
  const [user, setUser] = useState([])
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => setUser(data))
  },[])
  return (
    <div>
      <h3>UserTodo:{user.length} </h3>
      <ul>
        {
          user.map(todo => <li>{todo.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle ={
    color:'red',
    backgroundColor:'grey',
    margin:'10px',
    height:'200px',
    width:'200px',
    float:'left',
 }
 const {name ,price,id } = props.product;

  return (
    <div style={productStyle}>
      <h3>Product:{props.product.name} </h3>
      <h5>Price :{props.product.price} </h5>
      <h5>ID :{props.product.id} </h5>
      <button>Buy now</button>
    </div>
  )
};



function Profile(props) {
// console.log(props);
  return (
    <div style ={{border:'2px solid red',borderRadius:'20px',margin:'5px',width:'300px'}}>
      <h3>Player :{props.name}</h3>
      <h5>Role :{props.Role}</h5>
    </div>
  )

}

export default App;
