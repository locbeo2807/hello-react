import React from "react";
export default function Banhang() {
    return (
		<>

			<div>
				<div className="container-fluid">

					<div className="container first-tittle d-flex ">
						<span className="tittle">Super Value Deals - Save more with coupons</span>
						<label htmlFor="disabledSelect" className="form-label"></label>
						<select id="disabledSelect" className="form-select form">
							<option className="op-la">English</option>
							<option className="op-la">Language</option>
							<option className="op-la">VietNam</option>
						</select>

					</div>
				</div>
				<nav className="navbar navbar-expand-lg bg-body-tertiary">
					<div className="container-fluid">
						<div className="container d-flex align-items-center">
							<img src="https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg" alt="">
								<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggler-icon"></span>
								</button>
								<form className="d-flex form1" role="search">
									<input className="form-control me-2 form2" type="search" placeholder="Search" aria-label="Search">
										<button className="btn btn-outline-success" type="submit">Location</button>
									</input></form>
								<div className="icon">
									<i className="fa-regular fa-heart"><sup className="mu">5</sup></i>


									<i className="fa-regular fa-user"></i>


									<i className="fa-solid fa-bag-shopping"><sup className="mu">1</sup></i>
								</div>
							</img></div>
					</div>
				</nav>
				<nav className="navbar navbar-expand-lg bg-body-tertiary">
					<div className="container-fluid">
						<div className="container">
							<div className="d-flex align-items-center">
								<div className="navbar-brand dropdown">
									<a className="nav-link dropdown-toggle nav-cate" href="#" id="allDepartmentsDropdown" role="button" aria-expanded="false">
										All Departments
									</a>
									<ul className="dropdown-menu" aria-labelledby="allDepartmentsDropdown">
										<li><a className="dropdown-item" href="#">Dairy, Bread & Eggs</a></li>
										<li><a className="dropdown-item" href="#">Snacks & Munchies</a></li>
										<li><a className="dropdown-item" href="#">Fruits & Vegetables</a></li>
										<li><a className="dropdown-item" href="#">Cold Drinks & Juices</a></li>
										<li><a className="dropdown-item" href="#">Breakfast & Instant Food</a></li>
										<li><a className="dropdown-item" href="#">Bakery & Biscuits</a></li>
										<li><a className="dropdown-item" href="#">Chicken, Meat & Fish</a></li>
									</ul>
								</div>
								<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggler-icon"></span>
								</button>
								<div className="collapse navbar-collapse" id="navbarNavDropdown">
									<ul className="navbar-nav">
										<li className="nav-item dropdown">
											<a className="nav-link dropdown-toggle" href="#" id="homeDropdown" role="button" aria-expanded="false">
												Home
											</a>
											<ul className="dropdown-menu" aria-labelledby="homeDropdown">
												<li><a className="dropdown-item" href="#">Home 1</a></li>
												<li><a className="dropdown-item" href="#">Home 2</a></li>
												<li><a className="dropdown-item" href="#">Home 3</a></li>
											</ul>
										</li>
										<li className="nav-item dropdown">
											<a className="nav-link dropdown-toggle" href="#" id="shopDropdown" role="button" aria-expanded="false">
												Shop
											</a>
											<ul className="dropdown-menu" aria-labelledby="shopDropdown">
												<li><a className="dropdown-item" href="#">Shop 1</a></li>
												<li><a className="dropdown-item" href="#">Shop 2</a></li>
												<li><a className="dropdown-item" href="#">Shop 3</a></li>
												<li><a className="dropdown-item" href="#">Shop 4</a></li>
												<li><a className="dropdown-item" href="#">Shop 5</a></li>
												<li><a className="dropdown-item" href="#">Shop 6</a></li>
												<li><a className="dropdown-item" href="#">Shop 7</a></li>
											</ul>
										</li>
										<li className="nav-item dropdown">
											<a className="nav-link dropdown-toggle" href="#" id="storeDropdown" role="button" aria-expanded="false">
												Store
											</a>
											<ul className="dropdown-menu" aria-labelledby="storeDropdown">
												<li><a className="dropdown-item" href="#">Store 1</a></li>
												<li><a className="dropdown-item" href="#">Store 2</a></li>
												<li><a className="dropdown-item" href="#">Store 3</a></li>
												<li><a className="dropdown-item" href="#">Store 4</a></li>
												<li><a className="dropdown-item" href="#">Store 5</a></li>
												<li><a className="dropdown-item" href="#">Store 6</a></li>
												<li><a className="dropdown-item" href="#">Store 7</a></li>
											</ul>
										</li>
										<li className="nav-item dropdown">
											<a className="nav-link dropdown-toggle" href="#" id="megastoreDropdown" role="button" aria-expanded="false">
												Megastore
											</a>
											<ul className="dropdown-menu dropdown-column" aria-labelledby="megastoreDropdown">
												<li>
													<a className="dropdown-item" href="#">Column 1 Item 1</a>
													<a className="dropdown-item" href="#">Column 1 Item 2</a>
													<a className="dropdown-item" href="#">Column 1 Item 3</a>
												</li>
												<li>
													<a className="dropdown-item" href="#">Column 2 Item 1</a>
													<a className="dropdown-item" href="#">Column 2 Item 2</a>
													<a className="dropdown-item" href="#">Column 2 Item 3</a>
												</li>
												<li>
													<a className="dropdown-item" href="#">Column 3 Item 1</a>
													<a className="dropdown-item" href="#">Column 3 Item 2</a>
													<a className="dropdown-item" href="#">Column 3 Item 3</a>
												</li>
											</ul>
											<li className="nav-item dropdown">
												<a className="nav-link dropdown-toggle" href="#" id="pageDropdown" role="button" aria-expanded="false">
													Page
												</a>
												<ul className="dropdown-menu" aria-labelledby="pageDropdown">
													<li><a className="dropdown-item" href="#">Page 1</a></li>
													<li><a className="dropdown-item" href="#">Page 2</a></li>
													<li><a className="dropdown-item" href="#">Page 3</a></li>
												</ul>
											</li>
											<li className="nav-item dropdown">
												<a className="nav-link dropdown-toggle" href="#" id="accountDropdown" role="button" aria-expanded="false">
													Account
												</a>
												<ul className="dropdown-menu" aria-labelledby="accountDropdown">
													<li><a className="dropdown-item" href="#">Profile</a></li>
													<li><a className="dropdown-item" href="#">Settings</a></li>
													<li><a className="dropdown-item" href="#">Logout</a></li>
												</ul>
											</li>
											<li className="nav-item dropdown">
												<a className="nav-link dropdown-toggle" href="#" id="accountDropdown" role="button" aria-expanded="false">
													Account
												</a>
												<ul className="dropdown-menu" aria-labelledby="accountDropdown">
													<li><a className="dropdown-item" href="#">Profile</a></li>
													<li><a className="dropdown-item" href="#">Settings</a></li>
													<li><a className="dropdown-item" href="#">Logout</a></li>
												</ul>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="#">Dashboard</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="#">Docs</a>
											</li>
										</li>
									</ul>

								</div>
							</div>
						</div>
					</div>
				</nav>
				<hr />
				<main>
					<div className="container-fluid">
						<div className="container">
							<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
								<div className="carousel-indicators">
									<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
									<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
									<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
								</div>
								<div className="carousel-inner">
									<div className="carousel-item active">
										<div className="picture d-flex align-items-center" style="background: url(https://freshcart.codescandy.com/assets/images/slider/slide-1.jpg) no-repeat; background-size: cover; border-radius: 0.5rem; background-position: center">
											<div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
												<span className="badge text-bg-warning ">Opening Sale Discount 50%</span>

												<h2 className="text-dark display-5 fw-bold mt-4">SuperMarket For Fresh Grocery</h2>
												<p className="lead">Introduced a new model for online grocery shopping and convenient home delivery.</p>
												<a href="#!" className="btn btn-dark mt-3">
													Shop Now
													<i className="feather-icon icon-arrow-right ms-1"></i>
												</a>
											</div>
										</div>
									</div>
									<div className="carousel-item">
										<div className="picture d-flex align-items-center" style="background: url(https://freshcart.codescandy.com/assets/images/slider/slider-2.jpg) no-repeat; background-size: cover; border-radius: 0.5rem; background-position: center">
											<div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
												<span className="badge text-bg-warning">Free Shipping - orders over $100</span>
												<h2 className="text-dark display-5 fw-bold mt-4">
													Free Shipping on
													<br />
													orders over
													<span className="text-primary">$100</span>
												</h2>
												<p className="lead">Free Shipping to First-Time Customers Only, After promotions and discounts are applied.</p>
												<a href="#!" className="btn btn-dark mt-3">
													Shop Now
													<i className="feather-icon icon-arrow-right ms-1"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
								<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
									<span className="carousel-control-prev-icon" aria-hidden="true"></span>
									<span className="visually-hidden">Previous</span>
								</button>
								<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
									<span className="carousel-control-next-icon" aria-hidden="true"></span>
									<span className="visually-hidden">Next</span>
								</button>
							</div>
						</div>
					</div>Name
				</main>
				<section className="mb-lg-10 mt-lg-14 my-8">
					<div className="container-fluid">
						<div className="container">
							<div className="row ">
								<div className="col-12 mb-6">
									<h3 className="mb-0">Featured Categories</h3>
								</div>
							</div>
							<div className="d-flex align-items-center">

								<div className="card intro-card" style="width: 18rem;">
									<img className="img-1 card-img-top" src="https://freshcart.codescandy.com/assets/images/category/category-dairy-bread-eggs.jpg" alt="...">
										<div className="card-body">
											<p className="card-text">Dairy, Breads & Eggs</p>
										</div>
									</img></div>
								<div className="card intro-card" style="width: 18rem;">
									<img className="img-1 card-img-top" src="https://freshcart.codescandy.com/assets/images/category/category-snack-munchies.jpg" alt="...">
										<div className="card-body">
											<p className="card-text">Snack & Munchies</p>
										</div>
									</img></div>
								<div className="card intro-card" style="width: 18rem;">
									<img className="img-1 card-img-top" src="https://freshcart.codescandy.com/assets/images/category/category-bakery-biscuits.jpg" alt="...">
										<div className="card-body">
											<p className="card-text">Bakery & Biscuits</p>
										</div>
									</img></div>
								<div className="card intro-card" style="width: 18rem;">
									<img className="img-1 card-img-top" src="https://freshcart.codescandy.com/assets/images/category/category-instant-food.jpg" alt="...">
										<div className="card-body">
											<p className="card-text">Instant Food</p>
										</div>
									</img></div>
								<div className="card intro-card" style="width: 18rem;">
									<img className="img-1 card-img-top" src="https://freshcart.codescandy.com/assets/images/category/category-tea-coffee-drinks.jpg" alt="...">
										<div className="card-body">
											<p className="card-text">Tea, Coffee & Drinks</p>
										</div>
									</img></div>
								<div className="card intro-card" style="width: 18rem;">
									<img className="img-1 card-img-top" src="https://freshcart.codescandy.com/assets/images/category/category-atta-rice-dal.jpg" alt="...">
										<div className="card-body">
											<p className="card-text">Atta, Rice & Dal</p>
										</div>
									</img></div>
								<div className="card intro-card" style="width: 18rem;">
									<img className="img-1 card-img-top" src="https://freshcart.codescandy.com/assets/images/category/category-baby-care.jpg" alt="...">
										<div className="card-body">
											<p className="card-text">Baby Care</p>
										</div>
									</img></div>
								<div className="card intro-card" style="width: 18rem;">
									<img className="img-1 card-img-top" src="https://freshcart.codescandy.com/assets/images/category/category-chicken-meat-fish.jpg" alt="...">
										<div className="card-body">
											<p className="card-text">Chicken, Meat & Fish</p>
										</div>
									</img></div>
								<div className="card intro-card " style="width: 18rem;">
									<img className="img-1 card-img-top" src="https://freshcart.codescandy.com/assets/images/category/category-cleaning-essentials.jpg" alt="...">
										<div className="card-body">
											<p className="card-text">Cleaning Essentials</p>
										</div>
									</img></div>
								<div className="card intro-card" style="width: 18rem;">
									<img className="img-1 card-img-top" src="https://freshcart.codescandy.com/assets/images/category/category-pet-care.jpg" alt="...">
										<div className="card-body">
											<p className="card-text">Pet Care</p>
										</div>
									</img></div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="container-fluid">

						<div className="container">
							<div className="row">
								<div className="col-12 col-md-6 mb-3 mb-lg-0">
									<div className="sale-1">
										<div className="py-10 px-8 rounded" style="background: url(https://freshcart.codescandy.com/assets/images/banner/grocery-banner.png) no-repeat; background-size: cover; background-position: center">
											<div>
												<h3 className="fw-bold mb-1">Fruits & Vegetables</h3>
												<p className="mb-4">
													Get Upto
													<span className="fw-bold">30%</span>
													Off
												</p>
												<a href="#!" className="btn btn-dark">Shop Now</a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="sale-1">
										<div className="py-10 px-8 rounded" style="background: url(https://freshcart.codescandy.com/assets/images/banner/grocery-banner-2.jpg) no-repeat; background-size: cover; background-position: center">
											<div>
												<h3 className="fw-bold mb-1">Freshly Baked Buns</h3>
												<p className="mb-4">
													Get Upto
													<span className="fw-bold">25%</span>
													Off
												</p>
												<a href="#!" className="btn btn-dark">Shop Now</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="container">
					<div className="row">
						<div className="col-12 mb-6">
							<h3 className="mb-0">Popular Products</h3>
						</div>
					</div>

					<div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
						<div className="col">
							<div className="card card-product">
								<div className="card-body">
									<div className="text-center position-relative">
										<div className="position-absolute top-0 start-0">
											<span className="badge bg-danger">Sale</span>
										</div>
										<a href="#!"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-1.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>

										<div className="card-product-action">
											<a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
												<i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
											</a>
											<a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
											<a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
										</div>
									</div>
									<div className="text-small mb-1">
										<a href="#!" className="text-decoration-none text-muted"><small>Snack & Munchies</small></a>
									</div>
									<h2 className="fs-6"><a href="./pages/shop-single.html" className="text-inherit text-decoration-none"> Sev Bhujia</a></h2>
									<div>
										<small className="text-warning">
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											<i className="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>
										</small>
										<span className="text-muted small">4.5(149)</span>
									</div>
									<div className="d-flex justify-content-between align-items-center mt-3">
										<div>
											<span className="text-dark">$18</span>
											<span className="text-decoration-line-through text-muted">$24</span>
										</div>
										<div>
											<a href="#!" className="btn btn-primary btn-sm">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="feather feather-plus"
												>
													<line x1="12" y1="5" x2="12" y2="19"></line>
													<line x1="5" y1="12" x2="19" y2="12"></line>
												</svg>
												Add
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card card-product">
								<div className="card-body">
									<div className="text-center position-relative">
										<div className="position-absolute top-0 start-0">
											<span className="badge bg-success">14%</span>
										</div>
										<a href="./pages/shop-single.html"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-2.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
										<div className="card-product-action">
											<a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
												<i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
											</a>
											<a href="../pages/shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
											<a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
										</div>
									</div>
									<div className="text-small mb-1">
										<a href="#!" className="text-decoration-none text-muted"><small>Bakery & Biscuits</small></a>
									</div>
									<h2 className="fs-6"><a href="./pages/shop-single.html" className="text-inherit text-decoration-none">NutriChoice Digestive</a></h2>
									<div className="text-warning">
										<small>
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											<i className="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>
										</small>
										<span className="text-muted small">4.5 (25)</span>
									</div>
									<div className="d-flex justify-content-between align-items-center mt-3">
										<div><span className="text-dark">$24</span></div>
										<div>
											<a href="#!" className="btn btn-primary btn-sm">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="feather feather-plus"
												>
													<line x1="12" y1="5" x2="12" y2="19"></line>
													<line x1="5" y1="12" x2="19" y2="12"></line>
												</svg>
												Add
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card card-product">
								<div className="card-body">
									<div className="text-center position-relative">
										<a href="./pages/shop-single.html"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-3.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
										<div className="card-product-action">
											<a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
												<i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
											</a>
											<a href="../pages/shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
											<a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
										</div>
									</div>
									<div className="text-small mb-1">Name
										<a href="#!" className="text-decoration-none text-muted"><small>Bakery & Biscuits</small></a>
									</div>
									<h2 className="fs-6"><a href="./pages/shop-single.html" className="text-inherit text-decoration-none">Cadbury 5 Star Chocolate</a></h2>
									<div className="text-warning">
										<small>
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>

										</small>
										<span className="text-muted small">5 (469)</span>
									</div>
									<div className="d-flex justify-content-between align-items-center mt-3">
										<div>
											<span className="text-dark">$32</span>
											<span className="text-decoration-line-through text-muted">$35</span>
										</div>
										<div>
											<a href="#!" className="btn btn-primary btn-sm">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2" // Chuyển thành camelCase
													strokeLinecap="round" // Chuyển thành camelCase
													strokeLinejoin="round" // Chuyển thành camelCase
													className="feather feather-plus"
												>
													<line x1="12" y1="5" x2="12" y2="19"></line>
													<line x1="5" y1="12" x2="19" y2="12"></line>
												</svg>
												Add
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card card-product">
								<div className="card-body">
									<div className="text-center position-relative">
										<a href="./pages/shop-single.html"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-4.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
										<div className="card-product-action">
											<a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
												<i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
											</a>
											<a href="../pages/shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
											<a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
										</div>
										<div className="position-absolute top-0 start-0">
											<span className="badge bg-danger">Hot</span>
										</div>
									</div>
									<div className="text-small mb-1">
										<a href="#!" className="text-decoration-none text-muted"><small>Snack & Munchies</small></a>
									</div>
									<h2 className="fs-6"><a href="./pages/shop-single.html" className="text-inherit text-decoration-none">Onion Flavour Potato</a></h2>
									<div className="text-warning">
										<small>
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											<i className="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>
											<i className="fa-regular fa-star" style="color: #FFD43B;"></i>

										</small>
										<span className="text-muted small">3.5 (456)</span>
									</div>
									<div className="d-flex justify-content-between align-items-center mt-3">
										<div>
											<span className="text-dark">$3</span>
											<span className="text-decoration-line-through text-muted">$5</span>
										</div>
										<div>
											<a href="#!" className="btn btn-primary btn-sm">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2" // Chuyển thành camelCase
													strokeLinecap="round" // Chuyển thành camelCase
													strokeLinejoin="round" // Chuyển thành camelCase
													className="feather feather-plus"
												>
													<line x1="12" y1="5" x2="12" y2="19"></line>
													<line x1="5" y1="12" x2="19" y2="12"></line>
												</svg>
												Add
											</a>

										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card card-product">
								<div className="card-body">
									<div className="text-center position-relative">
										<a href="./pages/shop-single.html"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-5.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
										<div className="card-product-action">
											<a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
												<i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
											</a>
											<a href="../pages/shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
											<a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
										</div>
									</div>
									<div className="text-small mb-1">
										<a href="#!" className="text-decoration-none text-muted"><small>Instant Food</small></a>
									</div>
									<h2 className="fs-6"><a href="./pages/shop-single.html" className="text-inherit text-decoration-none">Salted Instant Popcorn</a></h2>
									<div className="text-warning">
										<small>
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											<i className="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>

										</small>
										<span className="text-muted small">4.5 (39)</span>
									</div>
									<div className="d-flex justify-content-between mt-4">
										<div>
											<span className="text-dark">$13</span>
											<span className="text-decoration-line-through text-muted">$18</span>
										</div>
										<div>
											<a href="#!" className="btn btn-primary btn-sm">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2" // Sử dụng camelCase
													strokeLinecap="round" // Sử dụng camelCase
													strokeLinejoin="round" // Sử dụng camelCase
													className="feather feather-plus"
												>
													<line x1="12" y1="5" x2="12" y2="19"></line>
													<line x1="5" y1="12" x2="19" y2="12"></line>
												</svg>
												Add
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card card-product">
									<div className="card-body">
										<div className="text-center position-relative">
											<div className="position-absolute top-0 start-0">
												<span className="badge bg-danger">Sale</span>
											</div>
											<a href="#!"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-6.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
											<div className="card-product-action">
												<a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
													<i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
												</a>
												<a href="../pages/shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
												<a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
											</div>
										</div>
										<div className="text-small mb-1">
											<a href="#!" className="text-decoration-none text-muted"><small>Dairy, Bread & Eggs</small></a>
										</div>
										<h2 className="fs-6"><a href="./pages/shop-single.html" className="text-inherit text-decoration-none">Blueberry Greek Yogurt</a></h2>
										<div>
											<small className="text-warning">
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
												<i className="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>
											</small>
											<span className="text-muted small">4.5 (189)</span>
										</div>
										<div className="d-flex justify-content-between align-items-center mt-3">
											<div>
												<span className="text-dark">$18</span>
												<span className="text-decoration-line-through text-muted">$24</span>
											</div>
											<div>
												<a href="#!" className="btn btn-primary btn-sm">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2" // Chuyển thành camelCase
														strokeLinecap="round" // Chuyển thành camelCase
														strokeLinejoin="round" // Chuyển thành camelCase
														className="feather feather-plus"
													>
														<line x1="12" y1="5" x2="12" y2="19"></line>
														<line x1="5" y1="12" x2="19" y2="12"></line>
													</svg>
													Add
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card card-product">
									<div className="card-body">
										<div className="text-center position-relative">
											<a href="./pages/shop-single.html"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-7.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
											<div className="card-product-action">
												<a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
													<i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
												</a>
												<a href="../pages/shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
												<a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
											</div>
										</div>
										<div className="text-small mb-1">
											<a href="#!" className="text-decoration-none text-muted"><small>Dairy, Bread & Eggs</small></a>
										</div>
										<h2 className="fs-6"><a href="./pages/shop-single.html" className="text-inherit text-decoration-none">Britannia Cheese Slices</a></h2>
										<div className="text-warning">
											<small>
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
											</small>
											<span className="text-muted small">5 (345)</span>
										</div>
										<div className="d-flex justify-content-between align-items-center mt-3">
											<div><span className="text-dark">$24</span></div>
											<div>
												<a href="#!" className="btn btn-primary btn-sm">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2" // Chuyển thành camelCase
														strokeLinecap="round" // Chuyển thành camelCase
														strokeLinejoin="round" // Chuyển thành camelCase
														className="feather feather-plus"
													>
														<line x1="12" y1="5" x2="12" y2="19"></line>
														<line x1="5" y1="12" x2="19" y2="12"></line>
													</svg>
													Add
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card card-product">
									<div className="card-body">
										<div className="text-center position-relative">
											<a href="./pages/shop-single.html"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-8.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
											<div className="card-product-action">
												<a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
													<i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
												</a>
												<a href="../pages/shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
												<a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
											</div>
										</div>
										<div className="text-small mb-1">
											<a href="#!" className="text-decoration-none text-muted"><small>Instant Food</small></a>
										</div>
										<h2 className="fs-6"><a href="./pages/shop-single.html" className="text-inherit text-decoration-none"> Original Cereals</a></h2>
										<div className="text-warning">
											<small>
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
												<i className="fa-regular fa-star" style="color: #FFD43B;"></i>
											</small>
											<span className="text-muted small">4 (90)</span>
										</div>
										<div className="d-flex justify-content-between align-items-center mt-3">
											<div>
												<span className="text-dark">$32</span>
												<span className="text-decoration-line-through text-muted">$35</span>
											</div>
											<div>
												<a href="#!" className="btn btn-primary btn-sm">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
														className="feather feather-plus"
													>
														<line x1="12" y1="5" x2="12" y2="19"></line>
														<line x1="5" y1="12" x2="19" y2="12"></line>
													</svg>
													Add
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card card-product">
									<div className="card-body">
										<div className="text-center position-relative">
											<a href="./pages/shop-single.html"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-9.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
											<div className="card-product-action">
												<a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
													<i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
												</a>
												<a href="../pages/shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
												<a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
											</div>
										</div>
										<div className="text-small mb-1">
											<a href="#!" className="text-decoration-none text-muted"><small>Snack & Munchies</small></a>
										</div>
										<h2 className="fs-6"><a href="./pages/shop-single.html" className="text-inherit text-decoration-none">Slurrp Millet Chocolate</a></h2>
										<div className="text-warning">
											<small>
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
												<i className="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>
											</small>
											<span className="text-muted small">4.5 (67)</span>
										</div>
										<div className="d-flex justify-content-between align-items-center mt-3">
											<div>
												<span className="text-dark">$3</span>
												<span className="text-decoration-line-through text-muted">$5</span>
											</div>
											<div>
												<a href="#!" className="btn btn-primary btn-sm">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
														className="feather feather-plus"
													>
														<line x1="12" y1="5" x2="12" y2="19"></line>
														<line x1="5" y1="12" x2="19" y2="12"></line>
													</svg>
													Add
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card card-product">
									<div className="card-body">
										<div className="text-center position-relative">
											<a href="./pages/shop-single.html"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-10.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
											<div className="card-product-action">
												<a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
													<i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
												</a>
												<a href="../pages/shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
												<a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
											</div>
										</div>
										<div className="text-small mb-1">
											<a href="#!" className="text-decoration-none text-muted"><small>Dairy, Bread & Eggs</small></a>
										</div>
										<h2 className="fs-6"><a href="./pages/shop-single.html" className="text-inherit text-decoration-none">Amul Butter - 500 g</a></h2>
										<div className="text-warning">
											<small>
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
												<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
												<i className="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>
												<i className="fa-regular fa-star" style="color: #FFD43B;"></i>
											</small>
											<span className="text-muted small">3.5 (89)</span>
										</div>
										<div className="d-flex justify-content-between mt-4">
											<div>
												<span className="text-dark">$13</span>
												<span className="text-decoration-line-through text-muted">$18</span>
											</div>
											<div>
												<a href="#!" className="btn btn-primary btn-sm">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
														className="feather feather-plus"
													>
														<line x1="12" y1="5" x2="12" y2="19"></line>
														<line x1="5" y1="12" x2="19" y2="12"></line>
													</svg>
													Add
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<section>
					<div className="container">
						<div className="row">
							<div className="col-md-12 mb-6">
								<h3 className="mb-0">Daily Best Sells</h3>
							</div>
						</div>
						<div className="table-responsive-lg pb-6">
							<div className="row row-cols-lg-4 row-cols-1 row-cols-md-2 g-4 flex-nowrap">
								<div className="col">
									<div className="pt-8 px-6 px-xl-8 rounded" style="background: url(https://freshcart.codescandy.com//assets/images/banner/banner-deal.jpg) no-repeat; background-size: cover; height: 470px">
										<div>
											<h3 className="fw-bold text-white">100% Organic Coffee Beans.</h3>
											<p className="text-white">Get the best deal before close.</p>
											<a href="#!" className="btn btn-primary">
												Shop Now
												<i className="feather-icon icon-arrow-right ms-1"></i>
											</a>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="card card-product">
										<div className="card-body">
											<div className="text-center position-relative">
												<a href="./pages/shop-single.html"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-11.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>

												<div className="card-product-action">
													<a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
														<i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
													</a>
													<a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
													<a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
												</div>
											</div>
											<div className="text-small mb-1">
												<a href="#!" className="text-decoration-none text-muted"><small>Tea, Coffee & Drinks</small></a>
											</div>
											<h2 className="fs-6"><a href="./pages/shop-single.html" className="text-inherit text-decoration-none">Roast Ground Coffee</a></h2>

											<div className="d-flex justify-content-between align-items-center mt-3">
												<div>
													<span className="text-dark">$13</span>
													<span className="text-decoration-line-through text-muted">$18</span>
												</div>
												<div>
													<small className="text-warning">
														<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
														<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
														<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
														<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
														<i className="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>
													</small>
													<span><small>4.5</small></span>
												</div>
											</div>
											<div className="d-grid mt-2">
												<a href="#!" className="btn btn-primary">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
														className="feather feather-plus"
													>
														<line x1="12" y1="5" x2="12" y2="19"></line>
														<line x1="5" y1="12" x2="19" y2="12"></line>
													</svg>
													Add to cart
												</a>
											</div>
											<div className="d-flex justify-content-start text-center mt-3">
												<div className="deals-countdown w-100 flip-clock" data-countdown="2028/10/10 00:00:00"></div>
											</div>
											<div className="countdown">
												<span className="days">00</span> Day
												<span className="hours">00</span> Hours
												<span className="minutes">00</span> Min
												<span className="seconds">00</span> Second
											</div>

										</div>
									</div>
								</div>
								<div className="col">
									<div className="card card-product">
										<div className="card-body">
											<div className="text-center position-relative">
												<a href="./pages/shop-single.html"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-12.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
												<div className="card-product-action">
													<a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
														<i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
													</a>
													<a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
													<a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
												</div>
											</div>
											<div className="text-small mb-1">
												<a href="#!" className="text-decoration-none text-muted"><small>Fruits & Vegetables</small></a>
											</div>
											<h2 className="fs-6"><a href="./pages/shop-single.html" className="text-inherit text-decoration-none">Crushed Tomatoes</a></h2>
											<div className="d-flex justify-content-between align-items-center mt-3">
												<div>
													<span className="text-dark">$13</span>
													<span className="text-decoration-line-through text-muted">$18</span>
												</div>
												<div>
													<small className="text-warning">
														<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
														<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
														<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
														<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
														<i className="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>
													</small>
													<span><small>4.5</small></span>
												</div>
											</div>
											<div className="d-grid mt-2">
												<a href="#!" className="btn btn-primary">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
														className="feather feather-plus"
													>
														<line x1="12" y1="5" x2="12" y2="19"></line>
														<line x1="5" y1="12" x2="19" y2="12"></line>
													</svg>
													Add to cart
												</a>
											</div>
											<div className="d-flex justify-content-start text-center mt-3">
												<div className="deals-countdown w-100 flip-clock" data-countdown="2028/10/08 00:00:00"></div>
											</div>
											<div className="countdown">
												<span className="days">00</span> Day
												<span className="hours">00</span> Hours
												<span className="minutes">00</span> Min
												<span className="seconds">00</span> Second
											</div>

										</div>
									</div>
								</div>
								<div className="col">
									<div className="card card-product">
										<div className="card-body">
											<div className="text-center position-relative">
												<a href="./pages/shop-single.html"><img src="https://freshcart.codescandy.com/assets/images/products/product-img-13.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
												<div className="card-product-action">
													<a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
														<i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
													</a>
													<a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
													<a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
												</div>
											</div>
											<div className="text-small mb-1">
												<a href="#!" className="text-decoration-none text-muted"><small>Fruits & Vegetables</small></a>
											</div>
											<h2 className="fs-6"><a href="./pages/shop-single.html" className="text-inherit text-decoration-none">Golden Pineapple</a></h2>
											<div className="d-flex justify-content-between align-items-center mt-3">
												<div>
													<span className="text-dark">$13</span>
													<span className="text-decoration-line-through text-muted">$18</span>
												</div>
												<div>
													<small className="text-warning">
														<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
														<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
														<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
														<i className="fa-solid fa-star" style="color: #FFD43B;"></i>
														<i className="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>
													</small>
													<span><small>4.5</small></span>
												</div>
											</div>
											<div className="d-grid mt-2">
												<a href="#!" className="btn btn-primary">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
														className="feather feather-plus"
													>
														<line x1="12" y1="5" x2="12" y2="19"></line>
														<line x1="5" y1="12" x2="19" y2="12"></line>
													</svg>
													Add to cart
												</a>
											</div>
											<div className="d-flex justify-content-start text-center mt-3">
												<div className="deals-countdown w-100 flip-clock" data-countdown="2028/10/09 00:00:00"></div>
											</div>
											<div className="countdown">
												<span className="days">00</span> Day
												<span className="hours">00</span> Hours
												<span className="minutes">00</span> Min
												<span className="seconds">00</span> Second
											</div>
										</div>
									</div>

								</div>

							</div>
						</div>
					</div>
				</section>

				<section className="my-lg-14 my-8">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-lg-3 convenient">
								<div className="mb-8 mb-xl-0">
									<div className="mb-6"><img src="https://freshcart.codescandy.com/assets/images/icons/clock.svg" alt="" /></div>
									<h3 className="h5 mb-3">10 minute grocery now</h3>
									<p>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
								</div>
							</div>
							<div className="col-md-6 col-lg-3 convenient">
								<div className="mb-8 mb-xl-0">
									<div className="mb-6"><img src="https://freshcart.codescandy.com/assets/images/icons/gift.svg" alt="" /></div>
									<h3 className="h5 mb-3">Best Prices & Offers</h3>
									<p>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</p>
								</div>
							</div>
							<div className="col-md-6 col-lg-3 convenient">
								<div className="mb-8 mb-xl-0">
									<div className="mb-6"><img src="https://freshcart.codescandy.com/assets/images/icons/package.svg" alt="" /></div>
									<h3 className="h5 mb-3">Wide Assortment</h3>
									<p>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.</p>
								</div>
							</div>
							<div className="col-md-6 col-lg-3 convenient">
								<div className="mb-8 mb-xl-0">
									<div className="mb-6"><img src="https://freshcart.codescandy.com/assets/images/icons/refresh-cw.svg" alt="" /></div>
									<h3 className="h5 mb-3">Easy Returns</h3>
									<p>
										Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked
										<a href="#!">policy</a>
										.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<hr />
				<footer className="footer">
					<div className="container">
						<div className="row g-4 py-4">
							<div className="col-12 col-md-12 col-lg-4">
								<h6 className="mb-4">Categories</h6>
								<div className="row">
									<div className="col-6">

										<ul className="nav flex-column">
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Vegetables & Fruits</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link"> Breakfast & instant food</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link"> Bakery & Biscuits</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Atta, rice & dal</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Sauces & spreads</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Organic & gourmet</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link"> Baby care</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Cleaning essentials</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Personal care</a></li>
										</ul>
									</div>
									<div className="col-6">

										<ul className="nav flex-column">
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Dairy, bread & eggs</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link"> Cold drinks & juices</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link"> Tea, coffee & drinks</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Masala, oil & more</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Chicken, meat & fish</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Paan corner</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link"> Pharma & wellness</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Home & office</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Pet care</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-12 col-lg-8">
								<div className="row g-4">
									<div className="col-6 col-sm-6 col-md-3">
										<h6 className="mb-4">Get to know us</h6>

										<ul className="nav flex-column">
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Company</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">About</a></li>
											<li className="nav-item mb-2"><a href="#1" className="nav-link">Blog</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Help Center</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Our Value</a></li>
										</ul>
									</div>
									<div className="col-6 col-sm-6 col-md-3">
										<h6 className="mb-4">For Consumers</h6>
										<ul className="nav flex-column">

											<li className="nav-item mb-2"><a href="#!" className="nav-link">Payments</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Shipping</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Product Returns</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">FAQ</a></li>
											<li className="nav-item mb-2"><a href="./pages/shop-checkout.html" className="nav-link">Shop Checkout</a></li>
										</ul>
									</div>
									<div className="col-6 col-sm-6 col-md-3">
										<h6 className="mb-4">Become a Shopper</h6>
										<ul className="nav flex-column">

											<li className="nav-item mb-2"><a href="#!" className="nav-link">Shopper Opportunities</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Become a Shopper</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Earnings</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Ideas & Guides</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">New Retailers</a></li>
										</ul>
									</div>
									<div className="col-6 col-sm-6 col-md-3">
										<h6 className="mb-4">Freshcart programs</h6>
										<ul className="nav flex-column">

											<li className="nav-item mb-2"><a href="#!" className="nav-link">Freshcart programs</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Gift Cards</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Promos & Coupons</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Freshcart Ads</a></li>
											<li className="nav-item mb-2"><a href="#!" className="nav-link">Careers</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="border-top py-4">
							<div className="row align-items-center">
								<div className="col-lg-5 text-lg-start text-center mb-2 mb-lg-0">
									<ul className="list-inline mb-0">
										<li className="list-inline-item text-dark">Payment Partners</li>
										<li className="list-inline-item">
											<a href="#!"><img src="https://freshcart.codescandy.com/assets/images/payment/amazonpay.svg" alt=""></img></a>
										</li>
										<li className="list-inline-item">
											<a href="#!"><img src="https://freshcart.codescandy.com/assets/images/payment/american-express.svg" alt=""></img></a>
										</li>
										<li className="list-inline-item">
											<a href="#!"><img src="https://freshcart.codescandy.com/assets/images/payment//mastercard.svg" alt=""></img></a>
										</li>
										<li className="list-inline-item">
											<a href="#!"><img src="https://freshcart.codescandy.com/assets/images/payment/paypal.svg" alt=""></img></a>
										</li>
										<li className="list-inline-item">
											<a href="#!"><img src="https://freshcart.codescandy.com/assets/images/payment/visa.svg" alt=""></img></a>
										</li>
									</ul>
								</div>
								<div className="col-lg-7 mt-4 mt-md-0">
									<ul className="list-inline mb-0 text-lg-end text-center">
										<li className="list-inline-item mb-2 mb-md-0 text-dark">Get deliveries with FreshCart</li>
										<li className="list-inline-item ms-4">
											<a href="#!"> <img src="https://freshcart.codescandy.com/assets/images/appbutton/appstore-btn.svg" alt=""
												style="width: 140px;"></img></a></li>
										<li className="list-inline-item">
											<a href="#!"> <img src="https://freshcart.codescandy.com/assets/images/appbutton/googleplay-btn.svg" alt=""
												style="width: 140px;"></img></a></li>
									</ul>
								</div>
							</div>

						</div>
						<div className="border-top py-4">
							<div className="row align-items-center">
								<div className="col-md-6"><span className="small text-muted">© 2022 <span id="copyright"> -

								</span>FreshCart eCommerce HTML Template.  All rights reserved. Powered by <a href="https://codescandy.com/">Codescandy</a>.</span></div>
								<div className="col-md-6">
									<ul className="list-inline text-md-end mb-0 small mt-3 mt-md-0">
										<li className="list-inline-item text-muted">Follow us on</li>
										<li className="list-inline-item me-1">
											<a href="#!" className="btn btn-xs btn-social btn-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
												className="bi bi-facebook" viewBox="0 0 16 16">
												<path
													d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
											</svg></a></li>
										<li className="list-inline-item me-1">
											<a href="#!" className="btn btn-xs btn-social btn-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
												className="bi bi-twitter" viewBox="0 0 16 16">
												<path
													d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
											</svg></a></li>
										<li className="list-inline-item">
											<a href="#!" className="btn btn-xs btn-social btn-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
												className="bi bi-instagram" viewBox="0 0 16 16">
												<path
													d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
											</svg></a></li>
									</ul>
								</div>
							</div>

						</div>
					</div>
				</footer>
			</div>
		</>

	)
}