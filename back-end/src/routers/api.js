const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/products", (req, res, next) => {
  const { pageNo, productBrand } = req.query;

  let query = `
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
    WHERE product.product_brand = "${productBrand}"
    LIMIT ${((pageNo || 1) - 1) * 6}, 6
  `;

  if (productBrand == "") {
    query = `
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
      LIMIT ${((pageNo || 1) - 1) * 6}, 6
    `;
  }

  db.getConnection((err, conn) => {
    if (err) return res.status(403);
    conn.query(query, (err, results) => {
      console.log(err);
      if (err) return res.status(403);
      res.send(results);
    });
  });
});

router.get("/detail", (req, res, next) => {
  const productId = req.query.product_id;
  db.getConnection((err, conn) => {
    if (err) return res.status(403);
    conn.query(
      `
      SELECT T1.product_id, T1.product_brand, T1.rent_price, T1.product_color, T2.product_name, T2.number_stock, T3.info_gender, T3.info_material, T4.manufacture_name, T4.manufacture_adr, T5.image_main, T5.image_type
      FROM TB_Products T1, TB_ProductGroup T2, TB_Info T3, TB_Manufacture T4, TB_Image T5
      WHERE T1.product_id = ${productId} and T1.group_id = T2.group_id AND T1.info_id = T3.info_id AND T3.manufacture_id = T4.manufacture_id AND T1.product_id = T5.product_id
      `,
      (err, results) => {
        if (err) return res.status(403);
        res.send(results);
      }
    );
  });
});

router.get("/basket", (req, res, next) => {
  db.getConnection((err, conn) => {
    if (err) return res.status(403);
    conn.query(
      `
      select T1.product_id, T1.product_brand, T1.rent_price, T1.product_color,T2.product_name, T3.basket_id, T4.image_main 
      from TB_Products T1, TB_ProductGroup T2, TB_Basket T3, TB_Image T4
      where T1.group_id = T2.group_id and T1.product_id = T3.product_id and T4.product_id = T1.product_id 
      `,
      (err, results) => {
        if (err) return res.status(403);
        res.send(results);
      }
    );
  });
});

router.get("/payments", (req, res, next) => {
  const productId = req.query.product_id;
  db.getConnection((err, conn) => {
    conn.query(
      `
      select T1.product_id, T1.rent_price, T1.product_color,T2.product_name, T3.payment_id, T3.start_rent, T3.end_rent 
      from TB_Products T1, TB_ProductGroup T2, TB_Payment T3
      where T1.product_id = ${productId} and T1.group_id = T2.group_id and T1.product_id = T3.product_id
      `,
      (err, results) => {
        if (err) return res.status(403);
        res.send(results);
      }
    );
  });
  (err, results) => {
    if (err) return res.status(403);
    res.send(results);
  };
});

router.post("/payments", (req, res, next) => {
  db.getConnection((err, conn) => {
    if (err) throw err;
    conn.query(
      `
        SELECT * FROM TB_Products WHERE product_id = ?
      `,
      [req.body.productId],
      (err, results) => {
        if (err) return res.status(404).send("존재하지 않는 상품입니다.");

        if (!Array.isArray(results) || results.length < 1) {
          return res.status(404).send("존재하지 않는 상품입니다.");
        }

        // results[0].product_id 은 Select 를 id로 했기 때문에 결과가 있으면 무조건 0번째 index에 있음. id는 유일키
        conn.query(
          `
            INSERT INTO TB_Payment(start_rent, end_rent, product_id) VALUES(?, ?, ?)
          `,
          [req.body.start_rent, req.body.end_rent, results[0].product_id],
          (err, results) => {
            if (err) return res.status(403).send("error");
            return res.status(200).send(results);
          }
        );
      }
    );
  });
});

router.get("/certificate", (req, res, next) => {
  const productId = req.query.product_id;
  db.getConnection((err, conn) => {
    if (err) return res.status(403);
    conn.query(
      `
        select T1.product_id, T1.product_brand, T1.product_state, T2.product_name, T3.responsible, T3.code, T3.number_times 
        from TB_Products T1, TB_ProductGroup T2, TB_Certification T3
        where T1.product_id = ${productId} and T1.group_id = T2.group_id and T1.certificate_id = T3.certificate_id 
      `,
      (err, results) => {
        if (err) return res.status(403);
        res.send(results);
      }
    );
  });
});

router.get("/record", (req, res, next) => {
  const productId = req.query.product_id;
  db.getConnection((err, conn) => {
    if (err) return res.status(403);
    conn.query(
      `
        select T1.product_id, T1.product_brand, T1.product_state, T2.product_name, T3.record_id, T3.rent_date, T3.rent_state 
        from TB_Products T1, TB_ProductGroup T2, TB_Record T3
        where T1.product_id = ${productId} and T1.group_id = T2.group_id and T1.product_id = T3.product_id
      `,
      (err, results) => {
        if (err) return res.status(403);
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
