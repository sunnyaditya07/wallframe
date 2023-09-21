function Image({ items }) {
  return (
    <div className="description">
      <img
        src={items.urls.regular}
        alt={items.alt_description}
        className="image"
      />
      <div className="image-content">
        <p className="image-owner">Author: {items.user.name}</p>
        <p className="image-description">
          Description: {items.alt_description}
        </p>
        <a href={items.links.html} className="original-link">
          Original link of image
        </a>
      </div>
    </div>
  );
}

export default Image;
