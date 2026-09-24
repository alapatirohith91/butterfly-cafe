import {Plus} from 'lucide-react';
import {motion} from 'framer-motion';
import {useCart} from '../context/CartContext';

const FALLBACK_IMAGE='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85';

export default function MenuCard({item}){
  const {add}=useCart();
  return <motion.article className="menu-card" whileHover={{y:-6}}>
    <div className="menu-img">
      <img src={item.img} alt={item.name} onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src=FALLBACK_IMAGE}}/>
      <span className={item.veg?'veg':'nonveg'}>{item.veg?'VEG':'NON-VEG'}</span>
    </div>
    <div className="menu-info">
      <div><h3>{item.name}</h3><p>{item.desc}</p></div>
      <strong>₹{item.price}</strong>
    </div>
    <button type="button" className="add-btn" onClick={()=>add(item)}><Plus size={17}/> Add</button>
  </motion.article>
}