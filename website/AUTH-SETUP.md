# Required sign-in for 212 Maintenance

Every content page checks the server-side session. Proxy adds an entry check.
Sign-in and sign-up are the only public application routes. Logo/CSS assets remain public.
Without provider keys, protected routes redirect to a setup notice; they never open.

## Production activation

1. Claim the development Clerk application using the Clerk CLI or create an owned application in the Clerk dashboard.
2. Enable email address sign-up, password sign-in, email verification and password recovery.
3. Enable Google social sign-in. Configure production Google OAuth credentials and allowed domains/redirect URIs using Clerk's dashboard instructions.
4. Add the publishable key and secret key to Railway environment variables securely. Do not put secret keys in GitHub or chat.
5. Set the sign-in/sign-up paths using .env.example. Redeploy.
6. Test email sign-up, verification, password sign-in/recovery, Google sign-in, sign-out, invalid credentials, and direct URL access while signed out.

Development keys are intentionally excluded from this repository.
Production activation and end-to-end OAuth testing remain pending.
The downloadable static preview is a layout demonstration only and does not implement real authentication.

New APIs and server actions must include their own auth.protect() checks.
