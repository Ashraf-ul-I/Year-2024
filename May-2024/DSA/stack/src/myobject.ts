interface User {
    name: string;
    email: string;
    isActive: boolean;
  }
  
  interface CreateUserParams {
    name: string;
    isPaid: boolean;
  }
  
  interface Course {
    name: string;
    price: number;
  }
  
  // Defining a user object of type User
  const iamUser: User = {
    name: 'Ashraful',
    email: 'heyiamboss@gmail.com',
    isActive: true
  };
  
  // Function to create a user with specific parameters
  function createUser({ name, isPaid }: CreateUserParams): void {
    console.log(`Creating user ${name}, Paid: ${isPaid}`);
  }
  
  // Creating a new user object that fits the CreateUserParams interface
  let newUsers: CreateUserParams = { name: "Ashraful", isPaid: true };
  
  // Creating a user using the createUser function
  createUser(newUsers);
  
  // Function to create a course
  function createCourse(): Course {
    return { name: "reactjs", price: 399 };
  }
  
  // Creating a user directly with the required parameters
  createUser({ name: "Ashraful", isPaid: false });
