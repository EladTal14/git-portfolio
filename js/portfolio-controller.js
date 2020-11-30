'use strict'

jQuery(function () {
  createProjects()
  renderProjects()
})

function renderProjects() {
  var projects = getProjects();
  var strHTMLs = ''
  projects.forEach(function (proj, idx) {
    strHTMLs += `
    <div class="col-md-4 col-sm-6 portfolio-item">
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1" onclick="renderModal('${proj.id}')">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="img/portfolio/mineSweeper.jpg" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${proj.name}</h4>
      <p class="text-muted">${proj.smallName}</p>
    </div> 
    </div>`
  })
  var $elRow = $('.all-projects');
  $elRow.html(`${strHTMLs}`);
  // console.log(strHTMLs);
}

function renderModal(projId) {
  var proj = getProjById(projId)
  console.log(proj);
  var modal = `
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl"></div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="modal-body">
              <!-- Project Details Go Here -->
              <h2>${proj.name}</h2>
              <p class="item-intro text-muted">${proj.smallName}</p>
              <img class="img-fluid d-block mx-auto" src="${proj.imgUrl}" alt="">
              <p>${proj.desc}</p>
              <ul class="list-inline">
              <li>Date: ${proj.date}</li>
              <li>labels: ${proj.labels}</li>
              <a href="${proj.git}" class="btn btn-info" role="button">Check it Out </a>
              </ul>
              <button class="btn btn-primary" data-dismiss="modal" type="button">
                <i class="fa fa-times"></i>
                Close Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`
  // console.log(modal);
  var $elModal = $('#portfolioModal1')
  $elModal.html(modal);
  // console.log($elModal);
}