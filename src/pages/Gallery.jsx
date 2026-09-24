import {useState} from 'react';
import SectionHeading from '../components/SectionHeading';
import Lightbox from '../components/Lightbox';
import {gallery} from '../data/menu';

export default function Gallery(){
  const [i,setI]=useState(null);
  return <main className="page">
    <div className="page-hero"><span>THE BUTTERFLY MOMENTS</span><h1>Food, corners & little joys.</h1><p>A visual diary of the place we love building for you.</p></div>
    <section className="section">
      <SectionHeading eyebrow="GALLERY" title="Take a look around"/>
      <div className="gallery-full">
        {gallery.map((x,n)=><button type="button" key={x} className={'gallery-full-item g-'+n} onClick={()=>setI(n)} aria-label={`Open gallery image ${n+1}`}><img src={x} alt="Butterfly Cafe gallery"/><span>View</span></button>)}
      </div>
    </section>
    <Lightbox images={gallery} index={i} setIndex={setI} close={()=>setI(null)}/>
  </main>
}