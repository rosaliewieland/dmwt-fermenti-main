import React from "react";

export default async function page() {
    const getUsers = async () => {
        const res = await fetch('http://localhost:3000/api/basicApi')
        const db_result = await res.json();
        return db_result
    }
    const data = await getUsers()
    return (
        <>
            <div>GetAllUsers:</div>
            <table>
                <tbody>
                {
                    data.map((item) => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.email}</td>
                            <td>{item.keyword}</td>
                            <td>{item.registry_date}</td>
                            <td></td>
                        </tr>
                    })
                }
                </tbody>
            </table>

        </>
    )
}