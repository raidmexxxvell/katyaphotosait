import React from 'react';
import Footer from './Footer';

const images = [
    { src: 'https://picsum.photos/seed/gall1/600/800?grayscale', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
    { src: 'https://picsum.photos/seed/gall2/800/600?grayscale', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { src: 'https://picsum.photos/seed/gall3/600/800?grayscale', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
    { src: 'https://picsum.photos/seed/gall4/800/600?grayscale', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { src: 'https://picsum.photos/seed/gall5/800/600?grayscale', colSpan: 'col-span-2', rowSpan: 'row-span-1' },
    { src: 'https://picsum.photos/seed/gall6/600/800?grayscale', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
    { src: 'https://picsum.photos/seed/gall7/800/600?grayscale', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { src: 'https://picsum.photos/seed/gall8/600/800?grayscale', colSpan: 'col-span-1', rowSpan: 'row-span-2' },
    { src: 'https://picsum.photos/seed/gall9/800/600?grayscale', colSpan: 'col-span-2', rowSpan: 'row-span-1' },
    { src: 'https://picsum.photos/seed/gall10/800/600?grayscale', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { src: 'https://picsum.photos/seed/gall11/600/800?grayscale', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
];

const Home: React.FC = () => {
    return (
    <div className="min-h-screen container mx-auto px-4 sm:px-4 lg:px-8 py-12 flex flex-col min-h-screen">
            <div className="flex-grow">
                <div className="text-center py-16 md:py-24">
                    <h1 className="text-3xl font-serif tracking-widest uppercase text-brand-light mb-4">WHO IS KATYA</h1>
                    <div className="text-sm font-serif tracking-widest text-brand-gray space-y-2">
                        <p>о вас</p>
                        <p>о любви</p>
                        <p>о красоте</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ gridAutoRows: 'minmax(200px, auto)' }}>
                    {images.map((image, index) => (
                        <div key={index} className={`${image.colSpan} ${image.rowSpan}`}>
                            <img src={image.src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
