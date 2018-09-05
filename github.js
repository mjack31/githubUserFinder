class GitHub {
  constructor() {
    this.url = 'https://api.github.com/'
    this.ID = '0a962f9b596d8d9a4d05';
    this.secret = 'd0ca996ce555f47f823f6f4c28b6c845c3121e73'
  }

  //get users
  async getUserProfile(username) {
    const user = await fetch(`${this.url}users/${username}?client_id=${this.ID}&client_secret=${this.secret}`);
    return await user.json();
  }

  //get repos
  async getUserRepos(username) {
    const repos = await fetch(`${this.url}users/${username}/repos?client_id=${this.ID}&client_secret=${this.secret}`);
    return await repos.json();
  }

  //wrap everything in object
  async getUser(username) {
    const profile = await this.getUserProfile(username);
    const repos = await this.getUserRepos(username);

    return await {profile, repos}
  }
}