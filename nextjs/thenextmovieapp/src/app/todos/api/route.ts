
export const dynamic = 'force-static'
// Type definitions matching your kao-api interfaces
interface Todo {
  id: number | string;
  title: string;
  completed: boolean;
}

// In-memory storage for development (replace with database in production)
let todos: Todo[] = [
  { id: 1, title: 'Complete project documentation', completed: false },
  { id: 2, title: 'Review code changes', completed: true },
  { id: 3, title: 'Update dependencies', completed: false },
];

// GET /api/todos - Get all todos
export async function GET() {
  try {
    // Option 1: Return local data
    // return Response.json({
    //   success: true,
    //   data: todos,
    //   count: todos.length
    // });

    // Option 2: Proxy to your kao-api backend (uncomment to use)
    
    const response = await fetch('http://localhost:3001/todos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch todos from backend');
    }

    const data = await response.json();
    return Response.json({
      success: true,
      data: data,
      count: data.length
    });
    
  } catch (error) {
    console.error('Error fetching todos:', error);
    return Response.json(
      { 
        success: false, 
        error: 'Failed to fetch todos',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}