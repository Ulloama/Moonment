import React from 'react';
import { Link , NavLink } from 'react-router-dom';

function Links ({categories}) {
  /*   const [category, setCategory] = useState([]);

  useEffect (() => {
      const db = getFirestore();

      const itemCollection = db.collection('items');
      itemCollection.get().then((querySnapshot) => {
        setCategory(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id})));
      });
  }, []); */

  return (
      <>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <Link to={`/`}>
              <li className="nav-link active">Inicio</li>
          </Link>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Productos
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {categories.map(cat =>
                    <NavLink to={`/categories/${cat.id}`} className="dropdown-item" key={cat.id}>
                      {cat.name}
                    </NavLink>
                  )}
              </div>
            </li>
        </ul>
      </div>
      </>
)}

export default Links;