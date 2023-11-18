import { getSession } from 'next-auth/react';
import React from 'react'

const ssrdashbord = ({session}) => {
  return (
    <div>
      <h1>SSr Dashbord</h1>
    </div>
  )
}

export default ssrdashbord;
export async function getServerSideProps({req}){
    const session = await getSession({req});
    if(!session) {
        return {
            redirect :{
                destination :"/",
                permanent:false
            }
        }
    }
    return {
        props :{session}
    }
}
