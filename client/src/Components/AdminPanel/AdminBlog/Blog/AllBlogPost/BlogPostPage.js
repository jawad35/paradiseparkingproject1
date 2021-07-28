import React from "react";
// import Header from "../../../Components/HomePage/Header";
import Header from "../../../../HomePage/Header";
import "react-datepicker/dist/react-datepicker.css";

const BlogPostPage = () => {
  return (
    <div>
      <Header />
      <main>
        <div
          class="
          preloader
          bg-dark
          flex-column
          justify-content-center
          align-items-center
        "
        >
          <div class="position-relative">
            <img
              src="https://demo.themesberg.com/spaces/assets/img/brand/light-without-letter.svg"
              alt="Logo loader"
            />
            <img
              src="https://demo.themesberg.com/spaces/assets/img/brand/letter.svg"
              class="rotate-letter"
              alt="Letter loader"
            />
          </div>
        </div>
        <section class="section-header bg-primary text-white pb-7 pb-lg-11">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-md-8 text-center">
                <h1 class="display-2 mb-4">Our PostPage</h1>
                <p class="lead d-none d-lg-inline">
                  We help you get better at SEO and marketing: detailed
                  tutorials, case studies and opinion pieces from marketing
                  practitioners
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="section section-lg line-bottom-light">
          <div class="container mt-n8 mt-md-n9 mt-lg-n12 z-2">
            <div class="row">
              <div class="col-lg-12 mb-5">
                <div
                  class="
                  card
                  bg-white
                  border-light
                  flex-lg-row
                  align-items-center
                  no-gutters
                  p-4
                "
                >
                  <a href="blog-post.html" class="col-12 col-lg-6">
                    <img
                      src="../assets/img/blog/image-1.jpg"
                      alt="themesberg office"
                      class="card-img-top rounded"
                    />
                  </a>
                  <div
                    class="
                    card-body
                    d-flex
                    flex-column
                    justify-content-between
                    col-auto
                    py-4
                    p-lg-3 p-xl-5
                  "
                  >
                    <a href="blog-post.html">
                      <h2>Designing a dashboard for business</h2>
                    </a>
                    <p>
                      Today we are overwhelmed by content, and inspiration can
                      strike anywhere. The point is to collect it and share it
                      in a structured way to inspire your team ...
                    </p>
                    <div class="d-flex align-items-center mt-3">
                      <img
                        class="avatar avatar-sm rounded-circle"
                        src="../assets/img/team/profile-picture-1.jpg"
                        alt="Richard avatar"
                      />
                      <h3 class="h6 small ml-2 mb-0">Richard Thomas</h3>
                      <span
                        class="
                        h6
                        text-muted
                        small
                        font-weight-normal
                        mb-0
                        ml-auto
                      "
                      >
                        <time datetime="2019-04-25">21 February, 2019</time>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
                <div class="card bg-white border-light p-3 rounded">
                  <a href="blog-post.html">
                    <img
                      src="../assets/img/blog/image-2.jpg"
                      class="card-img-top rounded"
                      alt="our desk"
                    />
                  </a>
                  <div class="card-body p-0 pt-4">
                    <a href="blog-post.html" class="h4">
                      Google launches Cloud AI Platform Pipelines
                    </a>
                    <div class="d-flex align-items-center my-4">
                      <img
                        class="avatar avatar-sm rounded-circle"
                        src="../assets/img/team/profile-picture-2.jpg"
                        alt="Neil avatar"
                      />
                      <h3 class="h6 small ml-2 mb-0">Neil Sims Curran</h3>
                    </div>
                    <p class="mb-0">
                      Richard Thomas was born in 1990, and at only 29 years old,
                      his trajectory is good. When he ...
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
                <div class="card bg-white border-light p-3 rounded">
                  <a href="blog-post.html">
                    <img
                      src="../assets/img/blog/image-3.jpg"
                      class="card-img-top rounded"
                      alt="web desk"
                    />
                  </a>
                  <div class="card-body p-0 pt-4">
                    <a href="blog-post.html" class="h4">
                      Apple Details Reveal Remarkable MacBook
                    </a>
                    <div class="d-flex align-items-center my-4">
                      <img
                        class="avatar avatar-sm rounded-circle"
                        src="../assets/img/team/profile-picture-3.jpg"
                        alt="David avatar"
                      />
                      <h3 class="h6 small ml-2 mb-0">David L. Brown</h3>
                    </div>
                    <p class="mb-0">
                      Following the release of the 16-inch MacBook Pro in late
                      2019, Apple was praised for the larger ...
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
                <div class="card bg-white border-light p-3 rounded">
                  <a href="blog-post.html">
                    <img
                      src="../assets/img/blog/image-1.jpg"
                      class="card-img-top rounded"
                      alt="pixel room"
                    />
                  </a>
                  <div class="card-body p-0 pt-4">
                    <a href="blog-post.html" class="h4">
                      One of Google Maps’ best new features
                    </a>
                    <div class="d-flex align-items-center my-4">
                      <img
                        class="avatar avatar-sm rounded-circle"
                        src="../assets/img/team/profile-picture-1.jpg"
                        alt="Jose avatar"
                      />
                      <h3 class="h6 small ml-2 mb-0">Jose Evans</h3>
                    </div>
                    <p class="mb-0">
                      As great as Google Maps might be, not all users get to
                      take advantage of the app’s brand new ...
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
                <div class="card bg-white border-light p-3 rounded">
                  <a href="blog-post.html">
                    <img
                      src="../assets/img/blog/image-3.jpg"
                      class="card-img-top rounded"
                      alt="designer office"
                    />
                  </a>
                  <div class="card-body p-0 pt-4">
                    <a href="blog-post.html" class="h4">
                      Google launches Cloud AI Platform Pipelines
                    </a>
                    <div class="d-flex align-items-center my-4">
                      <img
                        class="avatar avatar-sm rounded-circle"
                        src="../assets/img/team/profile-picture-3.jpg"
                        alt="James avatar"
                      />
                      <h3 class="h6 small ml-2 mb-0">James Curran</h3>
                    </div>
                    <p class="mb-0">
                      Richard Thomas was born in 1990, and at only 29 years old,
                      his trajectory is good. When he is ...
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
                <div class="card bg-white border-light p-3 rounded">
                  <a href="blog-post.html">
                    <img
                      src="../assets/img/blog/image-2.jpg"
                      class="card-img-top rounded"
                      alt="white laptop"
                    />
                  </a>
                  <div class="card-body p-0 pt-4">
                    <a href="blog-post.html" class="h4">
                      Apple Details Reveal Remarkable MacBook
                    </a>
                    <div class="d-flex align-items-center my-4">
                      <img
                        class="avatar avatar-sm rounded-circle"
                        src="../assets/img/team/profile-picture-5.jpg"
                        alt="Bonnie avatar"
                      />
                      <h3 class="h6 small ml-2 mb-0">Bonnie Green</h3>
                    </div>
                    <p class="mb-0">
                      Following the release of the 16-inch MacBook Pro in late
                      2019, Apple was praised for the larger ...
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-5">
                <div class="card bg-white border-light p-3 rounded">
                  <a href="blog-post.html">
                    <img
                      src="../assets/img/blog/image-1.jpg"
                      class="card-img-top rounded"
                      alt="photoshop books"
                    />
                  </a>
                  <div class="card-body p-0 pt-4">
                    <a href="blog-post.html" class="h4">
                      One of Google Maps’ best new features
                    </a>
                    <div class="d-flex align-items-center my-4">
                      <img
                        class="avatar avatar-sm rounded-circle"
                        src="../assets/img/team/profile-picture-4.jpg"
                        alt="Joseph avatar"
                      />
                      <h3 class="h6 small ml-2 mb-0">Joseph Garth</h3>
                    </div>
                    <p class="mb-0">
                      As great as Google Maps might be, not all users get to
                      take advantage of the app’s brand new features ...
                    </p>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center w-100 mt-5">
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        4
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        5
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPostPage;
