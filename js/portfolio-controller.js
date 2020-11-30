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
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${idx+1}">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="img/portfolio/0${idx+1}-thumbnail.jpg" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${proj.name}</h4>
      <p class="text-muted">${proj.smallName}</p>
    </div> 
    </div>`
  })
  console.log(strHTMLs);
  // var $elRow = $('.all-projects');
  var elRow = document.querySelector('.all-projects');
  elRow.innerHTML = strHTMLs
  // $elRow.text(`${strHTMLs}`)
}