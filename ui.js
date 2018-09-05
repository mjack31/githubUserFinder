class UI {
  constructor() {
    this.userUI = document.querySelector('#userProfile');
  }

  showProfile(user) {
    this.userUI.innerHTML = `
      <div class="card-header">
      <h4>${user.profile.login}</h4>
      <div class="row">
        <div class="col-md-4">
          <figure class="figure w-100">
            <img src="${user.profile.avatar_url}"
              class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
            <figcaption class="figure-caption">
              <a class="btn btn-outline-success btn-block" href="${user.profile.html_url}">Show profile</a>
            </figcaption>
          </figure>
        </div>
        <div class="col-md-8">
          <span class="badge badge-success">Followers: ${user.profile.followers}</span>
          <span class="badge badge-secondary">Following: ${user.profile.following}</span>
          <span class="badge badge-primary">Repos: ${user.profile.public_repos}</span>
          <span class="badge badge-info">Gists: ${user.profile.public_gists}</span>
          <div class="card mt-1">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${user.profile.name}</li>
              <li class="list-group-item">Created at: ${user.profile.created_at}</li>
              <li class="list-group-item">Blog: ${user.profile.blog}</li>
              <li class="list-group-item">Location: ${user.profile.location}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <h4>Last repos:</h4>
      <div class="card mt-1">
        <ul class="list-group list-group-flush" id="repos">

        </ul>
      </div>
    `
  }

  showRepos(user) {
    const reposList = document.querySelector('#repos');
    const reposArr = user.repos;

    reposArr.forEach(repo => {
      reposList.innerHTML += `
      <li class="list-group-item">
        <div class="row">
          <div class="col-7">
            <span>${repo.name}</span>
          </div>
          <div class="col-5">
            <span class="badge badge-success">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers}</span>
            <span class="badge badge-primary">Forks: ${repo.forks}</span>
          </div>
        </div>
      </li>`
    })
  }

  clearProfile() {
    this.userUI.innerHTML = ``;
  }
}

/* <li class="list-group-item">
<div class="row">
  <div class="col-8">
    <span>Repo name</span>
  </div>
  <div class="col-4">
    <span class="badge badge-success">Success</span>
    <span class="badge badge-secondary">Success</span>
    <span class="badge badge-primary">Success</span>
  </div>
</div>
</li> */