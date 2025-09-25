import GalleryComponent from '../../components/GalleryComponent/GalleryComponent';
import HeroSection from '../../components/HeroSection';
import Layout from '../../components/Layout/Layout';
import { galleryImages } from '../../constants/galleryData';

function Gallery() {
  return (
    <Layout>
      <HeroSection
        title=""
        subtitle=""
        backgroundImage="https://iagros.com/wp-content/uploads/2024/09/GALERIA-DE-IMAGENES.png"
        height="300px"
        overlay={false}
        overlayOpacity={0.6}
        hideTextOnMobile={true}
        mobileBackgroundPosition="center top"
        backgroundSize="cover"
        mobileBackgroundSize="contain"
      />
      <GalleryComponent
        images={galleryImages}
        title="Nuestra Galería"
        showFilters={true}
        showImageInfo={true}
        columns={{
          mobile: 1,
          tablet: 2,
          desktop: 3
        }}
      />
    </Layout>
  );
}

export default Gallery;
