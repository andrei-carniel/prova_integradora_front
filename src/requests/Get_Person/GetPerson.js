import { useState } from "react";


export default async function getPerson(id) {
    const token = localStorage.getItem('authToken');

    try {
        const response = await fetch(`http://10.197.12.103:5000/persons?person_id=${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token
                },
            })
        const data = await response.json()
        return data
    } catch (e) {
        return JSON.stringify("err" + e)
    }
}