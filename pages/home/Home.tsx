import { calendarEvents } from '../../constants/calendarData';
import { carouselItems } from '../../constants/carouselData';
import { galleryItems } from '../../constants/galleryData';
import { partnersData } from '../../constants/partnersData';
import Calendar from './components/Calendar/Calendar';
import Carousel from './components/Carousel/Carousel';
import Gallery from './components/Gallery/Gallery';
import Partners from './components/Partners/Partners';

function Home() {
  return (
    <>
      <Carousel items={carouselItems} />
      <Gallery
        subtitle="Comprometidos con la excelencia en cada servicio"
        title={'TRABAJAMOS PARA OFRECERLES LO MEJOR'}
        items={galleryItems}
      />
      <Partners
        title="NUESTRAS MARCAS ALIADAS"
        subtitle="Colaboramos con las mejores marcas del sector para garantizar calidad"
        partners={partnersData}
      />
      <Calendar
        events={calendarEvents}
        title="CALENDARIO DE EVENTOS"
        subtitle="Mantente al día con nuestros próximos eventos y actividades"
      />
    </>
  );
}

export default Home;
