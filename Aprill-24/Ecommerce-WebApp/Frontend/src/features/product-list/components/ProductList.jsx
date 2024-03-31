import React, { useState, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { StarIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

import {
    ChevronDownIcon,
    FunnelIcon,
    MinusIcon,
    PlusIcon,
    Squares2X2Icon,
} from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { SelectAllproducts, fetchAllProductAsync, fetchProductsByFiltersAsync } from '../ProductListSlice';

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
];

const filters = [
    {
        id: 'Brands',
        name: 'Brands',
        options: [
            { value: 'Apple', label: 'Apple' },
            { value: 'Samsung', label: 'Samsung' },
            { value: 'OPPO', label: 'OPPO' },
            { value: 'Huawei', label: 'Huawei' },
            { value: 'Microsoft Surface', label: 'Microsoft Surface' },
            { value: 'Infinix', label: 'Infinix' },
            { value: 'HP Pavilion', label: 'HP Pavilion' },
            {
                value: 'Impression of Acqua Di Gio',
                label: 'Impression of Acqua Di Gio'
            },
            { value: 'Royal_Mirage', label: 'Royal_Mirage' },
            { value: 'Fog Scent Xpressio', label: 'Fog Scent Xpressio' },
            { value: 'Al Munakh', label: 'Al Munakh' },
            { value: 'Lord - Al-Rehab', label: 'Lord   Al Rehab' },
            { value: "L'Oreal Paris", label: "L'Oreal Paris" },
            { value: 'Hemani Tea', label: 'Hemani Tea' },
            { value: 'Dermive', label: 'Dermive' },
            { value: 'ROREC White Rice', label: 'ROREC White Rice' },
            { value: 'Fair & Clear', label: 'Fair & Clear' },
            { value: 'Saaf & Khaas', label: 'Saaf & Khaas' },
            { value: 'Bake Parlor Big', label: 'Bake Parlor Big' },
            { value: 'Baking Food Items', label: 'Baking Food Items' },
            { value: 'fauji', label: 'fauji' },
            { value: 'Dry Rose', label: 'Dry Rose' },
            { value: 'Boho Decor', label: 'Boho Decor' },
            { value: 'Flying Wooden', label: 'Flying Wooden' },
            { value: 'LED Lights', label: 'LED Lights' },
            { value: 'luxury palace', label: 'luxury palace' },
            { value: 'Golden', label: 'Golden' },
            { value: 'Furniture Bed Set', label: 'Furniture Bed Set' },
            { value: 'Ratttan Outdoor', label: 'Ratttan Outdoor' },
            { value: 'Kitchen Shelf', label: 'Kitchen Shelf' },
            { value: 'Multi Purpose', label: 'Multi Purpose' },
            { value: 'AmnaMart', label: 'AmnaMart' },
            { value: 'Professional Wear', label: 'Professional Wear' },
            { value: 'Soft Cotton', label: 'Soft Cotton' },
            { value: 'Top Sweater', label: 'Top Sweater' },
            { value: 'RED MICKY MOUSE..', label: 'RED MICKY MOUSE..' },
            { value: 'Digital Printed', label: 'Digital Printed' },
            { value: 'Ghazi Fabric', label: 'Ghazi Fabric' },
            { value: 'IELGY', label: 'IELGY' },
            { value: 'IELGY fashion', label: 'IELGY fashion' },
            { value: 'Synthetic Leather', label: 'Synthetic Leather' },
            { value: 'Sandals Flip Flops', label: 'Sandals Flip Flops' },
            { value: 'Maasai Sandals', label: 'Maasai Sandals' },
            { value: 'Arrivals Genuine', label: 'Arrivals Genuine' },
            { value: 'Vintage Apparel', label: 'Vintage Apparel' },
            { value: 'FREE FIRE', label: 'FREE FIRE' },
            { value: 'The Warehouse', label: 'The Warehouse' },
            { value: 'Sneakers', label: 'Sneakers' },
            { value: 'Rubber', label: 'Rubber' },
            { value: 'Naviforce', label: 'Naviforce' },
            { value: 'SKMEI 9117', label: 'SKMEI 9117' },
            { value: 'Strap Skeleton', label: 'Strap Skeleton' },
            { value: 'Stainless', label: 'Stainless' },
            { value: 'Eastern Watches', label: 'Eastern Watches' },
            { value: 'Luxury Digital', label: 'Luxury Digital' },
            { value: 'Watch Pearls', label: 'Watch Pearls' },
            { value: 'Bracelet', label: 'Bracelet' },
            { value: 'LouisWill', label: 'LouisWill' },
            { value: 'Copenhagen Luxe', label: 'Copenhagen Luxe' },
            { value: 'Steal Frame', label: 'Steal Frame' },
            { value: 'Darojay', label: 'Darojay' },
            { value: 'Fashion Jewellery', label: 'Fashion Jewellery' },
            { value: 'Cuff Butterfly', label: 'Cuff Butterfly' },
            { value: 'Designer Sun Glasses', label: 'Designer Sun Glasses' },
            { value: 'mastar watch', label: 'mastar watch' },
            { value: 'Car Aux', label: 'Car Aux' },
            { value: 'W1209 DC12V', label: 'W1209 DC12V' },
            { value: 'TC Reusable', label: 'TC Reusable' },
            { value: 'Neon LED Light', label: 'Neon LED Light' },
            {
                value: 'METRO 70cc Motorcycle - MR70',
                label: 'METRO 70cc Motorcycle   MR70'
            },
            { value: 'BRAVE BULL', label: 'BRAVE BULL' },
            { value: 'shock absorber', label: 'shock absorber' },
            { value: 'JIEPOLLY', label: 'JIEPOLLY' },
            { value: 'Xiangle', label: 'Xiangle' },
            { value: 'lightingbrilliance', label: 'lightingbrilliance' },
            { value: 'Ifei Home', label: 'Ifei Home' },
            { value: 'DADAWU', label: 'DADAWU' },
            { value: 'YIOSI', label: 'YIOSI' }
        ]
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'smartphones', label: 'smartphones' },
            { value: 'laptops', label: 'laptops' },
            { value: 'fragrances', label: 'fragrances' },
            { value: 'skincare', label: 'skincare' },
            { value: 'groceries', label: 'groceries' },
            { value: 'home-decoration', label: 'home decoration' },
            { value: 'furniture', label: 'furniture' },
            { value: 'tops', label: 'tops' },
            { value: 'womens-dresses', label: 'womens dresses' },
            { value: 'womens-shoes', label: 'womens shoes' },
            { value: 'mens-shirts', label: 'mens shirts' },
            { value: 'mens-shoes', label: 'mens shoes' },
            { value: 'mens-watches', label: 'mens watches' },
            { value: 'womens-watches', label: 'womens watches' },
            { value: 'womens-bags', label: 'womens bags' },
            { value: 'womens-jewellery', label: 'womens jewellery' },
            { value: 'sunglasses', label: 'sunglasses' },
            { value: 'automotive', label: 'automotive' },
            { value: 'motorcycle', label: 'motorcycle' },
            { value: 'lighting', label: 'lighting' }
        ]
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}





export default function ProductList() {

    const dispatch = useDispatch();
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const products = useSelector(SelectAllproducts)

    const [filter, setFilter] = useState({});

    const handleFilter = (section, option) => {


        // console.log(e, section, option);
        const newFilter = { ...filter, [section.id]: option.value };
        console.log(newFilter);
        setFilter(newFilter)
        dispatch(fetchProductsByFiltersAsync(newFilter))

    }

    useEffect(() => {
        dispatch(fetchAllProductAsync())
    }, [dispatch])

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-40 lg:hidden"
                        onClose={setMobileFiltersOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-gray-900">
                                            Filters
                                        </h2>
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Filters */}
                                    <form className="mt-4 border-t border-gray-200">
                                        {filters.map((section) => (
                                            <Disclosure
                                                as="div"
                                                key={section.id}
                                                className="border-t border-gray-200 px-4 py-6"
                                            >
                                                {({ open }) => (
                                                    <>
                                                        <h3 className="-mx-2 -my-3 flow-root">
                                                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                                <span className="font-medium text-gray-900">
                                                                    {section.name}
                                                                </span>
                                                                <span className="ml-6 flex items-center">
                                                                    {open ? (
                                                                        <MinusIcon
                                                                            className="h-5 w-5"
                                                                            aria-hidden="true"
                                                                        />
                                                                    ) : (
                                                                        <PlusIcon
                                                                            className="h-5 w-5"
                                                                            aria-hidden="true"
                                                                        />
                                                                    )}
                                                                </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel className="pt-6">
                                                            <div className="space-y-6">
                                                                {section.options.map((option, optionIdx) => (
                                                                    <div
                                                                        key={option.value}
                                                                        className="flex items-center"
                                                                    >
                                                                        <input
                                                                            id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                            name={`${section.id}[]`}
                                                                            defaultValue={option.value}
                                                                            type="checkbox"
                                                                            defaultChecked={option.checked}

                                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                        />
                                                                        <label
                                                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                        >
                                                                            {option.label}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                            All Products
                        </h1>

                        <div className="flex items-center">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Sort
                                        <ChevronDownIcon
                                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {sortOptions.map((option) => (
                                                <Menu.Item key={option.title}>
                                                    {({ active }) => (
                                                        <a
                                                            href={option.thumbnail}
                                                            className={classNames(
                                                                option.current
                                                                    ? 'font-medium text-gray-900'
                                                                    : 'text-gray-500',
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            {option.title}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                            <button
                                type="button"
                                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                            >
                                <span className="sr-only">View grid</span>
                                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                {filters.map((section) => (
                                    <Disclosure
                                        as="div"
                                        key={section.id}
                                        className="border-b border-gray-200 py-6"
                                    >
                                        {({ open }) => (
                                            <>
                                                <h3 className="-my-3 flow-root">
                                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">
                                                            {section.name}
                                                        </span>
                                                        <span className="ml-6 flex items-center">
                                                            {open ? (
                                                                <MinusIcon
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <PlusIcon
                                                                    className="h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                    <div className="space-y-4">
                                                        {section.options.map((option, optionIdx) => (
                                                            <div
                                                                key={option.value}
                                                                className="flex items-center"
                                                            >
                                                                <input
                                                                    id={`filter-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    defaultValue={option.value}
                                                                    type="checkbox"
                                                                    defaultChecked={option.checked}
                                                                    onChange={(e) => handleFilter(section, option)}
                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                />
                                                                <label
                                                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                    className="ml-3 text-sm text-gray-600"
                                                                >
                                                                    {option.label}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3">
                                {/* This is our products list  */}
                                <div className="bg-white">
                                    <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
                                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                            {products.map((product) => (
                                                <Link to="/product-detail">
                                                    <div key={product.id} className="group relative border-solid border-2 p-2 border-grey-200">
                                                        <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                                            <img
                                                                src={product.thumbnail}
                                                                alt={product.title}
                                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                            />
                                                        </div>
                                                        <div className="mt-4 flex justify-between">
                                                            <div>
                                                                <h3 className="text-sm text-gray-700">
                                                                    <a href={product.thumbnail}>
                                                                        <span
                                                                            aria-hidden="true"
                                                                            className="absolute inset-0"
                                                                        />
                                                                        {product.title}
                                                                    </a>
                                                                </h3>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    <StarIcon className='w-6 h-6 inline '></StarIcon>
                                                                    <span className="align-bottom">{product.rating}</span>
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-medium text-gray-900">
                                                                    ${Math.round((product.price) - (product.price * (25 / 100)))}
                                                                </p>
                                                                <p className="text-sm font-medium text-gray-900 line-through">
                                                                    ${product.price}
                                                                </p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Product grid end */}
                        </div>
                    </section>

                    {/* section of product and filters ends */}
                    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                        <div className="flex flex-1 justify-between sm:hidden">
                            <a
                                href="#"
                                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Previous
                            </a>
                            <a
                                href="#"
                                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Next
                            </a>
                        </div>
                        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-gray-700">
                                    Showing <span className="font-medium">1</span> to{' '}
                                    <span className="font-medium">10</span> of{' '}
                                    <span className="font-medium">97</span> results
                                </p>
                            </div>
                            <div>
                                <nav
                                    className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                    aria-label="Pagination"
                                >
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        <span className="sr-only">Previous</span>
                                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                    </a>
                                    {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                                    <a
                                        href="#"
                                        aria-current="page"
                                        className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        1
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        2
                                    </a>

                                    <a
                                        href="#"
                                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        <span className="sr-only">Next</span>
                                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}