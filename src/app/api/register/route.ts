import { NextResponse } from 'next/server'
import { database } from '@/utils/database';

export async function POST(req: Request) {
    const { username, email, password } = await req.json();

    try {
        const { data } = await database.auth.signUp({ email: email, password: password })

        const user = data.user;

        if (user) {
            const { data: user_data } = await database.from('farmer').upsert([{ username: username, email: user.email, uid: user.id }]).select();
            return NextResponse.json(user_data);
        }
    } catch (error) {
        return NextResponse.error();
    }
}