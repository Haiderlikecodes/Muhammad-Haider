import React from "react";
export default async function test() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    console.log(users)
    const rec = (value:any,parentKey = "")=>{
        if(typeof value  === "object" && value !==null){
            return(
                <ul>
               { Object.entries(value).map(([key,values])=>{
                const uniqueKey = parentKey ? `${parentKey}-${key}` : key;

                    
                    return(
                                <li key ={uniqueKey}>
                                    <strong>{uniqueKey}:</strong>{""}
                                    {typeof values === 'object'&& values !== null?(
                                        rec(values,uniqueKey)
                                    ):(
                                        String(values)
                                    )}
                                </li>
                            )
                })
            }</ul>
            )
        }
        return String(value)
    }

    return (
        <div>
            <h1>hello world</h1>
            <ul>
                {users.map((user:any)=>(
                   <div key={user.id}>
                    <ul>
                        {rec(user)}
                    </ul>
                   </div>
                ))}
            </ul>
        </div>
        
        
    );

}