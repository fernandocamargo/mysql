export const get = () => `
  SELECT
    PRODUCTS.product_id AS id,
    PRODUCTS.product_name AS product,
    GROUP_CONCAT(PRODUCTS_I18N.string ORDER BY PRODUCTS_I18N.string ASC SEPARATOR ', ') AS i18n,
    GROUP_CONCAT(PRODUCTS_NUMBER.product_number ORDER BY PRODUCTS_NUMBER.product_number ASC SEPARATOR ', ') AS number
  FROM
    product_name AS PRODUCTS
  INNER JOIN
    product_i18n AS PRODUCTS_I18N ON PRODUCTS.product_id = PRODUCTS_I18N.product_id
  INNER JOIN
    product_number AS PRODUCTS_NUMBER ON PRODUCTS.product_id = PRODUCTS_NUMBER.product_id
  GROUP BY
    Product ASC
`;
