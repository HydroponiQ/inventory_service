import { NextResponse } from 'next/server'
import { database } from '@/utils/database';
 
export async function GET(req: Request) {
    const name = req.url.split('/').pop();

    try {
        const { data } = await database.from('yield_inventory').select('*').eq('name', name);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }
}

export async function PUT(req: Request) {
    const name = req.url.split('/').pop();
    const { amount } = await req.json();

    try {
        const { data } = await database.from('yield_inventory').update({ amount }).eq('name', name);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }
}

export async function DELETE(req: Request) {
    const name = req.url.split('/').pop();

    try {
        const { data } = await database.from('yield_inventory').delete().eq('name', name);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }
}
