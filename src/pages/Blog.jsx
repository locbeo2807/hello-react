import React from 'react';

const Blog = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="relative h-80 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center filter blur-sm"
                    style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLt64fXtuzoOrK200L5f07UlrXncZVkzFiAyshUAvmiN3kSlBYDbGpssV~-Fv4H-EV~ZGdfy55UZgz1IkGrBNsZxpAPlQK2GAKtsh4zoX~wwyIqiFFAU2UEDIdJ5nbZ47QaIatQj5lMt0JHBJ4EPhUjFxlrJ2-DsizyQegnnvFKZyh5grgy5FWuYMArXw7SmMKt-U~~TuuYYXaRVnjW~QT5reUwQw8KkSY2tgdhFDI~3Sj2l9GfAYc2cuVVXXvbdzDri1Ix6tLlxyNiYP0cB1GnReY0kNke6sORtaRAbI-bV6MMt9G8xmFRrP99uTfYacEVfwAG0OA0Ujeb7E~YZvQ__)' }}
                ></div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-white opacity-50"></div>
                {/* Centered Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                    <h1 className="text-4xl font-bold text-black">Blog</h1>
                    <nav className="text-gray-700 mt-2">
                        <a href="#" className="hover:text-black font-bold">Home</a>
                        <span className="mx-2">&gt;</span>
                        <span>Blog</span>
                    </nav>

                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12 flex">
                {/* Blog Posts */}
                <section className="w-2/3 pr-8">
                    {/* Blog Post 1 */}
                    <article className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/56f7/6fe2/41417cd682c30a19eecaf20a549cee89?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e22IsLnKCbRl9pxfnWRQJAWr-ZybsJoqXb377wHrbA5VTd~uwXwrYOggIccndmVP3zqwpt1-xr0SQAacMrbYxWrJhXGRR9PupWnHDthTT7yBSVx74jXDMp~pDs5itiv8SBjZbnBzJuwRjTMoQ1Z7tgN7rf~5KUdr6X-00bYnX14lUNC2xmfOsIstDWidOtOcbu8IY0Z6~CAmdCZQxsvYU~f~7L-x8oRZRrdtaBXtyMozUAxNRnlZbKu1NYLBdv5KHvvugop6DTbQCk8hmD9tqfwRxe79WH31S5PsdRkC-Je2-GcCLlv5dYL72gfCSd5DIPuJvshMA3NsFNbAQ-KWXA__"
                            alt="Blog Post 1"
                            className="w-full h-64 object-cover rounded-md"
                        />
                        <div className="mt-6">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                                <span className="mr-2">👤 Admin</span> |
                                <span className="mx-2">📅 14 Oct 2022</span> |
                                <span className="ml-2">📁 Design</span>
                            </div>
                            <h2 className="text-2xl font-semibold mb-4">Going all-in with millennial design</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius...
                            </p>
                            <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">Read more</a>
                        </div>
                    </article>

                    {/* Blog Post 2 */}
                    <article className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/d248/0301/96ed5dc3b3d01cf6cd369ef7aff2f296?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bl5IxxgBsJaphzwPCeu8n4BKyyE-8VZOSZi9AjwE3DcjDnpL6BoIZvMeCmEyO7c7Pqn37XCjMGNVw88kYFINR8EY~H2IoixZL4uUaePHxuEbZxatFYhf7xgr0eYuoOZb-QChv4vNIRkIdZv4qrynzjfMA4yh6DUBFmoTQwmcc3zk2wkQOsdSQF6di9SbYLDn~glgQG252WsNIA6NWnawViPR~yLLGQ8z-fz9ZFhfWL7zmVJi2oQE9C4O1qBLxv3XxFnFK8cVQ9~8x0i2bboL43K1Ael1norMYRscKoOyrD4cHm1rrSFrTY0VWN~iEedNVBgWuZrNJDeCLNw0pgxeCg__"
                            alt="Blog Post 2"
                            className="w-full h-64 object-cover rounded-md"
                        />
                        <div className="mt-6">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                                <span className="mr-2">👤 Admin</span> |
                                <span className="mx-2">📅 14 Oct 2022</span> |
                                <span className="ml-2">📁 Handmade</span>
                            </div>
                            <h2 className="text-2xl font-semibold mb-4">Exploring new ways of decorating</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius...
                            </p>
                            <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">Read more</a>
                        </div>
                    </article>

                    {/* Blog Post 3 */}
                    <article className="bg-white p-6 rounded-lg shadow-sm">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/8dee/6dec/4190307dc6c7273c0bbf5086605997e4?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q~22SMeuZOcBH5HE1PkKY0oPFWY1yNoFMTxkALJLfeOioNgASw-VQngQotqZEjIn5Hc7J1Z2G5CjL3O4sHx2VHrQ9jXE9a3Pj1nah1VQnVIjKQPcUJg7JuAWcRvgyxYLuA5AK2DqCYzDIqm2vKpTYTOYQxh6Gq~WmspX93ygOR9~Xjw15DG-glNCSrebpb9u~TrRwb1WC4xkh4xfm6-iikEonWUx5q-rKoX1axMzGOw5T7XO-0qnje1EOj0aOrpehaDDaCGQWdkTIwlJ3HZrBOlsZzIElWkUEu1M02bu34SRfdGWe2EZj4AiUsEwR9sVPoSzPOzG2lTwZI8se42XbA__"
                            alt="Blog Post 3"
                            className="w-full h-64 object-cover rounded-md"
                        />
                        <div className="mt-6">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                                <span className="mr-2">👤 Admin</span> |
                                <span className="mx-2">📅 14 Oct 2022</span> |
                                <span className="ml-2">📁 Wood</span>
                            </div>
                            <h2 className="text-2xl font-semibold mb-4">Modern forms in design</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius...
                            </p>
                            <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">Read more</a>
                        </div>
                    </article>
                </section>

                {/* Sidebar */}
                <aside className="w-1/3">
                    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                        <h3 className="text-xl font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li className="flex justify-between">
                                <a href="#" className="text-gray-600 hover:text-gray-900">Crafts</a>
                                <span className="text-gray-400">(2)</span>
                            </li>
                            <li className="flex justify-between">
                                <a href="#" className="text-gray-600 hover:text-gray-900">Design</a>
                                <span className="text-gray-400">(8)</span>
                            </li>
                            <li className="flex justify-between">
                                <a href="#" className="text-gray-600 hover:text-gray-900">Handmade</a>
                                <span className="text-gray-400">(7)</span>
                            </li>
                            <li className="flex justify-between">
                                <a href="#" className="text-gray-600 hover:text-gray-900">Interior</a>
                                <span className="text-gray-400">(1)</span>
                            </li>
                            <li className="flex justify-between">
                                <a href="#" className="text-gray-600 hover:text-gray-900">Wood</a>
                                <span className="text-gray-400">(6)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/2e2c/01ab/8b94b8e3a17bbb18c564006d557e73b1?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jvWCT0UBLf6SubyJhDLXjwyoQkrG4UFQRP7upcNJE-juYlab4xBzpXoSURFlwTHJ0eG5mu2G~JrST55VYrOR9bHtspe33gLJuCTZxM~NI3apHzEIBoD6sP3Kvbk2pqFqJ6-ZfWXNtUz4Y1lpSTxA5nEmtmPRQ4qAqi1~~n-qxPx1OqHHuANNupl~OTL7vGUOOttKrRSps26wfUV7CpzGE-bcFFZBHPmfLzE4l~TGOafv5q7XAo9-vRv4mVz0wMZ6TqyrmU34tP79qI5UlevuX1MsFP0C-xSw9vpE4wMSgsGaubB1Xp4LseuZ6AZPuTm6lb6Ka9Fc3zEjKdKEe56mkQ__"
                                    alt="Recent Post 1"
                                    className="w-16 h-16 object-cover rounded-md mr-4"
                                />
                                <a href="#" className="text-gray-600 hover:text-gray-900">Going all-in with millennial design</a>
                            </li>
                            <li className="flex items-center">
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/3752/8005/309ac985861a262b8622e7528e08049f?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LL3FkNy0vGt1SKLm530~wwuxfPqeKf6lpfMxAoxktqRyxDs2m0lln8tVi9yO-~sbPfqY5XFHzM9ph9SSxepCtE-JFovzrhEjJw~YApM4DKDzs-qkyqZH8CneKG0O5D~GDEY6Iz~ZeHvJ8jAiumppuDzC4aRg0-aMkiK-xQ0xEMZv5eyLIZWgdSj2PoWl58FjBdFp8C2QE-ARDw5sPfqpCoJ~rVtD-J4~mE3Hx2DhJ4My48F~QVgiVRphEIDqS8~id6HABNeCV-PYGV4omECZArV1dNfzrDlEkj3J~saRXWxt0jPA-jNVK0LCT2SkQCd4XQcjdP06dkRCMxzVuVBAqw__"
                                    alt="Recent Post 2"
                                    className="w-16 h-16 object-cover rounded-md mr-4"
                                />
                                <a href="#" className="text-gray-600 hover:text-gray-900">Exploring new ways of decorating</a>
                            </li>
                            <li className="flex items-center">
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/0b5e/8500/6615f4968338e0a7004a86529ecf85c9?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cxL6I5pmqcJEN8inwql04m4o0bIJrefUQxLhjVZd8vkBktmnx7BDEQBKLH3K0RCUdt4l-OZr4nFmOZOwieLRKlbf7uGsNiT8IGlzRkdTwK~RBU7Cm-eP6u9KPAm3QUUqgFuDmbpvf3FDgyV5qtDnOxzsYzaW-HmyD8FxbQQeX-uNYyNCKRKxcaDcx1ppD8VJPRsKONaUfsAARJBuom0S42xdOoC~rXZ32nJLjd~QKl2BufOozggkLnP720hw~RIZqzaRRIjbxckhwc0Xy-ka~Q3Cx7o-207h0j4TbZx8f34ehK8QSAqWPCvEyyXfa2aA~EnGVbyHyZ2zKoTv2SXprg__"
                                    alt="Recent Post 3"
                                    className="w-16 h-16 object-cover rounded-md mr-4"
                                />
                                <a href="#" className="text-gray-600 hover:text-gray-900">Modern forms in design</a>
                            </li>
                            <li className="flex items-center">
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/9056/4e0f/cfbc72a9932875eeb20db551bb01abb3?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bwhZ51vRqx1QW9L1DS4nPsHsK6fwZ8Y-x6OBcty8tPioOd0ibZR85eCgLpRw5XjrqPQD5EnHy7cRMhXTg1nmNxeFA82hcPHbNEHA5cFDwmXQYhIWS1Q2kyV2LOCQBY4Sfa0PshlXR1D0FSYepu29QIkQGtu-wKErLmrZDkbGIQsq-iOBCVZkZGvx9nH29ZnD68OczKsXWDlKfgehnPWTGu0KXFT68iB0b81YXLH0G0NbzzbgHV1hG5SRmHkeuc3oTAAbAGuHPm8XKNXvwVevLEv7mowdepJc3~yMgoJ32y7bkBSuqcOHcGOxC8WV6u4LHCP4zCyatceLt7MYFnQ3HA__"
                                    alt="Recent Post 4"
                                    className="w-16 h-16 object-cover rounded-md mr-4"
                                />
                                <a href="#" className="text-gray-600 hover:text-gray-900">Topology and space design</a>
                            </li>
                            <li className="flex items-center">
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/455f/f3a5/7de5c930d1538360f43cbfa1d7f00337?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PLYG0MaueckAyygYkWIETwAvnZgNKEV2Vh8JGCfZl~cjsBlrj2LqMEBYiBaweD8LV6CM8nxRCB3V4qxQy26nunx-b7yDxMzp2TECUBut55WL5B5NOVjCM3AtfTNrcq-ZqsQ1-HylxGLRE6cze~8IGlBJfvFQujrtIq7SAJum~6dxmPxol4Z6R49hnjWsBpcY6-04VzEFjHn5GtKVhb4eq6dQ3Tqamqmn77UmXtTJS~Q6bYW3OhsCqznFkeO6QLKbaV0yUoKSZwbArq9sL4u-fg3Kyc9xN2omhDJuWaFMG5vAWO12jR8OdzM6AVpyrK1KEmkgjJvmSjz9eHLtwDoKRQ__"
                                    alt="Recent Post 5"
                                    className="w-16 h-16 object-cover rounded-md mr-4"
                                />
                                <a href="#" className="text-gray-600 hover:text-gray-900">Crafting office accessories</a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </main>
        </div>
    );
}

export default Blog;
