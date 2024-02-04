class BCarousel extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="container my-5">
      <h2 class="text-center fw-bold mb-3">Top Online Universities</h2>
      <!-- <h4 class="text-center mb-3">What do you want to learn today?</h4> -->
      <div class="popular-carousel">
        <div class="item">
          <div class="card border bu-card">
            <div class="pc-image">
              <img src="/assets/images/manipal-card-img.webp" class="card-img-top" alt="...">
            </div>
            <div class="card-body text-dark">
              <p class="course-label-blue mb-1">Manipal University</p>
              <p class="mb-3">Manipal University is a state private 
                university. The university is approved by the UGC and accredited A+ grade by 
                NAAC with a CGPA of 3.25. The university offers a flexible learning platform 
                to its students.</p>
              <div class="d-flex justify-content-between">
                <p class="mb-0">
                  <span class="orange-color">NIRF Ranking </span> 101 out of 200
                </p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="mb-0">
                  <span class="orange-color f1">Approvals: </span>UGC, WES, AICTE, ICAS, A+ NAAC
                </p>
              </div>
              <hr class="mt-0 mb-2">
              <!-- <p class="university-name mb-2">Sikkim Manipal University</p> -->
              <a href="/manipal-university-jaipur.html" class="btn btn-warning text-decoration-none">Know More</a>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card border bu-card">
            <div class="pc-image">
              <img src="/assets/images/amity-card-img.jpeg" class="card-img-top" alt="...">
            </div>
            <div class="card-body text-dark">
              <p class="course-label-green mb-1">Amity University </p>
              <p class="mb-3">Online is India’s first university recognized by UGC to offer Online Degree programs. The university holds A+ accreditation from the NAAC.</p>
              <div class="d-flex justify-content-between">
                <p class="mb-0">
                  <span class="orange-color">NIRF Ranking </span> 35 out of 200
                </p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="mb-0">
                  <span class="orange-color">Approvals:</span>  UGC, WES, AICTE, ICAS, A+ NAAC
                </p>
              </div>
              <hr class="mt-0 mb-2">
              <!-- <p class="university-name mb-2">Sikkim Manipal University</p> -->
              <a href="/amity-university.html" class="btn btn-warning text-decoration-none">Know More</a>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card border bu-card">
            <div class="pc-image">
              <img src="/assets/images/aligarh-card-img.webp" class="card-img-top" alt="...">
            </div>
            <div class="card-body text-dark">
              <p class="course-label-yellow mb-1">Aligarh Muslim University </p>
              <p class="mb-3">Aligarh Muslim University is a public central university in Aligarh, Uttar Pradesh, India, which was originally 
                established by Sir Syed Ahmad Khan in 1875.</p>
              <div class="d-flex justify-content-between">
                <p class="mb-0">
                  <span class="orange-color">NIRF Ranking </span> 9 out of 200
                </p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="mb-0">
                  <span class="orange-color">Approvals: </span> UGC, A+ NAAC
                </p>
              </div>
              <hr class="mt-0 mb-2">
              <!-- <p class="university-name mb-2">Sikkim Manipal University</p> -->
              <a href="/aligarh-muslim-university.html" class="btn btn-warning text-decoration-none">Know More</a>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card border bu-card">
            <div class="pc-image">
              <img src="/assets/images/sikkim-card-img.jpeg" class="card-img-top" alt="...">
            </div>
            <div class="card-body text-dark">
              <p class="course-label-blue mb-1">Sikkim Manipal University</p>
              <p class="mb-3">Sikkim Manipal University is Distance Education SMU-DE was established in a partnership between the Government of Sikkim and Manipal Group in 1995.</p>
              <div class="d-flex justify-content-between">
                <p class="mb-0">
                  <span class="orange-color">NIRF Ranking </span> 101 out of 200
                </p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="mb-0">
                  <span class="orange-color">Approvals:</span>  UGC DEB, AICTE, A+ NAAC
                </p>
              </div>
              <hr class="mt-0 mb-2">
              <!-- <p class="university-name mb-2">Sikkim Manipal University</p> -->
              <a href="https://sikkim-manipal-university.distanceeducationcourses.in/" target="_blank" class="btn btn-warning text-decoration-none">Know More</a>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card border  bu-card">
            <div class="pc-image">
              <img src="/assets/images/lpu-card-img.jpeg" class="card-img-top" alt="...">
            </div>
            <div class="card-body text-dark">
              <p class="course-label-green mb-1">LPU</p>
              <p class="mb-3">LPU is one of the most famous private universities situated in Jalandhar. </p>
              <div class="d-flex justify-content-between">
                <p class="mb-0">
                  <span class="orange-color">NIRF Ranking</span>  38 out of 200
                </p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="mb-0">
                  <span class="orange-color">Approvals:</span>  UGC DEB, AICTE, NCTE, A+ NAAC
                </p>
              </div>
              <hr class="mt-0 mb-2">
              <!-- <p class="university-name mb-2">Sikkim Manipal University</p> -->
              <a href="/lpu.html" class="btn btn-warning text-decoration-none">Know More</a>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card border  bu-card">
            <div class="pc-image">
              <img src="/assets/images/chandigarh-card-img.jpeg" class="card-img-top" alt="...">
            </div>
            <div class="card-body text-dark">
              <p class="course-label-yellow mb-1">Chandigarh University</p>
              <p class="mb-3">Chandigarh University is a leading Institution offering its students a unique amalgamation of professional and 
                academic excellence.</p>
              <div class="d-flex justify-content-between">
                <p class="mb-0">
                  <span class="orange-color">NIRF Ranking </span> 27 out of 200
                </p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="mb-0">
                  <span class="orange-color">Approvals: </span> UGC, WES, AICTE, ICAS, A+ NAAC
                </p>
              </div>
              <hr class="mt-0 mb-2">
              <!-- <p class="university-name mb-2">Sikkim Manipal University</p> -->
              <a href="/chandigarh-university.html" class="btn btn-warning text-decoration-none">Know More</a>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card border  bu-card">
            <div class="pc-image">
              <img src="/assets/images/dy-patil-card-img.png" class="card-img-top" alt="...">
            </div>
            <div class="card-body text-dark">
              <p class="course-label-blue mb-1">D.Y. Patil University </p>
              <p class="mb-3">D.Y. Patil University has 34 years of excellence in education& is ranked at 41st position in University Category India by NIRF & has received A++ grade from the NAAC</p>
              <div class="d-flex justify-content-between">
                <p class="mb-0">
                  <span class="orange-color">NIRF Ranking </span> 101 out of 200
                </p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="mb-0">
                  <span class="orange-color">Approvals: </span> UGC, ISO, NIRF, A+ NAAC
                </p>
              </div>
              <hr class="mt-0 mb-2">
              <!-- <p class="university-name mb-2">Sikkim Manipal University</p> -->
              <a href="/dypatil-university.html" class="btn btn-warning text-decoration-none">Know More</a>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="card border bu-card">
            <div class="pc-image">
              <img src="/assets/images/integral-card-img.jpeg" class="card-img-top" alt="...">
            </div>
            <div class="card-body text-dark">
              <p class="course-label-green mb-1">Integral University</p>
              <p class="mb-3">Integral University is a premier educational institution located in Lucknow. Integral University was established in 2004.</p>
              <div class="d-flex justify-content-between">
                <p class="mb-0">
                  <span class="orange-color">NIRF Ranking</span>  151 out of 200
                </p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="mb-0">
                  <span class="orange-color">Approvals: </span> UGC DEB, A+ NAAC
                </p>
              </div>
              <hr class="mt-0 mb-2">
              <!-- <p class="university-name mb-2">Sikkim Manipal University</p> -->
              <a href="/integral-university.html" class="btn btn-warning text-decoration-none">Know More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
          `;
    }
  }
  
  customElements.define("b-carousel", BCarousel);
  