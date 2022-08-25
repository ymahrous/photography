import InstaImage from './InstaImage';
import Img1 from '../public/ig/img-1.jpeg';
import Img2 from '../public/ig/img-2.jpeg';
import Img3 from '../public/ig/img-3.jpeg';
import Img4 from '../public/ig/img-4.jpeg';
import Img5 from '../public/ig/img-5.jpeg';
import Img6 from '../public/ig/img-6.jpeg';

export default function InstaGallery() {
    return (
        <div className="relative max-w-[1240px] mx-auto text-center py-24">
            <p className='text-2xl font-bold'>Follow me on instagram</p>
            <p className='pb-4'>@capture</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
                <InstaImage image={Img1} url='https://instagram.com' />
                <InstaImage image={Img2} url='https://instagram.com' />
                <InstaImage image={Img3} url='https://instagram.com' />
                <InstaImage image={Img4} url='https://instagram.com' />
                <InstaImage image={Img5} url='https://instagram.com' />
                <InstaImage image={Img6} url='https://instagram.com' />
            </div>
        </div>
    );
};