import { SignUp } from "@clerk/nextjs";
import { authConfigured } from "../../auth-config";
export const metadata = { title: "Create an account", robots: { index: false, follow: false } };
export default function SignUpPage() {
 return <main className="auth-screen"><section role="dialog" aria-modal="true" aria-labelledby="sign-up-title" className="auth-panel">
 <p className="eyebrow">212 MAINTENANCE</p><h1 id="sign-up-title">Let’s get started.</h1>
 <p>Create an account to access the website.</p>
 {authConfigured() ? <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" fallbackRedirectUrl="/" /> :
 <div className="notice" role="status">Account registration is being configured. Please check back soon.</div>}
 </section></main>;
}
