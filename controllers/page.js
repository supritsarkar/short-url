export function renderResultPage(req, res) {
  const id = req.query.id;
  if (!id) return res.redirect("/url");

  res.render("result", { id });
}
