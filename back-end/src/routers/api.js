const express = require("express");
const db = require("../db");

const router = express.Router();

// 쿼리문 구조
// 제품 리스트 페이지에서 보여질 "/products"
// 상품 디테일 페이지(TB_Products - TB_Info - TB_Manufacture) 표현 어떻게?
// 결제창 (TB_Payment)
// 인증서 및 대여기록(rent_date, rent_state)은 지금 상황에서 데이터 보여주는것만
// TB_Payment에서 start_rent, end_rent 등 데이터 받는 방법
// TB_Record에서 rent_date에서 데이터 어떻게 받는지,
// rent_state data type('렌트가능', '렌트중')이 맞는지
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
        image.image_id,
        image.image_main,
        image.image_type,
        productGroup.group_id,
        productGroup.product_name,
        productGroup.product_tag,
        productGroup.number_stock,
        productGroup.number_rent
        FROM TB_Products AS product
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
