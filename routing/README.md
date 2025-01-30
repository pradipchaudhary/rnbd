
# Routing 

Next.js 15 introduces a new **routing system** that is centered around the `app` directory. This allows more flexible and dynamic routing, layouts, and API routes. In Next.js 15, routing is handled with file-based and dynamic routing, and the system is enhanced by **React Server Components**, **Layouts**, **Error Boundaries**, and **Loading States**.

Here's a complete breakdown of the Next.js 15 routing system with some example code for each feature:

---

### **1. File-Based Routing with the `app` Directory**

Next.js 15 introduces the `app` directory for routing, replacing the old `pages` directory. The `app` directory allows for more modular and flexible routing. Pages are created by adding `.tsx` or `.js` files inside this directory.

#### Example Folder Structure:

```plaintext
/app
  /home
    page.tsx    <-- /home route
  /about
    page.tsx    <-- /about route
```

- `/home` will render `app/home/page.tsx`.
- `/about` will render `app/about/page.tsx`.

#### `page.tsx` Example:

```tsx
// /app/home/page.tsx
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the content for the Home Page.</p>
    </div>
  );
};

export default HomePage;
```

The structure of the file path defines the route.

---

### **2. Dynamic Routing with `[param]`**

Dynamic routes can be created by adding square brackets around the parameter name in the file name. For example, a dynamic route for a product page can be created using `[id].tsx` for the `id` parameter.

#### Example of Dynamic Route:

```plaintext
/app
  /product
    [id]
      page.tsx  <-- /product/:id route
```

Now, `page.tsx` will dynamically match `/product/1`, `/product/2`, etc.

#### Dynamic Route Code Example:

```tsx
// /app/product/[id]/page.tsx
import { useParams } from 'next/navigation';

const ProductPage = async ({params}:{params:Promise<{id:string}>}) => {
  const id = (await.params).id

  return (
    <div>
      <h1>Product: {id}</h1>
      <p>Details for product {id}...</p>
    </div>
  );
};

export default ProductPage;
```

- The `useParams` hook provides the dynamic route parameters like `id`.

---

### **3. Catch-All Routes (`[[...param]]`)**

Catch-all routes allow for matching an indefinite number of route segments. The `[[...param]]` syntax is used for optional catch-all routes.

#### Example of Catch-All Route:

```plaintext
/app
  /docs
    [[...slug]]
      page.tsx  <-- /docs/* route (optional catch-all)
```

This matches:
- `/docs`
- `/docs/a`
- `/docs/a/b/c`

#### Catch-All Route Code Example:

```tsx
// /app/docs/[[...slug]]/page.tsx
import { useParams } from 'next/navigation';

const DocsPage = () => {
  const { slug } = useParams();

  return (
    <div>
      <h1>Documentation</h1>
      <p>Current slug: {slug?.join(' / ') || 'Home'}</p>
    </div>
  );
};

export default DocsPage;
```

- `slug` could be a single segment (`a`) or multiple segments (`a/b/c`).

---

### **4. Layouts**

Layouts are used to wrap and structure pages. They allow for reusable UI elements, such as headers, footers, or sidebars, to be shared across multiple pages or sections of the site.

#### Example Folder Structure with Layouts:

```plaintext
/app
  /dashboard
    layout.tsx   <-- Layout for the dashboard
    page.tsx     <-- /dashboard route
  /profile
    layout.tsx   <-- Layout for the profile
    page.tsx     <-- /profile route
```

#### Layout Code Example:

```tsx
// /app/dashboard/layout.tsx
import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <header>Dashboard Header</header>
      <div>{children}</div>  {/* Renders the child pages here */}
      <footer>Dashboard Footer</footer>
    </div>
  );
};

export default DashboardLayout;
```

The layout wraps the children (i.e., `page.tsx`) inside the route.

---

### **5. Error and Loading Boundaries**

Next.js 15 introduces the ability to handle errors and loading states at a granular level. You can define custom `error.tsx` and `loading.tsx` files to handle errors or loading indicators for specific routes or layouts.

#### Example of Error Boundary:

```tsx
// /app/about/error.tsx
import React from 'react';

const ErrorPage = () => {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>We couldn't load the About page.</p>
    </div>
  );
};

export default ErrorPage;
```

This `error.tsx` page will show if an error occurs while rendering the `/about` route.

#### Example of Loading Indicator:

```tsx
// /app/about/loading.tsx
import React from 'react';

const LoadingPage = () => {
  return <div>Loading About Page...</div>;
};

export default LoadingPage;
```

The `loading.tsx` page will show while the `/about` page is loading.

---

### **6. API Routes**

API routes are now placed in the `app/api` directory. Each file in this directory corresponds to a backend route.

#### Example API Route:

```plaintext
/app
  /api
    hello
      route.ts  <-- /api/hello route
```

#### API Route Code Example:

```ts
// /app/api/hello/route.ts
export async function GET() {
  return new Response(JSON.stringify({ message: 'Hello, World!' }), {
    status: 200,
  });
}
```

This file creates an API route at `/api/hello` that responds with `{"message": "Hello, World!"}`.

---

### **7. Middleware**

Middleware allows you to run code before a request is processed. Middleware can be used to handle things like authentication, logging, or redirects.

#### Example Middleware:

```tsx
// /app/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/protected' && !request.cookies.get('auth_token')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}
```

This middleware checks if the user is authenticated before allowing access to the `/protected` route.

---

### **Summary of Next.js 15 Routing Features:**

- **File-based routing**: Routes are created by placing `.tsx` or `.js` files in the `app` directory.
- **Dynamic routes**: Dynamic segments are created using `[param]`.
- **Catch-all routes**: Use `[[...param]]` for optional, multi-segment matching.
- **Layouts**: Wrap pages with reusable layouts for shared UI elements.
- **Error and Loading Boundaries**: Use `error.tsx` and `loading.tsx` to handle page errors and loading states.
- **API routes**: Defined in the `app/api` directory, providing backend functionality.
- **Middleware**: Allows intercepting and modifying requests before they hit the route.

This routing system in Next.js 15 offers more powerful features, making it easier to build large, complex applications with clear separation of concerns and enhanced flexibility. Let me know if you need more details or have specific questions!