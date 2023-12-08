import { NextResponse } from 'next/server'
import { database } from '@/utils/database';
 
export async function GET(req: Request) {
    const name = req.url.split('/').pop();

    try {
        if (name == 'all') {
            const { data } = await database.from('material_inventory').select('*');
            return NextResponse.json(data);
        } else {
            const { data } = await database.from('material_inventory').select('*').eq('name', name);
            return NextResponse.json(data);
        }
    } catch (error) {
        return NextResponse.error();
    }
}

export async function POST(req: Request) {
    const { name, amount } = await req.json();

    try {
        const { data } = await database.from('material_inventory').upsert([{ name, amount }]);

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }
}

export async function PUT(req: Request) {
    const { name, amount } = await req.json();

    try {
        const { data } = await database.from('material_inventory').update({ amount }).eq('name', name);

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }
}

export async function DELETE(req: Request) {
    const { name } = await req.json();

    try {
        const { data } = await database.from('material_inventory').delete().eq('name', name);

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }
}
