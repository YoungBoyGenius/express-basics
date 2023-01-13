const express = require("express");
const { products } = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1><a href = '/api/products'>Products</a>`);
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, price } = product;
    return { id, name, price };
  });

  res.send(newProducts);
});
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;

  const singleProducts = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProducts) {
    res.status(404).send("product does not exist ");
  }

  res.json(singleProducts);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("review");
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedproducts = [...products];

  if (search) {
    sortedproducts = sortedproducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedproducts = sortedproducts.slice(0, Number(limit));
  }

  if (sortedproducts.length < 1) {
    // res.status(200).send("no products match your search");
    res.status(200).json({ success: "true", data: [] });
  }
  res.status(200).json(sortedproducts);
});

app.listen(3500, (req, res) => {
  console.log("server running on port 3500...");
});
