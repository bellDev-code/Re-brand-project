require("dotenv").config();

const db = require("mysql").createPool({
  database: process.env.database,
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
});

// ALTER 안써지는 문법 문제 물어보기

db.getConnection((err, conn) => {
  conn.query(
    `  
    CREATE TABLE IF NOT EXISTS TB_Manufacture
    (
        manufacture_id    INT            NOT NULL    AUTO_INCREMENT COMMENT '제품 제조사 아이디', 
        manufacture_name  VARCHAR(45)    NULL        COMMENT '제조사 이름', 
        manufacture_adr   VARCHAR(45)    NULL        COMMENT '제조사 주소', 
        CONSTRAINT PK_TB_manufacture PRIMARY KEY (manufacture_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `,
    (err, results, fields) => {
      if (err) throw err;
    }
  );

  conn.query(
    `  
      CREATE TABLE IF NOT EXISTS TB_Info
      (
          info_id          INT            NOT NULL    AUTO_INCREMENT COMMENT '제품 정보 아이디', 
          manufacture_id  INT            NULL        COMMENT '제품 제조사 아이디', 
          info_gender      ENUM('female', 'male')           NULL        COMMENT '제품 성별', 
          info_material    VARCHAR(45)    NULL        COMMENT '제품 소재', 
          CONSTRAINT PK_TB_Info PRIMARY KEY (info_id),
          CONSTRAINT FK_TB_Manufacture_manufacture_id_TB_Info_manufacture_id FOREIGN KEY(manufacture_id)
          REFERENCES TB_Manufacture(manufacture_id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `,
    (err, results, fields) => {
      if (err) throw err;
    }
  );

  conn.query(
    `  
    CREATE TABLE IF NOT EXISTS TB_ProductGroup
    (
        group_id      INT            NOT NULL    AUTO_INCREMENT COMMENT '제품 그룹아이디', 
        product_name  VARCHAR(45)    NULL        COMMENT '제품 이름', 
        product_tag   ENUM('BAG', 'WATCH')          NULL        COMMENT '제품 태그', 
        number_stock  INT            NULL        COMMENT '재고수', 
        number_rent   INT            NULL        COMMENT '렌트수', 
        CONSTRAINT PK_TB_ProductGroup PRIMARY KEY (group_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `,
    (err, results, fields) => {
      if (err) throw err;
    }
  );

  conn.query(
    `  
    CREATE TABLE IF NOT EXISTS TB_Certification
    (
        certificate_id      INT            NOT NULL    COMMENT '인증서 아이디', 
        number_times  INT            NULL        COMMENT '대여 횟수', 
        responsible   VARCHAR(45)    NULL        COMMENT '책임자', 
        code          VARCHAR(45)    NULL        COMMENT '일련번호', 
        CONSTRAINT PK_TB_certification PRIMARY KEY (certificate_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `,
    (err, results, fields) => {
      if (err) throw err;
    }
  );

  conn.query(
    `  
      CREATE TABLE IF NOT EXISTS TB_Products
      (
          product_id        INT            NOT NULL    AUTO_INCREMENT COMMENT '제품 아이디', 
          group_id          INT            NULL        COMMENT '제품 그룹아이디', 
          info_id           INT            NOT NULL        COMMENT '제품 정보 아이디', 
          payment_id        INT            NULL        COMMENT '결제 아이디', 
          product_brand     VARCHAR(45)    NULL        COMMENT '제품 브랜드', 
          rent_price        INT            NULL        COMMENT '렌트 가격', 
          product_state     VARCHAR(45)    NULL        COMMENT '제품 상태', 
          product_color     VARCHAR(45)    NULL        COMMENT '제품 색상', 
          certificate_id  INT            NULL        COMMENT '인증서 아이디', 
          CONSTRAINT PK_TB_Products PRIMARY KEY (product_id),
          CONSTRAINT FK_TB_Info_info_id_TB_Products_info_id  FOREIGN KEY (info_id)
          REFERENCES TB_Info(info_id),
          CONSTRAINT FK_TB_ProductGroup_group_id_TB_Products_group_id  FOREIGN KEY (group_id)
          REFERENCES TB_ProductGroup(group_id),
          CONSTRAINT FK_TB_Certification_certificate_id_TB_Products_certificate_id FOREIGN KEY (certificate_id)
          REFERENCES TB_Certification(certificate_id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `,
    (err, results, fields) => {
      if (err) throw err;
    }
  );

  conn.query(
    `  
    CREATE TABLE IF NOT EXISTS TB_Payment
    (
        payment_id   INT         NOT NULL    AUTO_INCREMENT COMMENT '결제 아이디', 
        product_id   INT         NOT NULL    COMMENT '제품 아이디', 
        start_rent   DATETIME    NULL        COMMENT '렌트 시작시간', 
        end_rent     DATETIME    NULL        COMMENT '렌트 종료시간', 
        daily_price  INT         NULL        COMMENT '하루당 렌트 가격', 
        total_price  INT         NULL        COMMENT '총결제금액', 
        CONSTRAINT PK_TB_Payment PRIMARY KEY (payment_id),
        CONSTRAINT FK_TB_Products_product_id_TB_Payment_product_id FOREIGN KEY(product_id)
        REFERENCES TB_Products(product_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `,
    (err, results, fields) => {
      if (err) throw err;
    }
  );

  conn.query(
    `  
    CREATE TABLE IF NOT EXISTS TB_Basket
    (
        basket_id   INT    NOT NULL    AUTO_INCREMENT COMMENT '장바구니 아이디', 
        product_id  INT    NULL        COMMENT '제품 아이디', 
        CONSTRAINT PK_TB_Basket PRIMARY KEY (basket_id),
        CONSTRAINT FK_TB_Products_product_id_TB_Basket_product_id FOREIGN KEY(product_id)
        REFERENCES TB_Products(product_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `,
    (err, results, fields) => {
      if (err) throw err;
    }
  );

  conn.query(
    `  
    CREATE TABLE IF NOT EXISTS TB_Record
    (
        record_id   INT     NOT NULL    AUTO_INCREMENT COMMENT '대여 기록 아이디', 
        product_id  INT     NULL        COMMENT '제품 아이디', 
        rent_Date   INT     NULL        COMMENT '대여 일수', 
        rent_state  ENUM('HIGH', 'MIDDLE', 'LOW')    NULL        COMMENT '대여 상태', 
        CONSTRAINT PK_TB_Record PRIMARY KEY (record_id),
        CONSTRAINT FK_TB_Products_product_id_TB_Record_product_id FOREIGN KEY(product_id)
        REFERENCES TB_Products(product_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `,
    (err, results, fields) => {
      if (err) throw err;
    }
  );

  conn.query(
    `  
    CREATE TABLE IF NOT EXISTS TB_Image
    (
        image_id    INT             NOT NULL    AUTO_INCREMENT COMMENT '제품 이미지 아이디', 
        product_id  INT             NULL        COMMENT '제품 아이디', 
        image_main  VARCHAR(100)    NULL        COMMENT '파일명', 
        image_type  ENUM('PRODUCT', 'MODEL')           NULL        COMMENT '사진유형', 
        CONSTRAINT PK_TB_Image PRIMARY KEY (image_id),
        CONSTRAINT FK_TB_Products_product_id_TB_Image_product_id FOREIGN KEY(product_id)
        REFERENCES TB_Products(product_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `,
    (err, results, fields) => {
      if (err) throw err;
    }
  );

  conn.query(
    `  
    CREATE TABLE IF NOT EXISTS TB_Post
    (
        post_id    INT            NOT NULL    AUTO_INCREMENT COMMENT '메인 아이디', 
        post_main  VARCHAR(45)    NULL        COMMENT '파일명', 
        post_type  ENUM('WEEKLY', 'BEST')          NULL        COMMENT '포스터 유형', 
        CONSTRAINT PK_TB_Post PRIMARY KEY (post_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `,
    (err, results, fields) => {
      if (err) throw err;
    }
  );
});

module.exports = db;
