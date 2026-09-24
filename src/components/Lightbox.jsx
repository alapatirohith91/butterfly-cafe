import {useEffect} from 'react';
import {X,ChevronLeft,ChevronRight} from 'lucide-react';

export default function Lightbox({images,index,setIndex,close}){
  useEffect(()=>{
    if(index===null) return;
    const onKeyDown=e=>{
      if(e.key==='Escape') close();
      if(e.key==='ArrowLeft') setIndex((index-1+images.length)%images.length);
      if(e.key==='ArrowRight') setIndex((index+1)%images.length);
    };
    document.addEventListener('keydown',onKeyDown);
    return ()=>document.removeEventListener('keydown',onKeyDown);
  },[index,images.length,setIndex,close]);

  if(index===null)return null;
  return <div className="lightbox" onClick={close} role="dialog" aria-modal="true" aria-label="Image viewer">
    <button type="button" className="lb-close" onClick={close} aria-label="Close"><X/></button>
    <button type="button" className="lb-prev" onClick={e=>{e.stopPropagation();setIndex((index-1+images.length)%images.length)}} aria-label="Previous image"><ChevronLeft/></button>
    <img src={images[index]} onClick={e=>e.stopPropagation()} alt="Butterfly Cafe"/>
    <button type="button" className="lb-next" onClick={e=>{e.stopPropagation();setIndex((index+1)%images.length)}} aria-label="Next image"><ChevronRight/></button>
  </div>
}