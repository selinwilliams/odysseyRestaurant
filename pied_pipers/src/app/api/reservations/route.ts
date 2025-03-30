// app/api/reservations/route.ts
import { NextResponse } from 'next/server';

const PAYLOAD_URL = 'http://localhost:3001/api';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        console.log('Reservation data:', data); //Debug log

        const response = await fetch(`${PAYLOAD_URL}/reservations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            cache: 'no-store', // Important for App Router
        });

        if (!response.ok) {
            const error = await response.json();
            return NextResponse.json(
                { message: error.message || 'Failed to create reservation'},
                { status: response.status }
            );
        }

        const result = await response.json();
        return NextResponse.json(result);
    } catch (error) {
        console.error('Reservation error:', error);
        return NextResponse.json(
            { message: 'Failed to create reservation' },
            { status: 500 }
        );
    }
}