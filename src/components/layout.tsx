import * as React from 'react';

import { Footer } from './footer';
import { Nav } from './nav';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <>
      <div className="relative flex flex-col min-h-screen font-sans antialiased text-gray-700 bg-type fill-available">
        <Nav />
        <main className="relative flex flex-col flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export { Layout };
