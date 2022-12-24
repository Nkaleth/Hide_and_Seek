let projects = {
  1 : {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'img/Snapshoot_Portfolio_desktop.png',
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'] ,
    liveVersion: '#url',
    linkSource: '#url'
  },
  2 : {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'img/Snapshoot_Portfolio_desktop.png',
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'] ,
    liveVersion: '#url',
    linkSource: '#url'
  },
  3 : {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'img/Snapshoot_Portfolio_desktop.png',
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'] ,
    liveVersion: '#url',
    linkSource: '#url'
  },
  4 : {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'img/Snapshoot_Portfolio_desktop.png',
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'] ,
    liveVersion: '#url',
    linkSource: '#url'
  },
  5 : {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'img/Snapshoot_Portfolio_desktop.png',
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'] ,
    liveVersion: '#url',
    linkSource: '#url'
  },
  6 : {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'img/Snapshoot_Portfolio_desktop.png',
    technologies: ['Ruby on rails', 'css', 'JavScript', 'Codekit', 'Github', 'Bootstrap', 'Terminal', 'Codepen'] ,
    liveVersion: '#url',
    linkSource: '#url'
  },
}
lets countProj = Object.keys(projects).length;

function createStrProjects(num) {
  let string = '';
  for(let i=1;i<=num;i++){
    string += `<article class="project"><img class="proj-image" src="${projects[i].featuredImage}" alt="ProjectImage"><h3 class="Proj-Text">${projects[i].name}</h3><ul><li class="tag">${projects[i].technologies[1]}</li><li class="tag">${projects[i].technologies[2]}</li><li class="tag">${projects[i].technologies[3]}</li></ul><a href="#project"><img class="ButtonProj" src="" alt="ButtonEnable"></a></article>`;
  }
  return string;
}

document.addEventListener("DOMContentLoaded", () => {
 let string = createStrProjects(countProj);
  document.querySelector('#portf').innerHTML = string;

});



