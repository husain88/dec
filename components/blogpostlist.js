class Blogpost extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
        .card-header:not([class*=bg-]):not([class*=alpha-]) {
            background-color: transparent;
            padding-top: 1.25rem;
          
          }      
          .header-elements-inline {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
          } 
          .card-img-actions{
            max-height: 5rem;
            max-width: 8rem;
          }  
          .read-more-button{
            font-size: 16px;
            font-weight: 500;
            color: #ff5700;
          }
          .read-more-button:hover{
            color:#273272;
            cursor: pointer;
          }
          .card{
            border:none;
          }
        </style>
        <div class="card">
              <div class="card-header header-elements-inline">
                <h5 class="card-title">Our Blogs - Latest News Feeds</h5>
              </div>

              <div class="card-body">
                <div class="row">
                  <div class="col-xl-12">
                    <div class="d-flex flex-row flex-sm-row mt-0 mb-3">
                        <div class="card-img-actions">
                            <img
                              src="/assets/images/medium-shot-girl-portrait-with-graduation-background.webp"
                              class="img-fluid img-preview rounded"
                              alt=""
                            />
                          </a>
                        </div>
                      <div class="d-flex flex-column justify-content-space-between mx-3">
                        <h6>
                          Top 10 Reasons to Do Graduation or Post Graduation
                          from Manipal Online
                        </h6>
                        <a href="/blog/top-10-reasons-to-do-graduation-or-post-graduation-from-manipal-online.html" class="read-more-button">Read More >></a>
                      </div>
                    </div>
                    <div class="d-flex flex-row flex-sm-row mt-0 mb-3">
                        <div class="card-img-actions">
                            <img
                              src="/assets/images/rear-view-young-college-student-paying-attention-listening-her-online-teacher-laptop-home.webp"
                              class="img-fluid img-preview rounded"
                              alt=""
                            />
                        </div>
                      <div class="d-flex flex-column justify-content-space-between mx-3">
                        <h6>
                          Explore Everything About SMU Distance Learning
                        </h6>
                        <a href="/blog/top-10-reasons-to-do-graduation-or-post-graduation-from-manipal-online.html" class="read-more-button">Read More >></a>
                      </div>
                    </div>
                    <div class="d-flex flex-row flex-sm-row mt-0 mb-3">
                        <div class="card-img-actions">
                            <img
                              src="/assets/images/writing.webp"
                              class="img-fluid img-preview rounded"
                              alt=""
                            />
                        </div>
                      <div class="d-flex flex-column justify-content-space-between mx-3">
                        <h6>
                          Which Is Bеttеr Aftеr 12th Gradе? BBA vs. B.Com –
                          Clеar Insights
                        </h6>
                        <a href="/blog/top-10-reasons-to-do-graduation-or-post-graduation-from-manipal-online.html" class="read-more-button">Read More >></a>
                      </div>
                    </div>
                    <div class="d-flex flex-row flex-sm-row mt-0 mb-3">
                        <div class="card-img-actions">
                            <img
                              src="/assets/images/writing.webp"
                              class="img-fluid img-preview rounded"
                              alt=""
                            />
                          </a>
                        </div>
                      <div class="d-flex flex-column justify-content-space-between mx-3">
                        <h6>
                        What is Online BBA? – Courses, Fees, Career in 2023
                        </h6>
                        <a href="/blog/what-is-online-bba-courses-fees-career-in-2023.html" class="read-more-button">Read More >></a>
                      </div>
                    </div>
                    <div class="d-flex flex-row flex-sm-row mt-0 mb-3">
                        <div class="card-img-actions">
                            <img
                              src="/assets/images/mba-graduate-person.webp"
                              class="img-fluid img-preview rounded"
                              alt=""
                            />
                          </a>
                        </div>
                      <div class="d-flex flex-column justify-content-space-between mx-3">
                        <h6>
                        MBA After BA: Eligibility, Salary, Scope, and Top Colleges
                        </h6>
                        <a href="/blog/mba-after-ba-eligibility-salary-scope-and-top-colleges.html" class="read-more-button">Read More >></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `;
  }
}

customElements.define("blog-posts", Blogpost);
