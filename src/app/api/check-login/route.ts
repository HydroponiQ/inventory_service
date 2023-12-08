import { NextResponse } from 'next/server'
import { database } from '@/utils/database';

export async function GET(req: Request) {
    try {
        const { data: { user } } = await database.auth.getUser();

        if (user) {
            const { data: logged_user } = await database.from('farmer').select().eq('uid', user.id);
            return NextResponse.json(logged_user);
        }
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.error();
    }
}