import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";

const Listing = () => {
    const [users, setUsers] = useState([]);

    const getData = () => {
        const db = getDatabase();
        const starCountRef = ref(db, 'users');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            var keys = Object.keys(data);
            const arr = [];
            for (let k of keys) {
                arr.push(
                    {
                        ...data[k],
                        id: k
                    }
                )
            }
            setUsers(arr);
        });
    }

    function getDataFroomTimestamp(timestamp){
        if(timestamp == undefined){
            return "N/A"
        }else{
            const d = new Date(timestamp);
            return d.toLocaleDateString();  
        } 
    }

    useEffect(
        getData, []
    )

    return (
        <div className='col-span-3'>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date of Birth
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created At
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(
                                (user) => {
                                    return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {user.name}
                                        </th>
                                        <td className="px-6 py-4">{user.email}</td>
                                        <td className="px-6 py-4">{user.date}</td>
                                        <td className="px-6 py-4">{getDataFroomTimestamp(user.createAt)}</td>
                                    </tr>
                                }
                            )
                        }


                    </tbody>
                </table>
            </div>


        </div>
    );
}

export default Listing;
