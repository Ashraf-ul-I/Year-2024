import { Link, useLocation } from 'react-router-dom';

const BreadCrumps = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <div>
            <nav className='bg-gray-100 rounded mb-4 p-3'>
                <ul className='flex'>
                    <li className='mr-2'>
                        <Link to={'/'} className='text-blue-600'>Home</Link>
                    </li>
                    {
                        pathnames.map((value, index) => {
                            const isLast = index === pathnames.length - 1;
                            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                            return (
                                <li key={to} className='mr-2 flex items-center'>
                                    <span className='mx-2'>/</span>
                                    {
                                        isLast ? (
                                            <span className='text-gray-500 capitalize'>{value}</span>
                                        ) : (
                                            <Link to={to} className='text-blue-600 capitalize'>{value}</Link>
                                        )
                                    }
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        </div>
    );
};

export default BreadCrumps;
