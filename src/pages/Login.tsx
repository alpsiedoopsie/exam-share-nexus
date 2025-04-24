
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useUserRole } from '@/hooks/useUserRole';
import { toast } from 'sonner';
import { UserRole } from '@/types';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { updateRole } = useUserRole();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock login - to be replaced with Supabase auth
    setTimeout(() => {
      // Determine role based on email for demo purposes
      let role: UserRole = 'student';
      if (email.includes('admin')) {
        role = 'admin';
      } else if (email.includes('assessor')) {
        role = 'assessor';
      }
      
      updateRole(role);
      toast.success('Logged in successfully');
      navigate('/dashboard');
      setIsLoading(false);
    }, 1000);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock signup - to be replaced with Supabase auth
    setTimeout(() => {
      toast.success('Account created successfully');
      updateRole('student');
      navigate('/dashboard');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-exam-light p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-exam-primary mb-2">Exam Share Nexus</h1>
          <p className="text-gray-600">Your platform for exam distribution and assessment</p>
        </div>
        
        <Card>
          <Tabs defaultValue="login">
            <CardHeader>
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
              </div>
              <CardDescription className="text-center pt-2">
                Enter your credentials to access the platform
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <TabsContent value="login">
                <form onSubmit={handleLogin}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="name@example.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password" 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                      />
                    </div>
                    <Button disabled={isLoading} className="w-full">
                      {isLoading ? "Logging in..." : "Login"}
                    </Button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={handleSignup}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="John Doe" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="name@example.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password" 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                      />
                    </div>
                    <Button disabled={isLoading} className="w-full">
                      {isLoading ? "Creating account..." : "Create account"}
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </CardContent>
            
            <CardFooter className="flex flex-col text-center text-sm text-muted-foreground">
              <p>
                For demo purposes: Use emails containing "admin" or "assessor" to login with those roles.
                All other emails will be registered as students.
              </p>
            </CardFooter>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Login;
