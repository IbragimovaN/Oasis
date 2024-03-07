import { Button } from "../../components";
import styles from "./Product-card.module.css";
export const ProductCard = ({ product }) => {
	const {
		id,
		title,
		brand,
		categorionic,
		skinType,
		price,
		rating,
		imageUrl,
		description,
	} = product;
	return (
		<div className={styles.wrapper}>
			<img className={styles.image} src={imageUrl} />
			<h3>{title}</h3>
			<div>{price}</div>
			<Button>В корзину</Button>
		</div>
	);
};
