import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { brand, name, price, discount, likes } = product;
  const finalPrice = Math.round((price * (100 - discount)) / 100);

  return (
    <article className="card">
      <div className="card__thumb" />
      <div className="card__body">
        <p className="card__brand">{brand}</p>
        <p className="card__name">{name}</p>
        <p className="card__price">
          {discount > 0 && <span className="card__discount">{discount}%</span>}
          <span className="card__final">{finalPrice.toLocaleString()}원</span>
        </p>
        <p className="card__likes">♡ {likes.toLocaleString()}</p>
      </div>
    </article>
  );
}
