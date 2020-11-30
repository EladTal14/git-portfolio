'use strict'
var gProjects;


function createProjects() {
  gProjects = []
  gProjects.push(createProject('1', 'Mine Sweeper', 'my first project'))
  // console.log(gProjects);
}

function createProject(id, name, smallName, imgUrl, desc, date, client, category) {
  var proj = {
    id: id,
    name: name,
    smallName,
    imgUrl,
    desc,
    date,
    client,
    category

  };
  return proj;
}

function getProjects() {
  return gProjects;
}