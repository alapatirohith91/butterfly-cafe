import {useMemo,useState} from 'react';
import {Search,SlidersHorizontal} from 'lucide-react';
import MenuCard from '../components/MenuCard';
import {menuItems} from '../data/menu';

export default function Menu(){
  const cats=['All','Coffee','Cold Coffee','Tea','Mocktails','Breakfast','Starters','Pizza','Pasta','Burgers','Desserts'];
  const [cat,setCat]=useState('All'),[q,setQ]=useState('');
  const filtered=useMemo(()=>menuItems.filter(x=>(cat==='All'||x.cat===cat)&&`${x.name} ${x.desc}`.toLowerCase().includes(q.toLowerCase())),[cat,q]);
  const chooseCategory=(next)=>setCat(next);
  return <main className="page">
    <div className="page-hero"><span>THE DIGITAL MENU</span><h1>Something delicious awaits.</h1><p>From slow morning coffee to late-night desserts, find your next favourite.</p></div>
    <section className="section menu-page">
      <div className="menu-toolbar">
        <div className="search"><Search size={18}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search the menu..." aria-label="Search the menu"/></div>
        <div className="category-scroll" role="tablist" aria-label="Menu categories">
          {cats.map(c=><button type="button" className={cat===c?'active':''} onClick={()=>chooseCategory(c)} key={c} role="tab" aria-selected={cat===c}>{c}</button>)}
        </div>
      </div>
      <div className="menu-grid">{filtered.map(x=><MenuCard key={x.id} item={x}/>)}</div>
      {!filtered.length&&<div className="empty"><SlidersHorizontal/><h3>Nothing matched that search.</h3><p>Try another dish or browse a different category.</p></div>}
    </section>
  </main>
}