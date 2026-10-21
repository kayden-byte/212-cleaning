import { SignIn } from "@clerk/nextjs";
import { authConfigured } from "../../auth-config";
export const metadata = { title: "Sign in", robots: { index: false, follow: false } };
export default function SignInPage() {
 return <main className="auth-screen"><section role="dialog" aria-modal="true" aria-labelledby="sign-in-title" className="auth-panel">
 <p className="eyebrow">212 MAINTENANCE</p><h1 id="sign-in-title">Welcome back.</h1>
 <p>Sign in or create an account to access the website.</p>
 {authConfigured() ? <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" fallbackRedirectUrl="/" /> :
 <div className="notice" role="status">Sign-in is being configured. Website access will open once account authentication is connected.</div>}
 </section></main>;
}
