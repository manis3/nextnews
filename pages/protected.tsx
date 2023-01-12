import { JSX } from '@emotion/react'
import {NextPage} from 'next';
import {useSession} from 'next-auth/react';
import Router from "next/router";
import { useEffect } from 'react';


const Protected:NextPage = (): JSX.Element =>{
    const {status, data} = useSession();
    // console.log(session);
    useEffect(() =>{
        if(status === 'unauthenticated'){
            Router.replace('auth/Login')
        }
    },[status]);

    if(status === 'authenticated'){
    return (
        <div>Manish</div>
            )
    }
}
export default Protected;



