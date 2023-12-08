import { NextResponse } from 'next/server'
import { database } from '@/utils/database';

export async function POST(req: Request) {
    try {
        await database.auth.signOut();
        return NextResponse.json({ message: 'Logout successful'})
    } catch (error) {
        return NextResponse.error();
    }
}