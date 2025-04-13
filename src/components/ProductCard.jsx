export const ProductCard = ({ name, image, altText, status, viewMode }) => {
  return (
    <article className={`product-card ${viewMode === 'list' ? 'list-view' : ''}`}>
      <div className="product-image-container">
        <img src={image} alt={altText} className="product-image" />
        {status && <div className="product-status">{status}</div>}
        <button className="favorite-button" aria-label="Add to favorites">
          <span className="icon-heart">❤️</span>
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-action">Sign in or create an account to see pricing</p>
        <button className="favorite-button-mobile" aria-label="Add to favorites">
          <span className="icon-heart">❤️</span>
        </button>
      </div>
    </article>
  );
};
