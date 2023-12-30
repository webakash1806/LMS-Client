import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import Footer from '../Components/Footer'

const HomeLayout = ({ children }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn)

    const role = useSelector((state) => state?.auth?.role)

    const handleLogout = async (e) => {
        e.preventDefault()

        const res = await dispatch(logout())
    }

    return (
        <>
            <div>
                <div className="drawer">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        {/* Navbar */}
                        <div className="w-full navbar bg-base-300">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 px-2 mx-2">Navbar Title</div>
                            <div className="flex-none hidden lg:block">
                                <ul className="menu menu-horizontal">
                                    {/* Navbar menu content here */}
                                    <li><Link to='/LMS-Client'>Home</Link></li>

                                    {isLoggedIn && role === 'ADMIN' && (
                                        <li><Link to='/LMS-Client/admin/dashboard'>Dashboard</Link></li>
                                    )}

                                    <li><Link to=''>Course</Link></li>
                                    <li><Link to=''>About</Link></li>
                                    <li><Link to=''>Contact</Link></li>

                                    {!isLoggedIn ?
                                        <div className='flex items-center justify-center gap-3 mt-1 '>
                                            <button className='btn btn-primary btn-sm rounded-md px-5 text-[1.03rem] tracking-wide'>
                                                <Link to='/login'>
                                                    Login
                                                </Link>
                                            </button>
                                            <button className='btn btn-secondary btn-sm rounded-md px-5 text-[1.03rem] tracking-wide'>
                                                <Link to='/register'>
                                                    Register
                                                </Link>
                                            </button>
                                        </div>
                                        :
                                        <div className='flex items-center justify-center gap-3 mt-1'>
                                            <button className='btn btn-primary btn-sm rounded-md px-5 text-[1.03rem] tracking-wide'>
                                                <Link to='/user/me'>
                                                    Profile
                                                </Link>
                                            </button>
                                            <button className='btn btn-secondary btn-sm rounded-md px-5 text-[1.03rem] tracking-wide'>
                                                <Link to='/logout' onClick={handleLogout}>
                                                    Logout
                                                </Link>
                                            </button>
                                        </div>
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* Page content here
                    Content */}
                        {children}

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200">
                            {/* Sidebar content here */}
                            <li><Link to='/LMS-Client'>Home</Link></li>
                            {isLoggedIn && role === 'ADMIN' && (
                                <li><Link to='/LMS-Client/admin/dashboard'>Dashboard</Link></li>
                            )}
                            <li><Link to=''>Course</Link></li>
                            <li><Link to=''>About</Link></li>
                            <li><Link to=''>Contact</Link></li>
                            {!isLoggedIn ?
                                <div className='flex items-center justify-center gap-3 mt-4 '>
                                    <button className='btn btn-primary btn-sm rounded-md px-8 text-[1.03rem] tracking-wide'>
                                        <Link to='/login'>
                                            Login
                                        </Link>
                                    </button>
                                    <button className='btn btn-secondary btn-sm rounded-md px-8 text-[1.03rem] tracking-wide'>
                                        <Link to='/register'>
                                            Register
                                        </Link>
                                    </button>
                                </div>
                                :
                                <div className='flex items-center justify-center gap-3 mt-4 '>
                                    <button className='btn btn-primary btn-sm rounded-md px-8 text-[1.03rem] tracking-wide'>
                                        <Link to='/user/me'>
                                            Profile
                                        </Link>
                                    </button>
                                    <button className='btn btn-secondary btn-sm rounded-md px-8 text-[1.03rem] tracking-wide'>
                                        <Link to='/logout' onClick={handleLogout}>
                                            Logout
                                        </Link>
                                    </button>
                                </div>
                            }
                        </ul>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default HomeLayout