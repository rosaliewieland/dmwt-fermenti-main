import {query} from "@/app/lib/db";

export async function GET() {
    const dbUsers = await query({
        query: "SELECT COUNT(*) AS count FROM Users WHERE YEAR(registry_date) = YEAR(CURDATE()) AND MONTH(registry_date) = MONTH(CURDATE());",
        values: [],
    });

    const userCount = dbUsers[0].count;

    const data = JSON.stringify({count: userCount});

    return new Response(data, {
        status: 200,
    });
}
