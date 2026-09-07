import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";
import "./Home.css";

export default function Home() {
  const [selected, setSelected] = useState("전체");

  const filtered =
    selected === "전체"
      ? products
      : products.filter((p) => p.category === selected);

  return (
    <main className="container">
      <section className="hero">
        <h1>지금 뜨는 상품</h1>
        <p>실시간 인기 아이템을 만나보세요</p>
      </section>

      <div className="filters">
        {categories.map((c) => (
          <button
            key={c}
            className={`filters__btn ${selected === c ? "is-active" : ""}`}
            onClick={() => setSelected(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
