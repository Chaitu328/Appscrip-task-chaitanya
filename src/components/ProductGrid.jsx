import { ProductCard } from "./ProductCard";


export const ProductGrid = ({ viewMode }) => {
    // Product data
    const products = [
      { 
        id: 1, 
        name: 'PPPXC MLKYWAY DRESS III', 
        status: '', 
        image: '/assets/eco-friendly-grey-backpack.jpg',
        altText: 'Eco-friendly grey recycled backpack with foldable top'
      },
      { 
        id: 2, 
        name: 'PPPXC MLKYWAY DRESS III', 
        status: 'OUT OF STOCK', 
        image: '/assets/sustainable-plush-toy.jpg',
        altText: 'Colorful sustainable plush toy made from recycled materials'
      },
      { 
        id: 3, 
        name: 'PRODUCT NAME', 
        status: '', 
        image: '/assets/handcrafted-leather-strap.jpg',
        altText: 'Handcrafted leather strap accessory with metal buckle'
      },
      // Only rendering a few products to minimize DOM size
      { 
        id: 4, 
        name: 'PRODUCT NAME', 
        status: '', 
        image: '/assets/organic-cotton-cap.jpg',
        altText: 'White organic cotton cap with adjustable strap'
      },
      { 
        id: 5, 
        name: 'PRODUCT NAME', 
        status: '', 
        image: '/assets/dark-grey-backpack.jpg',
        altText: 'Dark grey recycled material backpack with side pockets'
      },
      { 
        id: 6, 
        name: 'PRODUCT NAME', 
        status: '', 
        image: '/assets/recycled-plush-dinosaur.jpg',
        altText: 'Yellow recycled fabric plush dinosaur toy'
      },
      { 
        id: 7, 
        name: 'PPPXC MLKYWAY DRESS III', 
        status: '', 
        image: '/assets/7.jpg',
        altText: 'Eco-friendly grey recycled backpack with foldable top'
      },
      { 
        id: 8, 
        name: 'PPPXC MLKYWAY DRESS III', 
        status: '', 
        image: '/assets/8.jpg',
        altText: 'Eco-friendly grey recycled backpack with foldable top'
      },
      { 
        id: 9, 
        name: 'PPPXC MLKYWAY DRESS III', 
        status: '', 
        image: '/assets/9.jpg',
        altText: 'Eco-friendly grey recycled backpack with foldable top'
      },
      { 
        id: 10, 
        name: 'PPPXC MLKYWAY DRESS III', 
        status: '', 
        image: '/assets/10.jpg',
        altText: 'Eco-friendly grey recycled backpack with foldable top'
      },
      { 
        id: 11, 
        name: 'PPPXC MLKYWAY DRESS III', 
        status: '', 
        image: '/assets/11.jpg',
        altText: 'Eco-friendly grey recycled backpack with foldable top'
      },
    ];
  
    return (
      <div className={`products-${viewMode}`}>
        {products.map(product => (
          <ProductCard 
            key={product.id}
            name={product.name}
            image={product.image}
            altText={product.altText}
            status={product.status}
          />
        ))}
      </div>
    );
  };