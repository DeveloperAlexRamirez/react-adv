import styles from '../assets/styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';

import noImage from '../assets/no-image.jpg';

interface Props {
  product: Product;
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

// img is opcional
export const ProductImage = ({ img = '' }) => {
  return (
    <img
      className={styles.productImg}
      src={img ? img : noImage}
      alt="Product image"
    />
  );
};

// title is required
export const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>;
};

// Al hacerlo de esta forma, obligamos a que mande un producto siempre

const ProductCard = ({ product }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <ProductImage img={product.img} />

      <ProductTitle title={product.title} />

      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>

        <div className={styles.countLabel}>{counter}</div>

        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
