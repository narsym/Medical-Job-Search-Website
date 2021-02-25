// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import filters from "../../data/filters";

export default (req, res) => {
  res.statusCode = 200;
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()))
  res.json(filters);
};
