import { NextResponse } from 'next/server'
import { database } from '@/utils/database';
import { parse } from 'url'; 

export async function GET(req: Request) {
    const { query } = parse(req.url, true);
    const id_farmer = query.id_farmer;

    try {
        const { data } = await database.from('yield_inventory').select('*').eq('id_farmer', id_farmer);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }
}

export async function POST(req: Request) {
    const { name, amount, image, id_farmer } = await req.json();

    try {
        const { data } = await database.from('yield_inventory').upsert([{ name, amount, image, id_farmer }]).select();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }
}
