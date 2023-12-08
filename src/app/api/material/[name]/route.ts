import { NextResponse } from 'next/server'
import { database } from '@/utils/database';

export async function GET(req: Request) {
    const name = req.url.split('/').pop();
    const { id_farmer } = await req.json();

    try {
        const { data } = await database.from('material_inventory').select('*').eq('name', name).eq('id_farmer', id_farmer);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }
}

export async function PUT(req: Request) {
    const name = req.url.split('/').pop();
    const { id_farmer, amount } = await req.json();

    try {
        const { data } = await database.from('material_inventory').update({ amount }).eq('name', name).eq('id_farmer', id_farmer).select();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }
}

export async function DELETE(req: Request) {
    const name = req.url.split('/').pop();
    const { id_farmer } = await req.json();

    try {
        await database.from('material_inventory').delete().eq('name', name).eq('id_farmer', id_farmer).select();
        return NextResponse.json({ message: 'Item deleted successfully'});
    } catch (error) {
        return NextResponse.error();
    }
}