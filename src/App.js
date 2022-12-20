// import { useState } from 'react';
// // import './App.css';

// export const App =() => {
//   const [voo, setVoo] = useState('teacher');

//   const changeName = () => {
//     if(voo == 'teacher'){
//        setVoo('student')
//     }else {
//        setVoo('teacher')
//     }
//   }

//   return (
//     <div style={css.dar}>
//        <h1> {voo} </h1>
//        <button style={css.tovch} onClick={changeName}>дар</button>
//     </div>
//     );
// }
// const css = {
//   dar:{
//     display: 'flex',
//     justifyContent: 'center',
    

//   },
//   tovch:{
//     width:'200px',
//     height:'200px',
//     backgroundColor:'red'

//   }
// }
  import { useState } from "react"
 export const App=() => {
  let [list, setList] = useState('');
  let [com, setCom] = useState(['daamn']);


  
  const bolno =(a) =>{
    setList(a.target.value)
    }
    const tiim =() =>{
      setCom([...com, list ])
      
    }
    const [check, setCheck] = useState(false)

         
      
     return(
        <div style={css.list}>
          <div>
                <input style={css.h1} onChange={bolno}></input>
                <button style={css.h2} onClick={tiim}>дараал үз</button>
          </div>
          
            
          
              {com.map((element)=> {
                return(
                  <h3 style={{backgroundColor: check ? 'red': 'green'}}>
                    <input type={'checkbox'}></input>
                    {element}
                    </h3>
                  )
                })
                
              }
        </div>
        
    )
}
const css ={
  list:{
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  h1:{
    width:'200px',
    height:'50px',
  },
  h2:{
    width:'80px',
    height:'50px',
    background:'pink',
  }
}