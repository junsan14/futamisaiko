import ApplicationLogo from '@/Components/ApplicationLogo';
import Header from '@/Common/Header';
import Footer from '@/Common/Footer'; 
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <>
            <Header />
                <div>
                    {children}
                </div>
            <Footer />
        </>
    );
}
