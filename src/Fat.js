import React from 'react'

// function Fat(){
//     return <h1>welcome to june</h1>

// }


// const Fat = () => {
//   return (
//     <>
//         <h1>Lorem ipsum dolor sit am</h1>
//     </>
//   )
// }

const App = () => {
  return (
    <>
        <nav>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
        </nav>
        <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, exercitationem.
        </div>
    </>
  )
}
<Navbar title="harsh text analyzer" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform
              showAlert={showAlert}
              heading="enter text to analyze"
              mode={mode}
            />

<Route path='/Textform' element={<Textform showAlert={showAlert} heading="enter text to analyze"  mode={mode} />}/> 
