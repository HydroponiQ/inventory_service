import { NextResponse } from 'next/server'
import { database } from '@/utils/database';
 
export async function GET(req: Request) {
    const name = req.url.split('/').pop();

    try {
        if (name == 'all') {
            const { data } = await database.from('yield_inventory').select('*');
            return NextResponse.json(data);
        } else {
            const { data } = await database.from('yield_inventory').select('*').eq('name', name);
            return NextResponse.json(data);
        }
    } catch (error) {
        return NextResponse.error();
    }
}

export async function POST(req: Request) {
    const method = req.url.split('/').pop();
    const { name, amount } = await req.json();

    try {
        if (method == 'add') {
            const { data } = await database.from('yield_inventory').upsert([{ name, amount }]);
            return NextResponse.json(data);
        } else {
            return NextResponse.error();
        }
    } catch (error) {
        return NextResponse.error();
    }
}

export async function PUT(req: Request) {
    const method = req.url.split('/').pop();
    const { name, amount } = await req.json();

    try {
        if (method == 'update') {
            const { data } = await database.from('yield_inventory').update({ amount }).eq('name', name);
            return NextResponse.json(data);
        } else {
            return NextResponse.error();
        }
    } catch (error) {
        return NextResponse.error();
    }
}

export async function DELETE(req: Request) {
    const method = req.url.split('/').pop();
    const { name } = await req.json();

    try {
        if (method == 'delete') {
            const { data } = await database.from('yield_inventory').delete().eq('name', name);
            return NextResponse.json(data);
        } else {
            return NextResponse.error();
        }
    } catch (error) {
        return NextResponse.error();
    }
}
