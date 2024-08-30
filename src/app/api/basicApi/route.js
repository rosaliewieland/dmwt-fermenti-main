import React from 'react'
import {query} from "@/app/lib/db";

export async function GET(request) {
    const dbUsers = await query({
        query: "SELECT * FROM Users",
        values: [],
    });

    let data = JSON.stringify(dbUsers);
    return new Response(data, {
        status: 200,
    });
}

export async function DELETE(request) {
    const {id} = await request.json();
    const deleteUsers = await query({
        query: "DELETE FROM Users WHERE id = ?",
        values: [id],
    });
    const result = deleteUsers.affectedRows;
    let message = "";
    if (result) {
        message = "success";
    } else {
        message = "error";
    }
    const deletedUsers = {
        id: id,
    };
    return new Response(JSON.stringify({
        message: message,
        status: 200,
        deletedUsers: deletedUsers,
    }));
}

export async function POST(request) {
    const {firstname, lastname, email, keyword} = await request.json();
    const updateUsers = await query({
        query: "INSERT INTO Users (firstname, lastname, email, keyword) VALUES (?, ?, ?, ?)",
        values: [firstname, lastname, email, keyword],
    });
    const result = updateUsers.affectedRows;
    let message = "";
    if (result) {
        message = "success";
    } else {
        message = "error";
    }
    const newUsers = {
        email: email,
        keyword: keyword,
    };
    return new Response(JSON.stringify({
        message: message,
        status: 200,
        newUsers: newUsers
    }));
}

export async function PUT(request) {
    const {id, firstname, lastname, email, keyword} = await request.json();
    const updateProducts = await query({
        query: "UPDATE Users SET firstname = ?, lastname = ?, email = ?, keyword = ? WHERE id = ?",
        values: [firstname, lastname, email, keyword, id],
    });
    const result = updateProducts.affectedRows;
    let message = result ? "success" : "error";
    const updateUsers = {
        id: id,
        email: email,
    };
    return new Response(JSON.stringify({
        message: message,
        status: 200,
        updateFriend: updateUsers
    }), {headers: {'Content-Type': 'application/json'}});
}