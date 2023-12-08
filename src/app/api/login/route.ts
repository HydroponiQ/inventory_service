import { NextResponse } from 'next/server'
import { database } from '@/utils/database';

export async function POST(req: Request) {
    const { email, password } = await req.json();

    try {
        const { data } = await database.auth.signInWithPassword({ email: email, password: password })
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }
}