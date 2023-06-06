import './globals.css';
import { Roboto } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import AuthProvider from '@/components/authProvider/AuthProvider';

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
});
export const metadata = {
  title: 'Next Blog App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
