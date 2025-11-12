import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    const requiredFields = ['name', 'email', 'phone', 'date', 'time'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }
    
    // Date validation
    const selectedDate = new Date(`${body.date}T${body.time}`);
    const now = new Date();
    
    if (selectedDate <= now) {
      return NextResponse.json(
        { error: 'Please select a future date and time' },
        { status: 400 }
      );
    }
    
    // Here you would typically save to a database
    // For now, we'll just log and return success
    console.log('New appointment booked:', body);
    
    return NextResponse.json(
      { message: 'Appointment booked successfully!', data: body },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error processing appointment:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
