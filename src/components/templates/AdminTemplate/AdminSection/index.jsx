import './index.css'
import './responsive.css'
import { CardList } from "../../../CardList";
import { SearchInput } from "../../../SearchInput";
import { Plus } from "phosphor-react"
import { Link } from 'react-router-dom';

export function AdminSection({
  title,
  data
}) {
  return (
    <main className="main-adm">
    <div className="main-adm__list__title">
      <h1>{title}</h1>
      <Link
       to={window.location.pathname === "/admin/parceiros"?
       "/admin/parceiros/cadastro" 
       :
       "/admin/receitas/cadastro"
      }>
        <Plus
          className="plus-icon"
          size={50}
          color="var(--white)"
        />
      </Link>
    </div>
    <SearchInput />
    <section className="card-list__sectiom" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {data?.map((item, index) => (
        <CardList key={index} data={item} />
      ))}
    </section>
  </main>
  )
}