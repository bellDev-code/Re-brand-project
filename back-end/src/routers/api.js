const express = require("express");
const db = require("../db");

const router = express.Router();

// status code 200대 = 정상
// status code 400대 = error
router.get("/products", (req, res, next) => {
  db.getConnection((err, conn) => {
    if (err) return res.status(403);
    conn.query(
      `
      SELECT 
        product.product_id, 
        product.product_brand,
        product.product_color,
        product.rent_price,
        info.info_id,
        info.info_gender,
        info.info_material,
        image.image_id,
        image.image_main,
        image.image_type,
        productGroup.group_id,
        productGroup.product_name,
        productGroup.product_tag,
        productGroup.number_stock,
        productGroup.number_rent
        FROM TB_Products AS product
        LEFT JOIN TB_Info AS info ON product.info_id = info.info_id
        LEFT JOIN TB_Image AS image ON product.product_id = image.product_id
        LEFT JOIN TB_ProductGroup AS productGroup ON product.group_id = productGroup.group_id
      `,
      (err, results) => {
        console.log(err);
        if (err) return res.status(403);
        console.log(results);
        res.send(results);
      }
    );
  });
});

router.post("/products", (req, res, next) => {
  db.getConnection((err, conn) => {
    if (err) return res.status(403);

    conn.query(
      `
      INSERT INTO TB_Info(info_gender, info_material) VALUES('female', 'any')
      `,
      (err, results) => {
        if (err) return res.status(403);
        console.log(results.insertId);

        conn.query(
          `
          INSERT INTO TB_Products(product_brand, product_color ,rent_price, info_id) VALUES(?, ?, ?, ?)
        `,
          [
            req.body.brand,
            req.body.color,
            req.body.rent_price,
            results.insertId,
          ],
          (err, results) => {
            if (err) throw err;
            console.log(results);
          }
        );
      }
    );
  });
  res.status(200).send("hi");
});

module.exports = router;
