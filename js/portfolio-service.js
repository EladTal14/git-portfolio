'use strict'
var gProjects;


function createProjects() {
  gProjects = []
  // console.log(gProjects);
  gProjects.push(createProject('1', 'Mine Sweeper', 'my first project', 'img/portfolio/mineSweeper.jpg',
    'https://eladtal14.github.io/Mine-Sweeper/', 'Mine Sweeper game that we built as our first project in Coding Academy', '20/11/20',
    'Matrixes, LocalStorage'))
  gProjects.push(createProject('2', 'Mine Sweeper', 'my first project', 'img/portfolio/mineSweeper.jpg',
    'https://eladtal14.github.io/Mine-Sweeper/'))
  gProjects.push(createProject('3', 'Mine Sweeper', 'my first project', 'img/portfolio/mineSweeper.jpg',
    'https://eladtal14.github.io/Mine-Sweeper/'))
  gProjects.push(createProject('4', 'Mine Sweeper', 'my first project', 'img/portfolio/mineSweeper.jpg',
    'https://eladtal14.github.io/Mine-Sweeper/'))
  gProjects.push(createProject('5', 'Mine Sweeper', 'my first project', 'img/portfolio/mineSweeper.jpg',
    'https://eladtal14.github.io/Mine-Sweeper/'))
  gProjects.push(createProject('6', 'Mine Sweeper', 'my first project', 'img/portfolio/mineSweeper.jpg',
    'https://eladtal14.github.io/Mine-Sweeper/'))
}

function createProject(id, name, smallName, imgUrl, git, desc, date, labels) {
  var proj = {
    id,
    name,
    smallName,
    imgUrl,
    git,
    desc,
    date,
    labels,
  };
  return proj;
}

function getProjects() {
  return gProjects;
}

function getProjById(projId) {
  var project = gProjects.find(function (proj) {
    return proj.id === projId
  })
  return project
}