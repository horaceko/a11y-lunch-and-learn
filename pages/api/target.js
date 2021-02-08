// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import qs from "qs";

export default (req, res) => {
  res.status(200).json(qs.parse(req.body));
};
