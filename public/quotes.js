const request = require("request");
var category = "inspirational";
var quote = "hello";
request.get(
  {
    url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
    headers: {
      "X-Api-Key": "I9qPvSIh5XnlJboo7RV1GA==zhBABt2fmA4kEtSN",
    },
  },
  function (error, response, body) {
    if (error) return console.error("Request failed:", error);
    else if (response.statusCode != 200)
      return console.error(
        "Error:",
        response.statusCode,
        body.toString("utf8")
      );
    else {
      quote = JSON.parse(body)[0]["quote"];
      return quote;
    }
  }
);

console.log(quote);
