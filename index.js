

//write a middleware function that logs every request method url and timeStamp and move to next middleware


const middleware = (request, response, next) => {

  console.log(`${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`);
  next();
};
app.use(middleware);
