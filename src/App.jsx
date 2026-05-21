

import './App.css'
import { useGetusersQuery } from './Redux/features/users/userApi'

function App() {

  const { data, error, isLoading } = useGetusersQuery()
  
  console.log(data);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{ error.message }</h2>
  }
  

  return (
    <>
      <section id="center">
 
        <div>
          <p>Welcome to the app!</p>
<div className='p-6 space-y-4'>
            {data?.map(user => (
              <div key={user.id}>
                <h3> name :{user.name}</h3>
                <p> email :{user.email}</p>
                <p> phone :{user.phone}</p>
                <p>city :{user.city}</p>
              </div>
            ))}
          </div>
        </div>
   
      </section>



    </>
  )
}

export default App
