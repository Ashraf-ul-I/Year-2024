import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const BreadCrumbs = () => {
    const { pathname } = useLocation();

    const pathNames = pathname.split('/').filter((x) => x)
    let breadCrumbsPath = '';
    return (
        <div className='breadCrumbs'>
            {pathNames.length > 0 && <Link to="/">Home</Link>}
            {pathNames.map((name, index) => {
                breadCrumbsPath += `/${name}`;
                const isLast = index === pathNames.length - 1

                return isLast ? <span>/{name}</span> : (
                    <span>/ <Link to={breadCrumbsPath}>{name}</Link></span>
                )
            })}

        </div>
    )
}

export default BreadCrumbs