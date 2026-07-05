"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useAuth } from "@/hooks/useAuth";

export default function RegisterPage() {
  const router = useRouter();
  const { register, isLoading, error, setError } = useAuth();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...formData };
    if (!payload.companyName) delete payload.companyName;

    const res = await register(payload);
    if (res) {
      alert("Registrasi berhasil. Silakan cek email/telepon untuk OTP (Mock).");
      router.push("/login");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Create your account</CardTitle>
        <CardDescription>
          Sign up to start sending messages without your own number.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && <div className="mb-4 text-xs font-medium bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-md">{error}</div>}
        <form className="space-y-4" onSubmit={handleRegister}>
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} required minLength={2} maxLength={100} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required maxLength={191} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+6281234567890" value={formData.phone} onChange={handleChange} required minLength={8} maxLength={30} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name <span className="text-ink-dim">(Optional)</span></Label>
            <Input id="companyName" type="text" placeholder="Acme Corp" value={formData.companyName} onChange={handleChange} minLength={2} maxLength={100} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={formData.password} onChange={handleChange} required minLength={8} maxLength={100} />
            <p className="text-[0.65rem] text-ink-dim mt-1">
              Must contain lowercase, uppercase, number, and symbol.
            </p>
          </div>
          <Button type="submit" className="w-full mt-4" disabled={isLoading}>
            {isLoading ? "Signing up..." : "Sign Up"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center border-t border-border-subtle pt-5">
        <p className="text-sm text-ink-muted">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:text-primary-deep transition-colors font-medium">
            Sign In
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
