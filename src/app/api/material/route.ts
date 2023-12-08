import { NextResponse } from 'next/server'
import { database } from '@/utils/database';

export async function GET(req: Request) {
    try {
        const { data } = await database.from('material_inventory').select('*');
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }
}

export async function POST(req: Request) {
    const { name, amount } = await req.json();

    try {
        const { data } = await database.from('material_inventory').upsert([{ name, amount }]).select();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }
}
