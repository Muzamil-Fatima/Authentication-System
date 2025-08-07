### 🔑 **1. Authentication** (WHO are you?)

> Authentication is the process of **verifying the identity** of a user.

* 🔍 Checks: Are you really the person you claim to be?
* 🧠 Think: *Login System*

#### ✅ Example:

* You log in to a website using **email and password** or **Google account** → You are authenticated.

#### 🧩 Types of Authentication:

| Type                  | Description                           |
| --------------------- | ------------------------------------- |
| **Password-based**    | Username + password                   |
| **OTP-based**         | One-time password sent to phone/email |
| **Biometric**         | Fingerprint, Face ID                  |
| **OAuth**             | Login via Google, GitHub, etc.        |
| **Token-based (JWT)** | Auth via access token after login     |

---

### 🛡️ **2. Authorization** (WHAT can you do?)

> Authorization is the process of **verifying what access/permissions** a user has **after authentication**.

* 🔍 Checks: Are you allowed to access this resource?
* 🧠 Think: *Permissions, roles*

#### ✅ Example:

* You're logged in (authenticated), but only **admins** can access the "Admin Dashboard". If you're not an admin, you're **not authorized**.

#### 🧩 Types of Authorization:

| Type                       | Description                                                       |
| -------------------------- | ----------------------------------------------------------------- |
| **Role-Based (RBAC)**      | Access based on user roles (admin, user, manager)                 |
| **Attribute-Based (ABAC)** | Access based on attributes like location, device, time            |
| **Permission-Based**       | Specific feature access given to user (e.g., read, write, delete) |

---

### 🔄 Summary Table:

| Feature    | Authentication                  | Authorization                       |
| ---------- | ------------------------------- | ----------------------------------- |
| ✅ Meaning  | Confirms user identity          | Grants access rights                |
| 🔐 Happens | First step                      | After authentication                |
| 📋 Example | Login with email/password       | Admin can delete users, user cannot |
| 🧪 Methods | Password, OTP, OAuth, biometric | Roles, permissions, policies        |
| 🎯 Focus   | Who are you?                    | What can you do?                    |




