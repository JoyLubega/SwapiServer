const { RESTDataSource } = require("apollo-datasource-rest");

class starWarsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.dev/api/";
  }

  async getAllPeople() {
    const response = await this.get("people");
    return Array.isArray(response.results)
      ? new Array(response)
      : [];
  }

  async getPeopleByPage({ pageNum }) {
    const response = await this.get("people/", { page: pageNum });
    return Array.isArray(response.results)
      ? new Array(response)
      : [];
  }

  async getPeopleByName({ nameSearch }) {
    const response = await this.get("people/", { search: nameSearch });
    return Array.isArray(response.results)
      ? new Array(response)
      : [];
  }

}

module.exports = starWarsAPI;