import { useSession } from 'next-auth/react'
import {useRouter} from 'next/router';
import { useEffect } from 'react';

const Dashbord = () => {
    const {data,status}=useSession();
    const router=useRouter();

    useEffect(()=>{
        if(status === "unauthenticated") router.replace('/')
    },[status])
  return (
    <div>
      <h1>Dashbord</h1>
    </div>
  )
}

export default Dashbord;
