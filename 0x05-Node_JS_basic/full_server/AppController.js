/**
 * Contains the miscellaneous route handlers.
 * @author mohammed abdelmoneim <https://github.com/mohammed-abdelmoneim>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send("Hello Holberton School!");
  }
}

export default AppController;
module.exports = AppController;
