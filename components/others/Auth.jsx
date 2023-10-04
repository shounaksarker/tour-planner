'use client'
import { TokenContext } from '@/context/TokenContext'
import React, { useContext } from 'react'
import { useRouter } from "next/navigation";

export const Auth = ({children}) => {
    const { hasToken, token_id } = useContext(TokenContext);
    
    const router = useRouter();
    if(token_id){
        return(
            <>
            {children}
            </>
        )
    }
    else{
        router.push("/Login", { scroll: false });
    }
}
